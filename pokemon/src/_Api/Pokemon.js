import axios from 'axios'


function getPokemonApi(){
    const poke = 'https://pokeapi.co/api/v2/pokemon'
    return axios.get(poke)
}

function getPokemonDetailsApi(poke){
    return axios.get(poke)
}

export {
    getPokemonApi,
    getPokemonDetailsApi
}