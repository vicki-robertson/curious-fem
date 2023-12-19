const { test, expect, beforeEach } = require('@jest/globals');

// Importa las funciones que deseas probar desde el archivo correcto
const { loadFavorites, deleteFavorite } = require('../src/js/add_favorites');

// Resto del código de prueba...


// Simula el entorno DOM
beforeEach(() => {
  document.body.innerHTML = '<div id="favorites-container"></div>';
  localStorage.clear(); // Asegura que localStorage esté vacío al principio de cada prueba
});

test('loadFavorites carga los favoritos correctamente', () => {
  // Simula el contenido en localStorage
  localStorage.setItem('favorites', JSON.stringify(['Fake fact 1', 'Fake fact 2']));

  // Llama a la función que deseas probar
  loadFavorites();

  // Verifica si la función ha realizado cambios esperados en el DOM
  expect(document.getElementById('favorites-container').innerHTML).toContain('Fake fact 1');
  expect(document.getElementById('favorites-container').innerHTML).toContain('Fake fact 2');
});

test('deleteFavorite elimina un favorito correctamente', () => {
  // Simula el contenido en localStorage
  localStorage.setItem('favorites', JSON.stringify(['Fake fact 1', 'Fake fact 2']));

  // Llama a la función que deseas probar
  deleteFavorite(0);

  // Verifica si el favorito se ha eliminado correctamente de localStorage
  expect(JSON.parse(localStorage.getItem('favorites'))).toHaveLength(1);
  expect(JSON.parse(localStorage.getItem('favorites'))).toContain('Fake fact 2');
});

