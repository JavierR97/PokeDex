let pokemonRepository = (function () {
  let pokemonList = [{name:"Bulbasaur", type:["Grass","Poison"], height: 0.7},
  {name:"Charmander", type:"Fire", height: 0.6},
  {name:"Squirtle", type:"Water", height: 0.5}];
  return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    }
  };
})();

pokemonlist.forEach {
  document.write(pokemon.name + " type: " + pokemon.type + " height: " + pokemon.height + "</br>");
});


// for (let i = 0; i < pokemonList.length; i++){
//   document.write(pokemonList[i].name + " height:" + pokemonList[i].height + " ");
//   document.write("<br />")
//   if (pokemonList[i].height > 0.6) {
//   document.write(" This is the largest Gen 1 starter Pokemon. <br />");
//   }
// }
//
// //bulbasaur name, type, and height
// console.log (pokemonList[0].name);
// console.log(pokemonList[0].type);
// console.log(pokemonList[0].height)
//
// //bulbasaur name, type, and height
// console.log (pokemonList[1].name);
// console.log(pokemonList[1].type);
// console.log(pokemonList[1].height)
//
// //Sbulbasaur name, type, and height
// console.log (pokemonList[2].name);
// console.log(pokemonList[2].type);
// console.log(pokemonList[2].height;
//
