//IIFE
const pokemonRepository = (function () {

  const pokemonList = [];
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20';
  let modalContainer = document.querySelector('#modal-container');
  let modal = document.querySelector('.modal')

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
      showDetails(pokemon, modal);
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
        showModal(pokemon.name);
    });
  }

  // modal
  function showModal(title, text) {
    modalContainer.innerHTML = '';

    // created a div with a class called modal
    let modal = document.createElement('div');
    modal.classList.add('modal');

    /* creates a button element with the name of CloseButtonElement,
    then adds a class called modal-close, with the innerText of that element saying "close" */
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'close';
    /* listens for a click on closeButtonElement, if clicked run hideModal function  */
    closeButtonElement.addEventListener('click', hideModal);
    /* creates a h1 element with the name of titleElement with the innertext of that element saying "title" */
    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

     /* creates a p element with the name of contentElement with the innertext of that element saying "text" */
      let contentElement =  document.createElement('p');
      contentElement.innerText = text;

    /* adds closeButtonElement, titleElement, and contentElement as children to .modal  */
      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement)
      // modal.appendChild(contentElement);

      /* after making the above elements children of '.modal' the whole model element now becomes a child of #modal-container in index.html*/
      modalContainer.appendChild(modal);

      modalContainer.classList.add('is-visible');

  }

  document.querySelector('.button-class').addEventListener ('click', () => {
    showModal();
  });
  // function called hideModal
  function hideModal() {
    // this removes the class 'is-visable' from #modal-container when function is ran
    modalContainer.classList.remove('is-visible');
  }

  // this is an event listener for a key click
  window.addEventListener('keydown', (e) => {
    // this argument says if the escape key is pressed while the modalContainer
    // has the class '.is- visable' active then run hideModal function
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });
  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  document.querySelector('.button-class').addEventListener ('click', () => {
    showModal();
  });


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
    let getAllPokemon = pokemonRepository.getAll();
    getAllPokemon.forEach(function (getPokemon) {
        pokemonRepository.addListItem(getPokemon);
    });
});
