import { USER_LOGIN, USER_LOGOUT } from "../actionTypes/User"


export const addUser = (data)=>{
    return{
        type: USER_LOGIN,
        data
    }
}

export const Logout = ()=>{
    return{
        type: USER_LOGOUT
    }
}

