import React, { useState , useEffect } from 'react'
import "./Genre.style.css"

import { useParams } from 'react-router-dom'
const Search = ({searchResults}) => {

// const {id , name} = genreList
return (
    
    
    <div>
        {
            searchResults.map(movie => <>
                <h1>{movie.original_title}</h1>
            </>)
        }
    </div>
  
        
  )
}

export default Search
