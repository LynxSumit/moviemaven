import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./Navbar.style.css"
import Genre from '../GenresSection/Genre';
import Logo from "../../Assests/fotor_2023-5-10_15_47_54.png"
const NavBar = () => {
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreChange = event => {
    setSelectedGenre(event.target.value);
  };
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
  {/* <div>
      <h1>Movie Database App</h1>
      <select value={selectedGenre} onChange={handleGenreChange}>
        <option value="">Select a Genre</option>
        <option value="28">Action</option>
        <option value="35">Comedy</option>
        <option value="18">Drama</option>
      </select>
      {selectedGenre && <Genre genreId={selectedGenre} />}
    </div> */}
  <DropdownButton value={selectedGenre} onChange={handleGenreChange} style={{color: "white"}} variant='warning' id="dropdown-basic-button" title={ <span>Genres</span>}>
    <Dropdown.Item value="28" >Action</Dropdown.Item>
      <Dropdown.Item value="35" >Comedy </Dropdown.Item>
      <Dropdown.Item value="18" >Drama</Dropdown.Item>
      {selectedGenre && <Genre genreId={selectedGenre} />}
    </DropdownButton>
  <Link to="/sign-in" style={{textDecoration: "none"}}> <span><i className="fa-solid fa-user" style={{color: "#fff"}}></i></span></Link>
  <Link to="/sign-in" style={{textDecoration: "none"}}> <span>Sign In</span></Link>
  </div>
        </div>
    </>
  )
}

export default NavBar
