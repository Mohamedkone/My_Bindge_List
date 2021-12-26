import "../Style/App.css"
import Loupe from "../assets/loupe.png"
import "../Style/Searchbar.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const SearchBar = () => {
  let [searchValue, SetSearchValue] = useState()
  let [buttonD, SetButtonD] = useState()
  
  
    return(
        <div className="searchBar-section">
    <div className="go">
      <input type="text" id="search-i" placeholder="Search Here..." onChange={(e)=>SetSearchValue(e.target.value)} /*onKeyPress={(e)=>e.key.value=="Enter"?window.location.href(`/search/${searchValue}`):"key"}*//>
      <Link to={`/search/${searchValue}`}><button id="search"><img src={Loupe} alt="" /></button></Link>
    </div>
  </div>
    )
}

export default SearchBar