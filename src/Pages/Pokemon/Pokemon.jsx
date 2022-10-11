import React from 'react'
import PokemonDetails from '../../Components/Pokedex/PokemonDetails'
import SearchForm from '../../Components/Pokedex/SearchForm'

export default function Pokemon() {
    return (
        <>
            <SearchForm />
            <PokemonDetails />
        </>
    )
}
