document.addEventListener('DOMContentLoaded', function () {
  const factContainer = document.getElementById('fact-container');
  const newFactBtn = document.querySelector('.new-fact-btn');
  const favoritesBtn = document.querySelector('.favorites-btn');

  // Función para cargar un nuevo hecho desde la API
  function loadNewFact() {
      // Realizar la solicitud a la API
      fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
          .then(response => response.json())
          .then(data => {
              // Actualizar el contenido del contenedor con el nuevo hecho
              factContainer.innerHTML = `<p>${data.text}</p>`;
          })
          .catch(error => console.error('Error fetching data:', error));
  }

  // Función para agregar un hecho a la lista de favoritos
  function addToFavorites() {
      // Obtener el texto actual del contenedor de hechos
      const factText = factContainer.innerHTML;

      // Obtener la lista de favoritos almacenada en localStorage
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

      // Agregar el nuevo hecho a la lista de favoritos
      storedFavorites.push(factText);

      // Almacenar la lista actualizada en localStorage
      localStorage.setItem('favorites', JSON.stringify(storedFavorites));
  }

  // Evento al hacer clic en el botón "See new fact"
  newFactBtn.addEventListener('click', loadNewFact);

  // Evento al hacer clic en el botón "Add to favorite"
  favoritesBtn.addEventListener('click', addToFavorites);

  // Cargar un hecho al cargar la página
  loadNewFact();
});
