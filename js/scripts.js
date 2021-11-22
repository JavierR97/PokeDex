let pokemonList=[
{name:"Bulbasaur", type:["Grass","Poison"], height: 0.7},
{name:"</br>Charmander", type:"Fire", height: 0.6},
{name:"</br>Squirtle", type:"Water", height: 0.5}
];
// this loop prints all of pokemonLists items to the page
// the if statment in this loop reads as if pokemonList height is
// greater than 0.6 then print doc.write(" ") to browser

for (let i = 0; i < pokemonList.length; i++){
  document.write(pokemonList[i].name + " height:" + pokemonList[i].height + " ");
  if (pokemonList[i].height > 0.6) {
  document.write(" This is the largest Gen 1 starter Pokemon. ");
  }
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
