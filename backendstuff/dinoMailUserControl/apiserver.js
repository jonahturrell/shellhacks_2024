const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3001;

app.use(express.json());

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
