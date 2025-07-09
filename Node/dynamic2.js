const express = require('express');

const exp = express();

exp.set('view engine', 'ejs');

exp.get('/login', (req, res)=> {

    const skill = ["JavaScript", "React", "TypeScript", "Html"];
    res.render('login', {skill});
});
exp.listen(8000);