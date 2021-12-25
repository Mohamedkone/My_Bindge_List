import "../Style/App.css"
import Loupe from "../assets/loupe.png"
import "../Style/Searchbar.css"

const SearchBar = () => {
    return(
        <div class="searchBar-section">
    <div class="go">
      <input type="text" id="search-i" placeholder="SearchHere..." />
      <button id="search"><img src={Loupe} alt=""/></button>
      <i class="fas fa-search"></i>
    </div>
  </div>
    )
}

export default SearchBar