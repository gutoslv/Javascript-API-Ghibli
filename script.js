// Create a request variable and assign a new XMLHttpRequest object to it.
let request = new XMLHttpRequest();

//Open a new connectoin, using the GET request on the URL endpoint
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

request.onload = function() {
  //Begin accessing JSON data here
  let data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      // Log each movie's title
      console.log(movie.title);
    });
  } else {
    console.log("error");
  }
};
//Send request
request.send();

// Declares access variable to root
const app = document.getElementById('root');

// Creates the logo image
const logo = document.createElement('img');
logo.src = 'logo.png';

// Creates the main container
const container = document.createElement('div');
container.setAttribute('class', 'container');

// Adds logo and container to website
app.appendChild(logo);
app.appendChild(container);