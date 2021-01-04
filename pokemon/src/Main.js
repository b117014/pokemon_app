import React from 'react'
import {View} from 'react-native'
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack'
import { UserLoginScreen } from './UserLoginScreen/UserLoginScreen';
import { UserRegisterScreen } from './UserRegisterScreen/UserRegisterScreen';

const Stack = createStackNavigator()

const Main = (props)=>{

    return(
        <NavigationContainer>
            <Stack.Navigator>
                
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
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export {Main}