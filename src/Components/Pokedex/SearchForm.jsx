import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemon } from '../../Store/Action/pokemon-action'

export default function SearchForm() {

    const [searchName, setSearchName] = useState('')

    const dispatch = useDispatch()

    const handleSearch = () => {
        dispatch(getPokemon(searchName))
    }

    return (
        <div>
        <input type='text' placeholder='Put number or name EN' value={searchName} onChange={name => setSearchName(name.target.value)}/>
        <button onClick={handleSearch} >Search</button>
        </div>
    )
}
