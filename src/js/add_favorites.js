document.addEventListener('DOMContentLoaded', function () {
    const favoritesContainer = document.getElementById('favorites-container');

    function loadFavorites() {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

        favoritesContainer.innerHTML = '';

        storedFavorites.forEach((factText, index) => {
            const favoriteFact = document.createElement('div');
            favoriteFact.classList.add('text-box-facts');
            favoriteFact.innerHTML = `<p>${factText}</p>`;

            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Delete';
            deleteBtn.classList.add('delete-btn'); // class to add styles to the delete button
            deleteBtn.addEventListener('click', () => deleteFavorite(index));

            favoriteFact.appendChild(deleteBtn);
            favoritesContainer.appendChild(favoriteFact);
        });
    }

    function deleteFavorite(index) {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

        storedFavorites.splice(index, 1);

        localStorage.setItem('favorites', JSON.stringify(storedFavorites));

        loadFavorites();
    }

    loadFavorites();
});

