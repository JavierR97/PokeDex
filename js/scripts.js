//IIFE
const pokemonRepository = (function () {

  const pokemonList = [];
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=100';
  // let modal = document.querySelector('#exampleModal');

    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "detailsUrl" in pokemon
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
    listElement.classList.add("group-list-item")

    //this creates a button element
    const button = document.createElement("button");
    // creates text inside of new element "button"
    button.innerText = pokemon.name;
    // assigning a class to element 'button'
    button.classList.add("button-class", "btn", "btn-outline-info", "col-3", "d-grid");

    $(document).ready(function(){
    $(button).click(function(){
    showDetails(pokemon);
    $("#exampleModal").modal();
  });
});

    // adding child to list element
    listElement.appendChild(button);
    // adding list element to pokemonList element
    pokemonList.appendChild(listElement);
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
    let url = item.detailsUrl;
    /*gets repsonse of the url and turns it into a JSON*/
    return fetch(url).then(function (response){
      return response.json();
    }).then(function (details) {
      //this adds the details from the API
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      item.weight = details.weight;
    }).catch(function (e) {
      console.error(e)
    });
  }

  //exicutes loadDetails Function then console logs the results
  function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        // defined empty array variable
          let types = [];
          //this goes into the types item and cycles over each item until it gets to type then name and pushes the Name objects value
          pokemon.types.forEach((item, i) => {
            types.push(item.type.name);
          });


        showModal(pokemon.name, pokemon.imageUrl ," height: " + pokemon.height, 'weight: ' + pokemon.weight, ' types: ' + types.join(','));
    });
  }

  // modal
  function showModal(name, img, height, weight, types) {
    let modal = document.querySelector('#exampleModal');
    let modalBody = document.querySelector(".modal-body");
    let modalTitle = document.querySelector("#exampleModalLabel");
    let modalDialog = document.querySelector(".modal-dialog");

    $('#exampleModalLabel').empty();
    $('.modal-body').empty();

    let nameElement = document.createElement('h1');
    nameElement.innerText = name;

    let imageElement = document.createElement('img');
    imageElement.classList.add('pokemon_img')
    imageElement.src = img;


    let heightElement = document.createElement('p');
    heightElement.innerText = height;

    let weightElement = document.createElement('p');
    weightElement.innerText = weight;

    let typeElement = document.createElement('p');
    typeElement.innerText = types;

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typeElement);

}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

pokemonRepository.loadList().then(function () {
    let getAllPokemon = pokemonRepository.getAll();
      getAllPokemon.forEach(function (getPokemon) {
      pokemonRepository.addListItem(getPokemon);
    });
});
