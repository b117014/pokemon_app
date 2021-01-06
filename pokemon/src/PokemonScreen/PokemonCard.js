import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

const PokemonCard = (props)=>{
    console.log(props.data)
    const {item} = props.data

    const isFav = ()=>{
        return props.data.item.user.includes(props.userId)
    }

    return(
        <View style={styles.cardStyle}>
            <View>
                <Text style={styles.titleStyle}>{item.name}</Text>
            </View>
            <View>
                <Image source={{uri: item.image}} style={styles.imageStyle} />
            </View>
            <TouchableOpacity 
                onPress={()=>props.onSavePokemon(item._id)}
            >
                {isFav() ? (
                    <AntDesignIcon name="heart" size={30}/>
                ):(               <AntDesignIcon name="hearto" size={30}/>
                )}
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    cardStyle:{
        flex: 1,
        flexDirection: 'column',
        margin: 1,
        alignItems:'center',
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    titleStyle:{
        color: '#8d99ae',
        fontSize:18
    },
    imageStyle:{
        
    height: 100,
    width:100
    }
})
export {PokemonCard}