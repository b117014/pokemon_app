import React,{Component} from 'react';
import {Button,StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import { UserRegisterForm } from './UserRegisterForm';


const UserRegisterScreen = (props)=>{

    const onSubmitCallBack = (values)=>{
            console.log(values)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.registerText}>Register</Text>
            <View>
                <UserRegisterForm onSubmitCallBack={onSubmitCallBack} />

            </View>
            <View>
                <TouchableOpacity style={styles.loginButton}
                    onPress={()=>props.navigation.navigate('user-login')}
                >
                    <Text style={{fontWeight:"bold",letterSpacing:0.2}}> Login</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
     container:{
          flex:1,
          padding:0
     },
     registerText:{
         textAlign:'center',
         fontWeight:"bold",
         position:"relative",
         top:10,
         fontSize:20,
         letterSpacing:0.3
     },
     loginButton:{
         position:'relative',
         alignItems:"center",

     }
})

export {UserRegisterScreen}