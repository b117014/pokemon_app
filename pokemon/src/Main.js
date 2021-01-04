import React from 'react'
import {View} from 'react-native'
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

const Main = (props)=>{

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    
                />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export {Main}