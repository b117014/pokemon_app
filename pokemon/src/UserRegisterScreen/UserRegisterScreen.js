import React,{Component} from 'react';
import {Button,StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import { UserRegisterForm } from './UserRegisterForm';
import { userRegisterApi } from '../_Api/User';
import { setToken, setTokenStorage } from '../service/api';
import { addUser } from '../_redux/action/User';
import Spinner from 'react-native-loading-spinner-overlay'
import {connect} from 'react-redux'

const UserRegisterScreens = (props)=>{
    const [isVisible, setVisible] = React.useState(false)


    const onSubmitCallBack = (values)=>{
        const {email, password} = values
        setVisible(true)
            userRegisterApi(email, password)
                .then(res=>{
                    console.log(res.data)
                    setToken(JSON.stringify(res.data.token))
                    setTokenStorage(res.data.token)
                    props.addUserRedux(res.data)
                    setVisible(false)

                }).catch(err=>{
                    console.log(err)
                    setVisible(false)

                })
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
            <Spinner
                visible={isVisible}
            />
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

function mapStateToDispatch(dispatch){
    return{
        addUserRedux: (data)=>dispatch(addUser(data))
    }
}

const UserRegisterScreen = connect(null, mapStateToDispatch)(UserRegisterScreens)

export {UserRegisterScreen}