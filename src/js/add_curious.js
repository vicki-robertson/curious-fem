import requests   // para realizar solicitudes HTTP a la API


def get_random_fact():
  """
  Obtiene un dato aleatorio de la API.

  Returns:
    El dato aleatorio.
  """

  response = requests.get("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
  if response.status_code == 200:
    return response.json()
  else:
    return None

document.querySelector("#see-new-fact").onclick = see_new_fact;

function see_new_fact() {
    var fact = get_random_fact();
  
    if (fact) {
      document.querySelector(".fact").textContent = fact["fact"];
    }
  }


  document.querySelector("#add-to-favorite").onclick = add_to_favorite;

  function add_to_favorite() {
    // Obtener el dato aleatorio.
    var fact = get_random_fact();
  
    // Enviar el dato a la otra página.
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://otra-pagina.com/add_fact");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(fact));
  }
  