import React from 'react'
import {FlatList, View, StyleSheet} from 'react-native'
import { PokemonCard } from './PokemonCard'


const PokemonListingContainer = (props)=>{

    return(
        <View style={styles.listStyle}>
            <FlatList
                data={props.data}
                keyExtractor={(item)=>item.id}
                renderItem = {(item,i)=>(
                    <PokemonCard
                        key={i}
                        data={item}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listStyle:{
        flex:1
    }
})

export {PokemonListingContainer}