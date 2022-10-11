import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemon = createAsyncThunk(
    'getPokemon/fetchAPI',
    async (searchName, thunk) => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + searchName)
        const pokemon = response.data
        const newPokemon = {
            name : pokemon.name,
            img : pokemon.sprites.front_default
        }
        return newPokemon

        })