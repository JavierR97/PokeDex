let pokemonList=[
{name:"Bulbasaur", type:["Grass","Poison"], height: "0.7"},
{name:"Charmander", type:"Fire", height: "0.6"},
{name:"Squirtle", type:"Water", height: "0.5"}
];
for (let i = 0; i < pokemonList.length; i++){
  document.write(pokemonList[i].name + " height:" + pokemonList[i].height + " ");
}

// bulbasaur name, type, and height
console.log (pokemonList[0].name);
console.log(pokemonList[0].type);
console.log(pokemonList[0].height)

// bulbasaur name, type, and height
console.log (pokemonList[1].name);
console.log(pokemonList[1].type);
console.log(pokemonList[1].height)

// bulbasaur name, type, and height
console.log (pokemonList[2].name);
console.log(pokemonList[2].type);
console.log(pokemonList[2].height)
