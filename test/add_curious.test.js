const { test, expect, beforeEach } = require('@jest/globals');

// Importa las funciones que deseas probar desde el archivo correcto
const { loadNewFact, addToFavorites } = require('../src/js/add_curious');

// Resto del código de prueba...


// Simula el entorno DOM
beforeEach(() => {
  document.body.innerHTML = '<div id="fact-container"></div>';
});

test('loadNewFact carga un hecho correctamente', async () => {
  // Configura una respuesta simulada para fetch
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ text: 'Fake fact' }),
    })
  );

  // Llama a la función que deseas probar
  await loadNewFact();

  // Verifica si la función ha realizado cambios esperados en el DOM
  expect(document.getElementById('fact-container').innerHTML).toContain('Fake fact');
});

test('addToFavorites agrega un hecho a la lista de favoritos', () => {
  // Simula el contenido del contenedor de hechos
  document.getElementById('fact-container').innerHTML = '<p>Fake fact</p>';

  // Llama a la función que deseas probar
  addToFavorites();

  // Verifica si el hecho se ha agregado correctamente a localStorage
  expect(JSON.parse(localStorage.getItem('favorites'))).toContain('<p>Fake fact</p>');
});
