var express = require('express');
var http = require('http');
var path = require('path');
var static = require('serve-static');
var mod_LoadMyGDF = require('./public/js/LoadMyGDF');

const bodyParser = require('body-parser');
// Imports the Dialogflow library
const dialogflow = require('@google-cloud/dialogflow');
// Instantiates a session client    
const sessionClient = new dialogflow.SessionsClient()
const uuid = require('uuid');
const chatbot=require('./chatbot.js')
const bot=new chatbot('totalassistant-rmysgs','./totalassistant-rmysgs-f89f8a5b03c6.json')
var app = express();
const PORT = 3000;


app.use(static(path.join(__dirname, 'public/')));
app.use(bodyParser.urlencoded({extended : "false"}));
app.use(bodyParser.json());
app.set('port', process.env.PORT || PORT);

app.get('/', function(req, res) {
    res.redirect('html/appMain.html');
});
app.get('/', function(req, res) {
    res.redirect('html/example.html');
});
app.get('/chatbot', (req,res) => {
    console.log(req.query.msg);
    const msg=req.query.msg;
    const id='test-session-id';

    bot.send(msg,id).then(r => {
        console.log(r[0].queryResult.fulfillmentText);
        res.json({msg:r[0].queryResult.fulfillmentText});
        // res.send({
        //     msg:{
        //         text:r[0].queryResult.fulfillmentText
        //     }
        // })
    }).catch(e =>{
        res.json({
                msg:'통신 오류에요!! 다시 입력해봐요'
        })
    })
    //console.log(r[0].queryResult.fulfillmentText);

});
http.createServer(app).listen(app.get('port'), function() {
    console.log('Server START...' + app.get('port'));
});


// const projectId = 'newagent-1-impflf';
// const sessionId = '123456';
//  const queries = [
//    '주문해줘',
//    '배달',
//  ]
// // languageCode:
//  const languageCode = 'ko';
//

/*
================== 서버 가동 꿀 팁 ===================
>nodemon index.js

또는
$nodemon index.js

nodemon 모듈 설치해놨습니당.
======================================================

*/