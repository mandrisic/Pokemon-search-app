const inputValue = document.getElementById('search-input');
const title = document.querySelector('h1');
const subtitle = document.querySelector('h2');
const formContainer = document.querySelector('form');
const pokemonContainer = document.querySelector('.pokemon-results');
const searchBtn = document.getElementById('search-button');
const results = document.querySelector('.pokemon-results');
const pokemonProxy = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';

const fetchData = async () => {
    try {
        const pokemonInput = inputValue.value.toLowerCase();
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonInput}`);
        const info = await response.json();

        results.innerHTML = `
        <img id="pokemon-image" src="${info.sprites.front_default}" alt="${info.name}">
        <p id="pokemon-name">${info.name}</p>
        <div class="type-container"><p class="stats type" id="types">${info.types.map((obj) => `<strong class="type ${obj.type.name}">${obj.type.name}</strong>`).join(' ')}</p></div>
        <div class="pokemon-stats" id="left-stats">
            <p class="stats"><strong>ID: </strong>${info.id}</p>
            <p class="stats" id="height"><strong>Height: </strong>${info.height}</p>
            <p class="stats" id="weight"><strong>Weight: </strong>${info.weight}</p>
            <p class="stats"><strong>HP:</strong> ${info.stats[5].base_stat}</p>
            <p class="stats"><strong>Speed:</strong> ${info.stats[3].base_stat}</p>
        </div>
        <div class="pokemon-stats" id="right-stats">
            <p class="stats"><strong>Attack:</strong> ${info.stats[1].base_stat}</p>
            <p class="stats"><strong>Special attack:</strong> ${info.stats[3].base_stat}</p>
            <p class="stats"><strong>Defense:</strong> ${info.stats[2].base_stat}</p>
            <p class="stats"><strong>Special defense:</strong> ${info.stats[4].base_stat}</p>
        </div>
        `;

        pokemonContainer.classList.remove('hidden');
        inputValue.value = '';
        subtitle.classList.add('subtitle');
        formContainer.classList.add('form-container');
        title.style.display = 'none';
    } catch (err) {
        alert('Pokemon not found');
    }
};


searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetchData();
});