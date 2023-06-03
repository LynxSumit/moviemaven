import './App.css';
// import { useState , useEffect } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import SignIn from './Component/SignIn/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./Component/SearchSection/Search"
import NavBar from './Component/Navbar/NavBar';
import Home from './pages/Home/Home';
import MovieList from './Component/MovieList/MovieList';
import MovieDetail from './pages/MovieDetails/MovieDetail';
import {useContext} from 'react'
import { MovieContext } from './Context/MovieContext';
import ErrorPage from './pages/Error/ErrorPage';
import RelatedMovies from './Component/RelatedMovies/RelatedMovies';
// import {LOGO} from "./Assests/LOGO.png"
const App = () => {
const {search} = useContext(MovieContext)
  
  return (
    <div className="App">
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
<Route index element={<Home/>}></Route>
<Route path='movie/:id' element={<MovieDetail/>}></Route>
{/* <Route path='movie/:id' element={<RelatedMovies/>}></Route> */}
<Route path='movies/:type' element={<MovieList/>}></Route>
<Route path='movie/*' element={<ErrorPage/>}></Route>
<Route path='movie/:id' element={<RelatedMovies/>}/>
<Route path="sign-in" element={<SignIn/>}/>
<Route path={`search/movie/${search}`} element={<Search/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
