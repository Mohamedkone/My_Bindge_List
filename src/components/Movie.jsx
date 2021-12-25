import "../Style/App.css"
import SearchBar from "./SearchBar"

const Home = () =>{
    return(
        <div>
            <SearchBar />
        <div className="sec-content">
            <section className="content-list">
                <h2>Movies Trending today...</h2>
                <div className="container1">
                
                </div>
            </section>
        </div>
        </div>
    )
}

export default Home