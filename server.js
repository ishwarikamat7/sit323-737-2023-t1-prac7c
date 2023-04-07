var express = require('express')
var app = express()

const PORT = 3001;
// const HOST = '0.0.0.0';
app.get('/', function(req,res) {
    res.send('hello world');
});

app.listen(PORT)