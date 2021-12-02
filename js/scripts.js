//IIFE
let pokemonRepository = (function () {
  let pokemonList = [
  {name:"Bulbasaur", type:["Grass","Poison"], height: 0.7},
  {name:"Charmander", type:"Fire", height: 0.6},
  {name:"Squirtle", type:"Water", height: 0.5}];
  function add(pokemon) {
  pokemonList.push(pokemon);
  }

  function getAll(pokemon) {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

// pokemonRepository returns an array of pokemonList
//adds pikachu to array
console.log(pokemonRepository.getAll());
pokemonRepository.add({ name:'pikachu', type:'electric', height: 0.3});

pokemonRepository.getAll().forEach(function(pokemon) {
  document.write(pokemon.name + " type: " + pokemon.type + " height: " + pokemon.height + "</br>");
});



// pokemonRepository.getAll().forEach(function(pokemon) {
//   console.log(pokemon.name + " type: " + pokemon.type + " height: " + pokemon.height + '</br>');
//   if (pokemon.height < 0.7) {
//     document.write('<p>' + pokemon.name + ' type: ' + pokemon.type +' height: ' + pokemon.height + '</p>')
//   }
//   if (pokemon.height >= 0.7) {
//     document.write('<p>' + pokemon.name + ' type: ' + pokemon.type +' height: ' + pokemon.height +' this is a big pokemon' + '</p>');
//   }
// });

// console.log(pokemonRepository.getAll());



// pokemonRepository.add({ name: 'Pikachu', type:'Electric', height:'0.3' });
// pokemonRepository.getAll().forEach(function(pokemon) {
//   document.write(pokemon.name + " type: " + pokemon.type + " height: " + pokemon.height + "</br>");
// });
