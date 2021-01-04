import React from 'react';
import {StyleSheet} from 'react-native'
import { UserLoginScreenForm } from './UserLoginScreenForm';
import {connect} from 'react-redux'
import { addUser } from '../_redux/action/User';

class UserLoginScreen extends React.Component{

    constructor(props){
        super(props);
    }
   
    onSubmitCallBack = (values)=>{
        console.log(values)
    }
   
    render(){
        return(
            
              <UserLoginScreenForm 
              onSubmitCallBack={this.onSubmitCallBack}
              />
           
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