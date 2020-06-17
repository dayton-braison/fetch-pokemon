// reference to API
let apiURL = "https://pokeapi.co/api/v2/pokemon/";

// reference to DOM elements
let nameElement = document.querySelector("#name");
let encounterBtn = document.querySelector("#encounter");
let displayImg = document.querySelector("#display");
let shinyImg = document.querySelector("#shiny");
let heightElement = document.querySelector("#height");
let weightElement = document.querySelector("#weight");
let typeElement = document.querySelector("#type");

let loadPokemon = async () => {
  let name = nameElement.value;
  let resp = await fetch(apiURL+name);
  let data = await resp.json();
  heightElement.innerHTML = data.height;
  weightElement.innerHTML = data.weight;
  typeElement.innerHTML = data.types[0].type.name;
  displayImg.src = data.sprites.front_default;
  shinyImg.src = data.sprites.front_shiny;
}
encounterBtn.onclick = loadPokemon;