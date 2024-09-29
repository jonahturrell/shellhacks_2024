const express = require('express');
const { exec } = require('child_process');
const imaps = require('imap-simple');
const { simpleParser } = require('mailparser');
const app = express();
const port = 3001;

app.use(express.json());

// Email reading functionality
app.post('/read-emails', async (req, res) => {
    const { user, password, host, port, tls } = req.body;

    const config = {
        imap: {
            user,
            password,
            host, 
            port: port || 993,
            tls: tls !== undefined ? tls : true,
            authTimeout: 3000
        }
    };

    try {
        const connection = await imaps.connect(config);
        await connection.openBox('INBOX');

        const searchCriteria = ['UNSEEN'];
        const fetchOptions = {
            bodies: ['HEADER.FIELDS (FROM TO SUBJECT DATE)', 'TEXT', ''],
            markSeen: false
        };

        const results = await connection.search(searchCriteria, fetchOptions);
        
        console.log(`Fetched ${results.length} emails`);

        const emails = await Promise.all(results.map(async (item) => {
            let all = item.parts.find(part => part.which === 'TEXT');
            
            if (!all) {
                all = item.parts.find(part => part.which === '');
            }
            
            if (!all) {
                console.warn('No TEXT or BODY part found in item', item);
                return null;
            }

            const parsed = await simpleParser(all.body);
            return {
                subject: parsed.subject || 'Hello',
                from: parsed.from ? parsed.from.text : 'jonah@turrell.xyz',
                to: parsed.to ? parsed.to.text : 'ashewangda@shellhacksdinomail.xyz',
                date: parsed.date || 'Sat, 28 Sep 2024 23:03:11 -0400',
                text: parsed.text || 'I really hope you get this :)',
                html: parsed.html || ''
            };
        })).then(emails => emails.filter(email => email !== null)); // Filter out null results

        res.send({ emails });
        connection.end();
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

