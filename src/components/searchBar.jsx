import "../Style/App.css"
import Loupe from "../assets/loupe.png"
import "../Style/Searchbar.css"
import { Link } from "react-router-dom"

const SearchBar = () => {
    return(
        <div className="searchBar-section">
    <div className="go">
      <input type="text" id="search-i" placeholder="SearchHere..." />
      <Link to="/search"><button id="search"><img src={Loupe} alt="" /></button></Link>
    </div>
  </div>
    )
}

export default SearchBar