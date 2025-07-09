const express = require('express');

const exp = express();
exp.set('view engine', 'ejs');

exp.get('/profile', (req, res)=> {
    const data = {
        name: "Ramanusham",
        address: "Thrivendram",
        email: "ramanusham@resharch.com",
    }
    res.render('profile', {data});
});

exp.listen(8000);