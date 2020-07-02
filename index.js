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
const bot=new chatbot('newagent-1-impflf','./newagent-1-impflf-d1b3de903e1f.json')
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
    const msg='배달';
    const id='test-session-id';

    bot.send(msg,id).then(r => {
        console.log(r[0].queryResult.fulfillmentText);
        // res.send({
        //     msg:{
        //         text:r[0].queryResult.fulfillmentText
        //     }
        // })
    }).catch(e =>{
        res.send({
            msg:{
                text:'오류'
            }
        })
    })
    //console.log(r[0].queryResult.fulfillmentText);

});
http.createServer(app).listen(app.get('port'), function() {
    console.log('Server START...' + app.get('port'));
});

// // projectId: ID of the GCP project where Dialogflow agent is deployed
// const projectId = 'newagent-1-impflf';
// // sessionId: String representing a random number or hashed user identifier
// const sessionId = '123456';
// // queries: A set of sequential queries to be send to Dialogflow agent for Intent Detection
//  const queries = [
//    '주문해줘',
//    '배달', // Tell the bot when the meeting is taking place
//   'B'  // Rooms are defined on the Dialogflow agent, default options are A, B, or C
//  ]
// // languageCode: Indicates the language Dialogflow agent should use to detect intents
//  const languageCode = 'ko';
//
// async function detectIntent(
//     projectId,
//     sessionId,
//     query,
//     contexts,
//     languageCode
// ) {
//     console.log(1);
//     // The path to identify the agent that owns the created intent.
//     const sessionPath = sessionClient.projectAgentSessionPath(
//         projectId,
//         sessionId
//     );
//
//     // The text query request.
//     const request = {
//         session: sessionPath,
//         queryInput: {
//             text: {
//                 text: query,
//                 languageCode: languageCode,
//             },
//         },
//     };
//
//     if (contexts && contexts.length > 0) {
//         request.queryParams = {
//             contexts: contexts,
//         };
//     }
//     console.log(2);
//     const responses = await sessionClient.detectIntent(request);
//     console.log(3);
//     return responses[0];
// }
//
// async function executeQueries(projectId, sessionId, queries, languageCode) {
//     // Keeping the context across queries let's us simulate an ongoing conversation with the bot
//     let context;
//     let intentResponse;
//     for (const query of queries) {
//         try {
//             console.log(`Sending Query: ${query}`);
//             intentResponse = await detectIntent(
//                 projectId,
//                 sessionId,
//                 query,
//                 context,
//                 languageCode
//             );
//             console.log('Detected intent');
//             console.log(
//                 `Fulfillment Text: ${intentResponse.queryResult.fulfillmentText}`
//             );
//             // Use the context from this response for next queries
//             context = intentResponse.queryResult.outputContexts;
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }
// executeQueries(projectId, sessionId, queries, languageCode);
/*
================== 서버 가동 꿀 팁 ===================
>nodemon index.js

또는
$nodemon index.js

nodemon 모듈 설치해놨습니당.
======================================================

*/