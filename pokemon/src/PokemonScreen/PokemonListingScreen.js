import React from 'react'
import { PokemonListingContainer } from './PokemonListingContainer'
import { getPokemonApi, getPokemonDetailsApi } from '../_Api/Pokemon'


class PokemonListingScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pokemon:[]
        }

    }

    componentDidMount(){
        this.onGetPokemon()
    }
    onGetPokemon = ()=>{
        getPokemonApi()
            .then(res=>{
                console.log(res.data)
                this.dataProcessing(res.data.results)
            })
    }

    dataProcessing = (data)=>{
        let filterData = []
        data.forEach(ele=>{
            let name = ele.name
            let image = ''
            getPokemonDetailsApi(ele.url)
                .then(res=>{
                    console.log(res.data.sprites.front_default)
                    filterData.push({
                        name: ele.name,
                        image: res.data.sprites.front_default
                    })
                    this.setState({pokemon: filterData})
                })
        })

       

    }
    render(){
        console.log(this.state.pokemon)
        return(
            <>
                <PokemonListingContainer
                    data={this.state.pokemon}
                />
            </>
        )
    }
}

export {PokemonListingScreen}