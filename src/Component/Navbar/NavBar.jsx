import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

import "./Navbar.style.scss"
// import Genre from '../GenresSection/Genre';
import Logo from "../../Assests/fotor_2023-5-10_15_47_54.png"
import MovieList from '../MovieList/MovieList';
const NavBar = () => {
  

 const [searchResults , setSearchresults] = useState([])
  const [search , setSearch] = useState("")
  
  const changeHandler = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }
  // https://api.themoviedb.org/3/search/multi?api_key=ac17aa2c4595c25579449c8e623e3f30&language=en-US&$query={}&page=1&include_adult=false
  const searchHandler = () => {
fetch(`https://api.themoviedb.org/3/search/movie?api_key=ac17aa2c4595c25579449c8e623e3f30&language=en-US&query=${search}&page=1&include_adult=false`).then(res => res.json()).then(data=> console.log(data.results))
  }
  return (
    <>
        <div className='header'>
  {/* <Link to="/"> {Logo}</Link> */}
  <div className='headerLeft'>
  <Link to="/" > <img src={Logo} className='header__icon' alt='header_icon'/></Link>
  <Link to="/movies/popular" style={{textDecoration: "none"}}> <span>Popular</span></Link>
  <Link to="/movies/top_rated" style={{textDecoration: "none"}}> <span>Top Rated</span></Link>
  <Link to="/movies/upcoming" style={{textDecoration: "none"}}> <span>Upcoming</span></Link>
  
  </div>
  <div className='headerRight'>
<input  type='text' value={search} onChange={changeHandler}/>
<Link to={`movie/${search}`}>
<span onClick={searchHandler}  ><i id='search-icon' className="fa-solid fa-magnifying-glass fa-2x"  style={{ cursor: "pointer" , padding: "10px"}}></i></span>
</Link>


  <Link to="/sign-in" style={{textDecoration: "none"}}> <span>Sign In</span></Link>
  </div>
        </div>
    </>
  )
}

export default NavBar