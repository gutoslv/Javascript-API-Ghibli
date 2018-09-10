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

// Create a request variable and assign a new XMLHttpRequest object to it.
let request = new XMLHttpRequest();

//Open a new connectoin, using the GET request on the URL endpoint
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

request.onload = function() {
  //Begin accessing JSON data here
  let data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      // Create a div with a card class
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      // Create an h1 and set the text content
      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      // Create a p and set the text content to the film's description
      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300); // Limit to 300 chars
      p.textContent = `${movie.description}...` // End with an ellipses

      // Append the cards to the container element
      container.appendChild(card);

      // Each card will contain an h1 and a p
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Not working =('
    app.appendChild(errorMessage);
  }
};
//Send request
request.send();