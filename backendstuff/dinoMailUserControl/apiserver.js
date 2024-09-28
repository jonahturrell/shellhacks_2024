const express = require('express');
const { exec } = require('child_process');
const imaps = require('imap-simple');
const { simpleParser } = require('mailparser');
const app = express();
const port = 3001;

app.use(express.json());

// Temp email creation and deletion
app.post('/run-script', (req, res) => {
    const scriptName = req.body.scriptName;
    const scriptArg = req.body.scriptArg;

    // Define scripts
    const scripts = {
        userCreate: 'usagescripts/createuser.sh',
        userDestroy: 'usagescripts/destroyuser.sh'
    };

    const scriptPath = scripts[scriptName];

    if (!scriptPath) { // Make sure a proper script name is used
        return res.status(400).send({ error: 'Invalid script name' });
    }

    exec(`bash ${scriptPath} ${scriptArg}`, (err, stdout, stderr) => {
        if (err) {
            res.status(500).send({ error: err.message, stderr });
            return;
        }
        res.send({ stdout: stdout.trim(), stderr });
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


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
            bodies: ['HEADER', 'TEXT'],
            markSeen: false
        };

        const results = await connection.search(searchCriteria, fetchOptions);
        const emails = await Promise.all(results.map(async (item) => {
            const all = item.parts.find(part => part.which === 'TEXT');
            const parsed = await simpleParser(all.body);
            return {
                subject: parsed.subject,
                from: parsed.from.text,
                to: parsed.to.text,
                date: parsed.date,
                text: parsed.text,
                html: parsed.html
            };
        }));

        res.send({ emails });
        connection.end();
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
```

