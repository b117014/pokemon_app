import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage'


export const setToken = (token)=>{
    if(token){
        token = JSON.parse(token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        console.log( axios.defaults.headers.common['Authorization'])
    }else{
        delete axios.defaults.headers.common['Authorization']
    }
}

export const setTokenStorage = async (token)=>{
    if(token){
        await AsyncStorage.setItem('token',JSON.stringify(token))
    }else{
        await AsyncStorage.removeItem('token')
    }
}

export const getToken = ()=>{
   return  new Promise((resolve,reject)=>{
        return  AsyncStorage.getItem('token')
        .then(res=>{
            return resolve(res)
        }).catch(err=>reject(err))
    })
   
   
}