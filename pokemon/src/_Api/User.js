import axios from 'axios'
import { url } from './url'

function userLogin(data){
    return axios.post(`${url}/signin`, {data})
}

function userRegister(data){
    return axios.post(`${url}/signup`, {data})
}

export {
    userLogin,
    userRegister
}