import { USER_POKEMON } from "../actionType/User"

export const Pokemon = (data)=>{
    return{
        type: USER_POKEMON,
        data
    }
}

