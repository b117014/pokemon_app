import axios from 'axios'
import { url } from './url'

function userLoginApi(email, password){
    return axios.post(`${url}/login`, {email, password})
}

function userRegisterApi(email, password){
    return axios.post(`${url}/register`, {email, password})
}

export {
    userLoginApi,
    userRegisterApi
}