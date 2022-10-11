import React from 'react'
import { useSelector } from 'react-redux'

export default function PokemonDetails() {
    const pokemon = useSelector(state => state.pokemon)

    return (    
    <div>
        <p>{pokemon.name}</p>
        <img src={pokemon.img} alt='' /> 
    </div>
    ) 
}
