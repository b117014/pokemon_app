import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { PokemonListingScreen } from '../PokemonScreen/PokemonListingScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab = createBottomTabNavigator()

const BottomTab = (props)=>{

    return(
        <Tab.Navigator>
            <Tab.Screen
                name='pokemon'
                component={PokemonListingScreen}
                options={{
                    title: 'Pokemon',
                    tabBarIcon:(tab)=>(<Icon name="pokemon-go" size={20} color={tab.color}/>) 
                }}
            />
            
        </Tab.Navigator>
    )
}

export {BottomTab}