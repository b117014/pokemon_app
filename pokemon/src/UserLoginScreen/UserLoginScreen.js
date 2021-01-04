import React from 'react';
import {StyleSheet} from 'react-native'
import { UserLoginScreenForm } from './UserLoginScreenForm';
import {connect} from 'react-redux'
import { addUser } from '../_redux/action/User';
import { userLoginApi } from '../_Api/User';
import { setToken, setTokenStorage } from '../service/api';
import Spinner from 'react-native-loading-spinner-overlay'

class UserLoginScreen extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isVisible: false
        }
    }
   
    onSubmitCallBack = (values)=>{
        console.log(values)
        this.setState({isVisible: true})
        const {email, password} = values
        userLoginApi(email, password)
            .then(res=>{
                console.log(res.data)
                console.log(res.data.token)
                setToken(JSON.stringify(res.data.token))
                setTokenStorage(res.data.token)
                this.props.addUserRedux(res.data)
                this.setState({isVisible: false})

            }).catch(err=>{
                console.log(err.response)
                this.setState({isVisible: false})

            })
    }

    onChangeNavigation=()=>{
        this.props.navigation.navigate('user-register')
    }
   
    render(){
        return(
            <>
              <UserLoginScreenForm 
              onSubmitCallBack={this.onSubmitCallBack}
              onChangeNavigation={this.onChangeNavigation}
              />
                <Spinner
                    visible={this.state.isVisible}
                />

           </>
        )
    }
}

const styles = StyleSheet.create({
     container:{
         flex:1
     },
     image:{
         flex:1,
         resizeMode:'cover',
         justifyContent:'center'
     }
})


function mapStateToDispatch(dispatch){
    return{
        addUserRedux: (data)=>dispatch(addUser(data))
    }
}
UserLoginScreen = connect(null, mapStateToDispatch)(UserLoginScreen)

export {UserLoginScreen}