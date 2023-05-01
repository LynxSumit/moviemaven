import React, { useEffect, useState } from 'react'
import "./MovieDetail.css"
import { Link, useParams } from 'react-router-dom'
const MovieDetail = ({movie}) => {
    const {id} = useParams()
    const [moviedetail , setMoviedetail] = useState()
    useEffect(()=>{
    fetchData()
    } , [])
    const fetchData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMoviedetail(data))
    }
  return (
    <div className="movie">
    <div className="movie__intro">
        <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${moviedetail ? moviedetail.backdrop_path : "" }`} alt='movie' />
    </div>
    <div className="movie__detail">
        <div className="movie__detailLeft">
            <div className="movie__posterBox">
                <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${moviedetail ? moviedetail.poster_path : ""}`} alt='movie'/>
            </div>
        </div>
        <div className="movie__detailRight">
            <div className="movie__detailRightTop">
                <div className="movie__name">{moviedetail ? moviedetail.original_title : ""}</div>
                <div className="movie__tagline">{moviedetail ? moviedetail.tagline : ""}</div>
                <div className="movie__rating">
                    {moviedetail ? moviedetail.vote_average: ""} <i class="fas fa-star" />
                    <span className="movie__voteCount">{moviedetail ? "(" + moviedetail.vote_count + ") votes" : ""}</span>
                </div>  
                <div className="movie__runtime">{moviedetail ? moviedetail.runtime + " mins" : ""}</div>
                <div className="movie__releaseDate">{moviedetail ? "Release date: " + moviedetail.release_date : ""}</div>
                <div className="movie__genres">
                    {
                        moviedetail && moviedetail.genres
                        ? 
                        moviedetail.genres.map(genre => (
                            <><span className="movie__genre" key={genre.id}>{genre.name}</span></>
                        )) 
                        : 
                        ""
                    }
                </div>
            </div>
            <div className="movie__detailRightBottom">
                <div className="synopsisText">Synopsis</div>
                <div>{moviedetail ? moviedetail.overview : ""}</div>
            </div>
            
        </div>
    </div>
    <div className="movie__links">
        <div className="movie__heading">Useful Links</div>
        {
            moviedetail && moviedetail.homepage && <a href={moviedetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
        }
        {
            moviedetail && moviedetail.imdb_id && <a href={"https://www.imdb.com/title/" + moviedetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
        }
    </div>
    <div className="movie__heading">Production companies</div>
    <div className="movie__production">
        {
            moviedetail && moviedetail.production_companies && moviedetail.production_companies.map(company => (
                <>
                    {
                        company.logo_path 
                        && 
                        <span className="productionCompanyImage" >
                            <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                            <span>{company.name}</span>
                        </span>
                    }
                </>
            ))
        }
    </div>
</div>
  )
}

export default MovieDetail
