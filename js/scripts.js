//IIFE
const pokemonRepository = (function () {
  const pokemonList = [];

  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20';

  function add(pokemon) {
     if (
       typeof pokemon === "object" &&
       "name" in pokemon
     ) {
       pokemonList.push(pokemon);
     } else {
       console.log("pokemon is not correct");
     }
   }
//this function will return the pokemonList array when called
  function getAll(pokemon) {
    return pokemonList;
  }

  function addListItem(pokemon) {
    //getting element that conects to an exsisting element
    const pokemonList = document.querySelector(".pokemon-list");
    // this creates a li element
    const listElement = document.createElement("li");
    //this creates a button element
    const button = document.createElement("button");
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
      showDetails(pokemon);
   });
  }

  function loadList() {
    /* this fetches my apiUrl varialble  and converts the
    response to a JSON (JavaScript Object Notation)*/
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }) /* this takes the JSON from above and calls on the
      results object in the pokeapi, then its calling each(forEach) item
      in the results array, then we created a variable calling on the
      "item" name and url */
      .then(function (json) {
      json.results.forEach(function (item) {
        const pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    /* created a variable and it is = to detailsUrl.
     detailsUrl comes from the above function (loadList) */
    const url = item.detailsUrl;
    /*gets repsonse of the url and turns it into a JSON*/
    return fetch(url).then(function (response){
      return response.json();
    }).then(function (details) {
      //this adds the details from the API
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e)
    });
  }
  //exicutes loadDetails Function then console logs the results
  function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        console.log(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();


pokemonRepository.loadList().then(function () {
  // pokemonRepository returns an array of pokemonLis
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
