var fs = require('fs');

module.exports = {
    type: 'whatDoYouCall',
    newJoke: function () {
        if (!nounArray) {
            res.send('Loading nouns...');
        }
        var partA = 'What do you call ';

        var w1 = getRandomWord();
        if (startsWithVowel(w1)) {
            partA += 'an ';
        } else if (!isWordPlural(w1)) {
            partA += 'a ';
        }
        partA += w1 + ' without ';

        var w2 = getRandomWord();
        if (startsWithVowel(w2)) {
            partA += 'an ';
        } else if (!isWordPlural(w2)) {
            partA += 'a ';
        }
        partA += w2 + '? ';

        var partB = '';

        var w3 = getRandomWord();
        if (startsWithVowel(w3)) {
            partB += 'An ';
        } else if (!isWordPlural(w3)) {
            partB += 'A ';
        }
        partB += w3 + '!';

        return [partA, partB];

    }
};

function getRandomWord() {
    if (!nounArray) {
        return 'LOADING WORDS';
    }
    var index = parseInt(Math.random() * (nounArray.length - 1));
    return nounArray[index];
}

var nounArray = null;
var vowelArr = ['a', 'e', 'i', 'o', 'u'];
function startsWithVowel(word) {
    return vowelArr.indexOf(word[0]) >= 0;
}
function isWordPlural(word) {
    return 's' == word[word.length - 1];
}
fs.readFile("./jokes/nouns.txt", 'utf8', function (err, data) {
    if (err) throw err;
    nounArray = data.split('\n');
});

