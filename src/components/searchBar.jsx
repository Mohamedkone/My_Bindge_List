import "../Style/App.css"
import Loupe from "../assets/loupe.png"
import "../Style/Searchbar.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const SearchBar = () => {
  let [searchValue, SetSearchValue] = useState()
  useEffect(()=>{},[searchValue])
    return(
        <div className="searchBar-section">
    <div className="go">
      <input type="text" id="search-i" placeholder="SearchHere..." onChange={(e)=>SetSearchValue(e.target.value)} />
      <Link to={`/search/${searchValue}`}><button id="search"><img src={Loupe} alt="" /></button></Link>
    </div>
  </div>
    )
}

export default SearchBar