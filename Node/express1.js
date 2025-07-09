const express = require('express');

const app = express();

app.get('/',(req, res)=> {
    console.log("get by brouser: ", req.query); //{ name: 'bikash' }
    console.log("get by brouser: ", req.query.name); //bikash
    res.send("Welcome to home page");
})

app.listen(8000);
