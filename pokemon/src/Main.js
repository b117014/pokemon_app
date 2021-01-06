import React from 'react'
import {View} from 'react-native'
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack'
import { UserLoginScreen } from './UserLoginScreen/UserLoginScreen';
import { UserRegisterScreen } from './UserRegisterScreen/UserRegisterScreen';
import { BottomTab } from './BottomTab/BottomTab';
import {connect} from 'react-redux'

const Stack = createStackNavigator()

const MainApp = (props)=>{

    return(
        <NavigationContainer>
            <Stack.Navigator>
                {props.isAuth ? (
                    <Stack.Screen
                    name='bottom-tab'
                    component={BottomTab}
                    options={{
                        headerTitle:"Pokemon"
                    }}
                />
                ):(
                    <>
                    <Stack.Screen
                    name="user-register"
                    component={UserRegisterScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="user-login"
                    component={UserLoginScreen}
                    options={{
                        headerShown: false
                    }}
                />
                </>
                )}
                
                
            </Stack.Navigator>

        </NavigationContainer>
    )
}


function mapStateToProps(state){
    return{
        isAuth: state.user.isAuthenticated
    }
}

const Main = connect(mapStateToProps, null)(MainApp)
export {Main}