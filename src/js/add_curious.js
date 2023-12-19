document.addEventListener('DOMContentLoaded', function () {
  const factContainer = document.getElementById('fact-container');
  const newFactBtn = document.querySelector('.new-fact-btn');
  const favoritesBtn = document.querySelector('.favorites-btn');

  // Function to load a new Curious Fact from the API
  function loadNewFact() {
      // Fetch from the API
      fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
          .then(response => response.json())
          .then(data => {
              // Update the content in the Curious Facts container
              factContainer.innerHTML = `<p>${data.text}</p>`;
          })
          .catch(error => console.error('Error fetching data:', error));
  }

  // Function to add a fact to the list of favorites
  function addToFavorites() {
      // Get the current text of the facts container
      const factText = factContainer.innerHTML;

      // Get the list of favorites stored in localStorage
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

      // Add a new fact to the favorites list
      storedFavorites.push(factText);

      // Store the updated list in localStorage
      localStorage.setItem('favorites', JSON.stringify(storedFavorites));
  }

  // Event when "See new fact" button is clicked
  newFactBtn.addEventListener('click', loadNewFact);

  // Event when "Add to favorites" button is clicked
  favoritesBtn.addEventListener('click', addToFavorites);

  // Load a fact on the page
  loadNewFact();
});

