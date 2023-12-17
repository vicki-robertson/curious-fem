document.addEventListener('DOMContentLoaded', function () {
    const favoritesContainer = document.getElementById('favorites-container');

    // Función para cargar los favoritos desde localStorage
    function loadFavorites() {
        // Obtener la lista de favoritos almacenada en localStorage
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

        // Limpiar el contenido actual del contenedor
        favoritesContainer.innerHTML = '';

        // Crear elementos para cada favorito y agregar al contenedor
        storedFavorites.forEach(factText => {
            const favoriteFact = document.createElement('div');
            favoriteFact.classList.add('text-box-facts');
            favoriteFact.innerHTML = `<p>${factText}</p>`;
            favoritesContainer.appendChild(favoriteFact);
        });
    }

    // Cargar favoritos al cargar la página
    loadFavorites();
});
