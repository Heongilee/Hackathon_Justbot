var express = require('express');
var http = require('http');
var path = require('path');
var static = require('serve-static');

var app = express();
const PORT = 8090;

app.use(static(path.join(__dirname, 'public/')));
app.set('port', process.env.PORT || PORT);

app.get('/', function(req, res) {
    res.redirect('html/appMain.html');
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Server START...' + app.get('port'));
});

/*
================== 서버 가동 꿀 팁 ===================
>nodemon index.js

또는
$nodemon index.js

nodemon 모듈 설치해놨습니당.
======================================================

*/