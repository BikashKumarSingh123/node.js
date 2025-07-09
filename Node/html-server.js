const path = require('path');
const express = require('express');

const exp = express();
const htmlPath = path.join(__dirname, 'link-html');

exp.get('/', (req, res)=> {
    res.sendFile(`${htmlPath}/express.html`);
})
exp.get('/about', (req, res)=> {
    res.sendFile(`${htmlPath}/about.html`);
})

exp.get('*', (req, res)=> {
    res.sendFile(`${htmlPath}/express.html`);
})

exp.listen(8000);