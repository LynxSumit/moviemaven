import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.style.css"
const NavBar = () => {
  return (
    <>
        <div className='header'>
  {/* <Link to="/"> {Logo}</Link> */}
  <div className='headerLeft'>
  <Link to="/" > <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' className='header__icon' alt='header_icon'/></Link>
  <Link to="/movies/popular" style={{textDecoration: "none"}}> <span>Popular</span></Link>
  <Link to="/movies/top_rated" style={{textDecoration: "none"}}> <span>Top Rated</span></Link>
  <Link to="/movies/upcoming" style={{textDecoration: "none"}}> <span>Upcoming</span></Link>
  
  </div>
  <div className='headerRight'>
  <Link to="/movies/upcoming" style={{textDecoration: "none"}}> <span><i class="fa-solid fa-filter" style={{color : "#fff"}}></i></span></Link>
  {/* <Link to="/sign-in" style={{textDecoration: "none"}}> <span><i class="fa-solid fa-user" style={{color: "#fff"}}></i></span></Link> */}
  <Link to="/sign-in" style={{textDecoration: "none"}}> <span>Sign In</span></Link>
  </div>
        </div>
    </>
  )
}

export default NavBar
