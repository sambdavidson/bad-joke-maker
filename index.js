/* Samuel Davidson */
/* THANK YOU FOR THE NOUN LIST: http://www.desiquintans.com/ */

/* My Stuff */
var whatDoYouCall = require('./jokes/whatDoYouCall.js');
var knockKnock = require('./jokes/knockKnock.js');

var jokeMakers = [whatDoYouCall, knockKnock];

var express = require('express');
var path    = require("path");
var app = express();

app.listen(8020, function () {
    console.log('Bad Joke Maker listening on port 8020!');
});

app.use('/',express.static(path.join(__dirname, 'client')));

app.get('/newjoke', function (req, res) {
    var maker = jokeMakers[getRandomInt(0,jokeMakers.length)];

    var ret = {type: maker.type, parts: maker.newJoke()};

    res.send(ret);
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}