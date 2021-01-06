import React from 'react'
import {FlatList, View, StyleSheet, SafeAreaView} from 'react-native'
import { PokemonCard } from './PokemonCard'


const PokemonListingContainer = (props)=>{

    return(
        <SafeAreaView style={styles.listStyle}>
            <FlatList
                data={props.data}
                keyExtractor={(item)=>item.id}
                renderItem = {(item,i)=>(
                    <PokemonCard
                        key={i}
                        data={item}
                        onSavePokemon={props.onSavePokemon}
                        userId={props.userId}
                    />
                )}
                numColumns={3}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    listStyle:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    }
})

export {PokemonListingContainer}