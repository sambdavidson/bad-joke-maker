var fs = require('fs');

module.exports = {
    type: 'knockKnock',
    newJoke: function () {
        var sentence = getRandomSentence();
        var index = parseInt(Math.random() * 3);
        var word = sentence.split(' ')[index];
        return [capitalizeFirstLetter(word), sentence];
    }
};


var sentencesArray = null;

function getRandomSentence() {
    if (!sentencesArray) {
        return 'LOADING WORDS';
    }
    var index = parseInt(Math.random() * (sentencesArray.length - 1));
    return sentencesArray[index];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

fs.readFile("./jokes/harvard-sentences.txt", 'utf8', function (err, data) {
    if (err) throw err;
    sentencesArray = data.split('\n');
});
