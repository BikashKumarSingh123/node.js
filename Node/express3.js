const express = require('express');
const app = express();

app.get("/", (request, response) => {
    response.send(`
        <input type="text" placeholder="username" value= ${request.query.name} />
        <button type= "button"> Submit </button>
        <a href="/about">ABOUT US</a>
    `)
})

app.get('/about', (req, res)=> {
    res.send({
        name: "Raja ",
        email: "raja@node.js"
    })
})

app.listen(8000);