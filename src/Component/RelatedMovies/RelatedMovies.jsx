import React from 'react'
import { useState , useEffect } from 'react'
import Card from '../Card/Card'
import "./RelatedMovies.css"


const RelatedMovies = ({id}) => {
    const [movieList, setMovieList] = useState([])

    useEffect( () => {
        const SimilarData = () => {
            fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`)
            .then(res => res.json())
            .then(async data => await setMovieList(data.results))
        }
        SimilarData()
        console.log("item rendered")
    }, [ id])
    // navigate(`movie/${id}`)
    
   
  return (
    <div className="movie__list">
            <h2 className="list__title">{("Similar Movies")}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                 
                       <Card   movie={movie}  key={movie.id} />
                      
                    ))
                }
            </div>
        </div>
  )
}

export default RelatedMovies
