import React from 'react'
import { PokemonListingContainer } from './PokemonListingContainer'
import { getPokemonApi, getPokemonDetailsApi, addPokemonApi, getUserPokemonApi } from '../_Api/Pokemon'
import { connect } from 'react-redux'
import { Pokemon, allPokemon } from '../_redux/action/Pokemon'
import Spinner from 'react-native-loading-spinner-overlay'


class PokemonListingScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pokemon:[],
            isVisible: true
        }

    }

    async componentDidMount(){
       
       await this.onGetPokemon()
       
       
    }
    onGetPokemon = ()=>{
        getPokemonApi()
            .then(res=>{
                this.props.addPokemonRedux(res.data)
                this.setState({isVisible: false})

            })
            
      
    }

  
    onSavePokemon = (pokemonId)=>{
       console.log(pokemonId)
        addPokemonApi(this.props.user.id, pokemonId)
            .then(res=>{
                this.props.addPokemonRedux(res.data)
               this.setState({isVisible: false})
            })
    }

    render(){
        console.log(this.props.allPoke)
        return(
            <>
                <PokemonListingContainer
                    data={this.props.pokemon}
                    onSavePokemon={this.onSavePokemon}
                    userId = {this.props.user.id}

                />
                 <Spinner
                    visible={this.state.isVisible}
                />

            </>
        )
    }
}

function mapStateToDispatch(dispatch){
    return{
        addPokemonRedux: (data)=>dispatch(Pokemon(data)),
       
    }
}
function mapStateToState(state){
    return{
        user: state.user.user,
        pokemon: state.pokemon.pokemon,
      
    }
}

PokemonListingScreen = connect(mapStateToState, mapStateToDispatch)(PokemonListingScreen)
export {PokemonListingScreen}