const path = require('path');
const express = require('express');

const app = express();

const publicPath = path.join(__dirname, 'link-html');

app.use(express.static(publicPath));
app.listen(8000);