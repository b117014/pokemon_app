import axios from 'axios'
import { url } from './url'


function getPokemonApi(){
   
    return axios.get(`${url}/pokemon`)
}

function addPokemonApi(user_id,poke_id){
    return axios.post(`${url}/pokemon`, {user_id,poke_id })
}

export {
    getPokemonApi,
    addPokemonApi,
    
}