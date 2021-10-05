const inputValue = document.getElementById("pokemonName");
const pokiName = document.getElementById("pokemonNameSet");
const move = document.getElementById("moveset");
const weight = document.getElementById("weightSet");
const ability = document.getElementById("abilityset");
const image = document.getElementById("pokiImage");

async function clickListen() {
  const value = inputValue.value;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
  const data = await response.json();
  pokiName.innerHTML = data.name;
  move.innerHTML = data.moves[0].move.name;
  ability.innerHTML = data.abilities[0].ability.name;
  weight.innerHTML = data.weight;
  image.setAttribute("src", data.sprites.other.dream_world.front_default);
}
