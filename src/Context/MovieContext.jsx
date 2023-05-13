import {createContext , useState , useEffect} from 'react'
export const MovieContext = createContext({
    searchHandler: () => {}
})

export const MovieProvider = ({children}) => {
    const [searchResults , setSearchresults] = useState([])
    const [search , setSearch] = useState("")

        const searchHandler = () => {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=ac17aa2c4595c25579449c8e623e3f30&language=en-US&query=${search}&page=1&include_adult=false`).then(res => res.json()).then(data=> setSearchresults(data.results))
            
              }

    const value = {setSearchresults , setSearch ,search, searchResults , searchHandler }
  return  <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}