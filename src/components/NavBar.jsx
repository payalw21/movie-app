import React, { useState, Fragment} from 'react'
import {HiSearch} from "react-icons/hi";
import {Routes, Route, NavLink} from "react-router-dom"
import "../Styles/NavBarStyle.css";
import {Movies, TvShows, Trending, Pricing} from './index';



function NavBar() {
  const [toggle, setToggle] = useState(true);
  const [inputValue, setInputValue] = useState('');

  function toggleHandler(){
    setToggle(prev => !prev);
  }

  function inputHandler(e){
    setInputValue(e.target.value);
  }  

return (

    <Fragment>
        <nav className={toggle ? "" : "navBarColor"}>
            <div className="nav-options">
                <h1 id={toggle ? "" : "heading"}>REACTFLIX</h1>
                <NavLink to="" style={({isActive}) => {return {color: isActive ? '#fff' : '#06cee9'}}}>
                    <span id={toggle ? "Movies" : "MoviesLight"}>Movies</span>
                </NavLink>
                <NavLink to="/TvShows" style={({isActive}) => {return {color: isActive ? '#fff' : '#06cee9'}}}>
                    <span id={toggle ? "Movies" : "MoviesLight"}>Tv Shows</span>
                </NavLink>
                <NavLink to="/Trending" style={({isActive}) => {return {color: isActive ? '#fff' : '#06cee9'}}}>
                    <span id={toggle ? "Movies" : "MoviesLight"}>Trending</span>
                </NavLink>
                <NavLink to="/Pricing" style={({isActive}) => {return {color: isActive ? '#fff' : '#06cee9'}}}>
                    <span id={toggle ? "Movies" : "MoviesLight"}>Pricing</span>
                </NavLink>
            </div>
            <div className="input-group">
                <input type="text" placeholder="Search Whatever You Want" onChange={inputHandler}/>
                <HiSearch  fontSize={21} color="black" id="search"/>
                <div id="Color-switcher" onClick={toggleHandler}>
                   <div id={toggle ? "Color-switcher-mover" : "Color-switcher-moved"}></div>
                </div>
            </div>
        </nav>
        <Routes>
          <Route path="/" element={<Movies toggle={toggle} inputValue={inputValue} />}/>
          <Route path="/tvshows" element={<TvShows toggle={toggle} inputValue={inputValue}/>}/>
          <Route path="/trending" element={<Trending toggle={toggle}/>}/>
          <Route path="/pricing" element={<Pricing />}/>
        </Routes>
    </Fragment>


  )
}

export default NavBar
