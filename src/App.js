import './App.css';
// import { useState , useEffect } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import SignIn from './Component/SignIn/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Genre from './Component/GenresSection/Genre';
import NavBar from './Component/Navbar/NavBar';
import Home from './pages/Home/Home';
import MovieList from './Component/MovieList/MovieList';
import MovieDetail from './pages/MovieDetails/MovieDetail';
import RelatedMovies from './Component/RelatedMovies/RelatedMovies';
// import {LOGO} from "./Assests/LOGO.png"
const App = () => {

  
  return (
    <div className="App">
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
<Route index element={<Home/>}></Route>
<Route path='movie/:id' element={<MovieDetail/>}></Route>
{/* <Route path='movie/:id' element={<RelatedMovies/>}></Route> */}
<Route path='movies/:type' element={<MovieList/>}></Route>
<Route path='/*' element={<h1>error page</h1>}></Route>
{/* <Route path='profile' element={<h1>Profile page</h1>}/> */}
<Route path="sign-in" element={<SignIn/>}/>
{/* <Route path="movies/:genre" element={<Genre/>}/> */}

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
