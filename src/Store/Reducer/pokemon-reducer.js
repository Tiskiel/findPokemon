import { createReducer } from "@reduxjs/toolkit"
import { getPokemon } from "../Action/pokemon-action"

const initialState = {
    name : "Pokemon name ",
    img : ""
}

export const pokemonReducer = createReducer(initialState,(builder) => {
    builder
        .addCase(getPokemon.fulfilled, (state, action) => {
            return{
                name : action.payload.name,
                img : action.payload.img
            }
        })
        .addCase(getPokemon.rejected, (state, action) => {
            return{
                name : "Error",
                img : ""
            }
        })
        .addCase(getPokemon.pending, (state, action) => {
            return{
                name : "Pokemon on road",
                img : ""
            }
        })
})