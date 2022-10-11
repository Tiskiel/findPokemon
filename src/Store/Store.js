import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "./Reducer/pokemon-reducer";

export const store = configureStore({
    reducer : {
        pokemon : pokemonReducer
    },
    devTools : process.env.NODE_ENV !== "production"
})