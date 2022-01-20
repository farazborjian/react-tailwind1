import React, { useState } from 'react'

const Search = ({searchText}) => {
    const [text, setText] = useState('')

    const onChange= e => {
        setText(e.target.value)
      }

      const onSubmit = e => {
          e.preventDefault();
          searchText(text);
      }


    return (
        <form onSubmit={onSubmit}>
           <input name="search" type="text" placeholder="Search Image" className="py-2 px-4 bg-gray-300" onChange={onChange} value={text}/> 
           <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Search</button>
        </form>
    )
}

export default Search
