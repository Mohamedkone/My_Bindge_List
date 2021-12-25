import "../Style/App.css"
import Loupe from "../assets/loupe.png"
import "../Style/Searchbar.css"

const SearchBar = () => {
    return(
        <div className="searchBar-section">
    <div className="go">
      <input type="text" id="search-i" placeholder="SearchHere..." />
      <button id="search"><img src={Loupe} alt=""/></button>
      <i className="fas fa-search"></i>
    </div>
  </div>
    )
}

export default SearchBar