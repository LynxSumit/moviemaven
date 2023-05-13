import React from 'react'
import { useState , useEffect } from 'react'
import Card from '../Card/Card'
import "./RelatedMovies.css"
import { useNavigate } from 'react-router-dom'

const RelatedMovies = ({id}) => {
    const [movieList, setMovieList] = useState([])
    
    
    useEffect(() => {
        SimilarData()
    },[])

    useEffect(() => {
        SimilarData()
    }, [id])

    const SimilarData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }
    const navigate = useNavigate()
    const ClickHandler = () => {
navigate(`movie/${id}`)
    }
  return (
    <div className="movie__list">
            <h2 className="list__title">{("Similar Movies")}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                 
                       <Card onClick={ClickHandler}  movie={movie}  key={movie.id} />
                      
                    ))
                }
            </div>
        </div>
  )
}

export default RelatedMovies
