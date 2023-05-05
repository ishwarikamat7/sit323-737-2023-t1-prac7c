var express = require('express')
var app = express()

const PORT = 3000;
// const HOST = '0.0.0.0';
app.get('/', function(req,res) {
    res.send('Hello World! This is task 7.2C');
});

app.listen(PORT)