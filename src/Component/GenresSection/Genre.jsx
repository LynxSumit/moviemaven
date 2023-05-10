import React, { useState , useEffect } from 'react'
import "./Genre.style.css"

import { useParams } from 'react-router-dom'
const Genre = ({genreId}) => {
    const [genreList , setGenreList ] = useState([])
const {genre} = useParams()

useEffect(() => {
    getData()
}, [])

useEffect(() => {
    getData()
}, [genre])

const getData = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ac17aa2c4595c25579449c8e623e3f30&with_genres=${genreId}
    `)
    .then(res => res.json())
    .then(data => console.log(data.results))
}
// const {id , name} = genreList
return (
    
    
    <div key={genreId}>

    </div>
  
        
  )
}

export default Genre
