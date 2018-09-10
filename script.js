// Create a request variable and assign a new XMLHttpRequest object to it.
let request = new XMLHttpRequest();

//Open a new connectoin, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    //Begin accessign JSON data here
}

//Send request
request.send();