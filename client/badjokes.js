(function(){
    getNewJoke();
})();

function getNewJoke() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.response);
            var jokeHtml = '';
            switch(response.type) {
                case 'whatDoYouCall':
                    jokeHtml = whatDoYouCallHtml(response.parts);
                    break;
                case 'knockKnock':
                    jokeHtml = knockKnockHtml(response.parts);
                    break;
                default:
                    jokeHtml = 'Joke Error :('
            }
            document.getElementById('jokeZone').innerHTML = jokeHtml;
        }
    };
    xhttp.open("GET", "newjoke", true);
    xhttp.send();
}

function whatDoYouCallHtml(parts) {
    var output = '';
    for(var i = 0; i < parts.length; i++) {
        output += "<div>" + parts[i] + "</div>";
    }
    return output;
}

function knockKnockHtml(parts) {

    var output = '';
    output += '<div>Knock Knock!</div>';
    output += '<div><i>Who\'s there?</i></div>';
    output += '<div>' + parts[0] + '.</div>';
    output += '<div><i>' + parts[0] + ' who?</i></div>';
    output += '<div>' + parts[1] + '</div>';

    return output;

}