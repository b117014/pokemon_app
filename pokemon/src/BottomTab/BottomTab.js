import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { PokemonListingScreen } from '../PokemonScreen/PokemonListingScreen'

const Tab = createBottomTabNavigator()

const BottomTab = (props)=>{

    return(
        <Tab.Navigator>
            <Tab.Screen
                name='pokemon'
                component={PokemonListingScreen}
            />
            
        </Tab.Navigator>
    )
}

export {BottomTab}