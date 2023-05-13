
import "./Search.style.css"
import Card from '../Card/Card'
import {useContext} from 'react'
import { MovieContext } from "../../Context/MovieContext"
// import { useParams } from 'react-router-dom'
const Search = () => {
   
    const {searchResults , search} = useContext(MovieContext)
console.log(searchResults)
// const {id , name} = genreList
return (
    
    
    <div>
        {<div className="movie__list">
            <h2 className="list__title">{(search).toUpperCase()}</h2>
            <div className="list__cards">
                {
                    searchResults.map(movie => (
                        <Card movie={movie} key={movie.id} />
                    ))
                }
            </div>
        </div>}
    </div>
  
        
  )
}

export default Search
