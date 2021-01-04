import React from 'react';
import {Button,View,Text,TextInput,TouchableOpacity,StyleSheet, ScrollView} from 'react-native'
import {Formik} from 'formik'
import * as yup from 'yup';


const schema = yup.object().shape({

    email: yup.string().required("Username is required"),
    password: yup.string().required("password is required"),
    

})

const UserRegisterForm  = (props)=>{

      return(
                <ScrollView>
                    <Formik
                    initialValues={{email:"",password:""}}
                    validationSchema={schema}
                    onSubmit={props.onSubmitCallBack}
                    >
                        {({handleSubmit,handleChange,handleBlur,touched,errors,values})=>(
                            <View style={styles.registerForm}>
                                
                                <View style={[styles.textInput]}>
                                    <Text style={styles.label}>User Name</Text>
                                    <TextInput
                                     onChangeText={handleChange('email')}
                                     value={values.email}
                                     placeholder="email"
                                     onBlur={handleBlur('email')}
                                     underlineColorAndroid={'white'}
                                    />
                                    {touched.email&& errors.email && (<Text style={styles.textError}>{errors.email}</Text>)}
                                </View>
                                <View style={[styles.textInput]}>
                                    <Text style={styles.label}>Password</Text>
                                    <TextInput
                                     onChangeText={handleChange('password')}
                                     value={values.password}
                                     placeholder="Password"
                                     onBlur={handleBlur('password')}
                                     underlineColorAndroid={'white'}
                                    />
                                    {touched.password && errors.password && (<Text style={styles.textError}>{errors.password}</Text>)}
                                </View>

                                <TouchableOpacity style={styles.registerButton} onPress={handleSubmit}>
                                    <Text style={{color:"white",fontWeight:"bold",letterSpacing:0.2}}>Register</Text>
                                </TouchableOpacity>
                                
                            </View>
                        )}

                    </Formik>
                </ScrollView>
      )
}


const styles = StyleSheet.create({
     container:{
        
         padding:0,
         justifyContent:"center",
         
     },
     registerForm:{
        padding:50
     
        
     },
     textInput:{
         
     } ,
     textError:{
         color:"red",
         fontSize:10,
         letterSpacing:0.3,
         position:"relative",
         left:3
     },
     registerButton:{
         position:"relative",
         top:"5%",
         width:"100%",
         height:30,
         backgroundColor:"#7770A6",
         alignItems:"center",
         padding:5,
         borderRadius:100
     },
     label:{
         position:"relative",
         left:3
     }
})

export {UserRegisterForm}