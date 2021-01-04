const { USER_LOGIN, USER_LOGOUT } = require("../actionTypes/User");


const DEFAULT_STATE={
    user:{},
    isAuthenticated: false
}

function userReducer  (state=DEFAULT_STATE, action){
    switch(action.type){
        case USER_LOGIN: 
                return{
                    ...state,
                    user: action.data,
                    isAuthenticated: true
                }
        case USER_LOGOUT:
            return{
                ...state,
                user: null,
                isAuthenticated: false
            }
        default: return state
    }

}

export {userReducer}