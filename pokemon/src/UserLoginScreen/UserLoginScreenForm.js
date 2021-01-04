import React from 'react';
import {Formik} from 'formik'
import {TextInput,Button,Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import * as yup from 'yup';


const schema = yup.object().shape({
    username: yup.string().required("username is Required"),
    password: yup.string().required("password is required")
})


const UserLoginScreenForm = (props)=>{

    return(
        <Formik
         initialValues={{username:"",password:""}}
         validationSchema={schema}
         onSubmit={props.onSubmitCallBack}
         >
         {({handleSubmit,values,handleBlur,handleChange,errors,touched})=>(
                    <View style={styles.container}>
                        <TextInput 
                        onBlur={handleBlur('username')}
                        onChangeText={handleChange('username')}
                        placeholder="username"
                        value={values.username}
                        style={styles.textInput1}
                        autoFocus={true}
                        
                        />
                        {touched.username && errors.username ? (<Text style={{color:"red",fontSize:10}}>{errors.username}</Text>):null}
                        <TextInput 
                        onBlur={handleBlur('password')}
                        onChangeText={handleChange('password')}
                        placeholder="password"
                        style={styles.textInput2}
                        autoCompleteType="password"
                        />
                        {touched.password && errors.password && (<Text style={{color:'red',fontSize:10,marginTop:25}}>{errors.password}</Text>)}
                        <TouchableOpacity onPress={handleSubmit} style={styles.login}>
                            <Text style={styles.login_text}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={props.onChangeNavigation} >
                            <Text >Register</Text>
                        </TouchableOpacity>
                    </View>
         )}
         </Formik>
        
    )
}

const styles = StyleSheet.create({
     container:{
         flex:1,
         justifyContent:'center',
         alignItems:'center',
         position:'relative',
         bottom:"20%"
     },
     textInput1:{
            backgroundColor:"white",
            width:"80%",
            position:'relative',
            borderRadius:10,
            fontSize:18
            
     },
     textInput2:{
        backgroundColor:"white",
        width:"80%",
        position:'relative',
        top:20,
        borderRadius:10,
        fontSize:18
     },
     login:{
         position:'relative',
         top:'15%',
         backgroundColor:"#5A404A",
         width:80,
         height:30,
         textAlign:'center',
         borderRadius: 10
     },
     login_text:{
         textAlign:"center",
         position:'relative',
         padding:0,
         fontWeight:"bold",
         letterSpacing:1.2,
         color:"#0D0D22",
         fontSize:18
     }
})

export {UserLoginScreenForm} 