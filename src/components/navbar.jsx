import "../Style/App.css"
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () =>{

    return(
    <header>
        <h1><Link to="/">My Bindge Watch List</Link></h1>
        <nav>
            <Link to="/movie" className="li">Movies</Link>
            <Link to="/tv_show" className="li">Tv Shows</Link>
            <Link to="/stars" className="li">Stars</Link>
        </nav>
    </header>
    )
}

export default NavBar