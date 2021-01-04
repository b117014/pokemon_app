import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'

const PokemonCard = (props)=>{
    console.log(props.data)
    const {item} = props.data
    return(
        <View>
            <View>
                <Text>{item.name}</Text>
            </View>
            <View>
                {/* <Image source={{uri: props.data.font_default}} /> */}
            </View>
            <View>
                <Text>Like</Text>
            </View>

        </View>
    )
}

export {PokemonCard}