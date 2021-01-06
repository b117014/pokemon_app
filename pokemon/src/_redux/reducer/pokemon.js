import { USER_POKEMON } from "../actionType/User"


const DEFAULT_STATE={
    pokemon:[],
  
}

function pokemonReducer  (state=DEFAULT_STATE, action){
    switch(action.type){
        case USER_POKEMON: 
                return{
                    ...state,
                    pokemon: action.data,
                }
       
        default: return state
    }

}

export {pokemonReducer}