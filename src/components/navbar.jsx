import { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/App.css"
import Logo from "../assets/movLogo.svg"

const NavBar = () =>{

    return(
    <header>
        <div className="logo"><Link to="/"><img src={Logo} alt="" /><h1>My Bindge Watch List</h1></Link></div>
        <nav>
            <Link to="/movie" className="li">Movies</Link>
            <Link to="/tv_show" className="li">Tv Shows</Link>
            <Link to="/stars" className="li">Stars</Link>
        </nav>
    </header>
    )
}

export default NavBar