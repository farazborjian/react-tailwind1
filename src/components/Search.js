import React, { useState } from 'react'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const searchHandler = e => {
        setSearchTerm(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        setSearchTerm(searchTerm)
    }

    return (
        <form className="border-2 w-60" onSubmit={submitHandler}>
            <input id="search" placeholder="Search Image Term" onChange={searchHandler} value={searchTerm}/>
            <button className="bg-green-300">Search</button>
        </form>
    )
}

export default Search
