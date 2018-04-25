var express = require('express');
var path = require('path');
var app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname , '../public')));

app.listen(port);