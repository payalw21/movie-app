import React, { Fragment} from 'react'
import {HiSearch} from "react-icons/hi";
import {Routes, Route, NavLink} from "react-router-dom"
import Movies from "./Movies"
import TvShows from "./TvShows"
import Pricing from "./Pricing"
import Trending from "./Trends"
import "../Styles/NavBarStyle.css";



function NavBar({toggle, setToggle}) {
    // console.log(toggle);

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
                <input type="text" placeholder="Search Whatever You Want"/>
                <HiSearch  fontSize={21} color="black" id="search"/>
                <div id="Color-switcher" onClick={setToggle}>
                   <div id={toggle ? "Color-switcher-mover" : "Color-switcher-moved"}></div>
                </div>
            </div>
        </nav>
        <Routes>
          <Route path="Movies" element={<Movies />}/>
          <Route path="TvShows" element={<TvShows />}/>
          <Route path="Trending" element={<Trending />}/>
          <Route path="Pricing" element={<Pricing />}/>
        </Routes>
    </Fragment>


  )
}

export default NavBar
