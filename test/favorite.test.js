const { loadFavorites, deleteFavorite } = require('./add_favorites');

test('loadFavorites carga los favoritos correctamente', () => {
    // Simula el almacenamiento local para la prueba
    localStorage.setItem('favorites', JSON.stringify(['Fact1', 'Fact2']));
    const favoritesContainer = document.createElement('div');

    // Llama a la función y verifica el resultado esperado
    loadFavorites(favoritesContainer);
    expect(favoritesContainer.innerHTML).toContain('Fact1');
    expect(favoritesContainer.innerHTML).toContain('Fact2');
});

test('deleteFavorite elimina un favorito correctamente', () => {
    // Simula el almacenamiento local para la prueba
    localStorage.setItem('favorites', JSON.stringify(['Fact1', 'Fact2']));
    
    // Llama a la función para eliminar un favorito
    deleteFavorite(0);
    
    // Verifica que el favorito se haya eliminado correctamente
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    expect(storedFavorites).toHaveLength(1);
    expect(storedFavorites[0]).toBe('Fact2');
});