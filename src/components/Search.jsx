import "../Style/App.css"
import Loupe from "../assets/loupe.png"
import { Link } from "react-router-dom"

const Search = () => {
    return(
        <div className="search-section">
            <div className="sec-content">
            <h1>Movie Library</h1>
            <h3>Find the best movies to bindge watch no matter
            the category we've got your back.
            </h3>
            <div className="go">
                <input type="text" id="search-input" placeholder="Search Here..." />
                <Link to="/search"><button id="search"><img src={Loupe} alt="" /></button></Link>
            </div>
            </div>
        </div>
    )
}

export default Search