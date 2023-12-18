const { loadFavorites, deleteFavorite } = require('./add_favorites');

test('loadFavorites loads the favorite facts correctly', () => {
    // Simulates local storage for the test
    localStorage.setItem('favorites', JSON.stringify(['Fact1', 'Fact2']));
    const favoritesContainer = document.createElement('div');

    // Calls the function and verifies the expected result
    loadFavorites(favoritesContainer);
    expect(favoritesContainer.innerHTML).toContain('Fact1');
    expect(favoritesContainer.innerHTML).toContain('Fact2');
});

test('deleteFavorite eliminates a favorite fact correctly', () => {
    // Simulates local storage of the test
    localStorage.setItem('favorites', JSON.stringify(['Fact1', 'Fact2']));
    
    // Calls the function to eliminate a favorite
    deleteFavorite(0);
    
    // Verifies that the favorite has been correctly eliminated
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    expect(storedFavorites).toHaveLength(1);
    expect(storedFavorites[0]).toBe('Fact2');
});