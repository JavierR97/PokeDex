//IIFE
let pokemonRepository = (function () {
  let pokemonList = [
  {name:"Bulbasaur", type:["Grass","Poison"], height: 0.7},
  {name:"Charmander", type:"Fire", height: 0.6},
  {name:"Squirtle", type:"Water", height: 0.5}];
  function add(pokemon) {
  pokemonList.push(pokemon);
  }
//this function will return the pokemonList array when called
  function getAll(pokemon) {
    return pokemonList;
  }

  function addListItem(pokemon) {
    //getting element that conects to an exsisting element
    let pokemonList = document.querySelector(".pokemon-list");
    // this creates a li element
    let listElement = document.createElement("li");
    //this creates a button element
    let button = document.createElement("button");
    // creates text inside of new element "button"
    button.innerText = pokemon.name;
    // assigning a class to element 'button'
    button.classList.add("button-class");
    // adding child to list element
    listElement.appendChild(button);
    // adding list element to pokemonList element
    pokemonList.appendChild(listElement);
    /*eventListener listests for a click
    the function then console logs the showDetails function below */
    button.addEventListener('click', function (event) {
      console.log(showDetails(pokemon));
   });
  }

  function showDetails(pokemon) {
    console.log(pokemon.name + ' ' +pokemon.type + " " +pokemon.height)
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();



pokemonRepository.add({ name:'pikachu', type:['electric'], height: 0.3});
//logs the pokemonList array in the console
console.log(pokemonRepository.getAll());
// pokemonRepository returns an array of pokemonLis
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
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

// pokemonRepository.add({ name:'pikachu', type:['electric'], height: 0.3});

// pokemonRepository.add({ name: 'Pikachu', type:'Electric', height:'0.3' });
// pokemonRepository.getAll().forEach(function(pokemon) {
//   document.write(pokemon.name + " type: " + pokemon.type + " height: " + pokemon.height + "</br>");
// });
