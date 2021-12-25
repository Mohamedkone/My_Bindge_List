import { useEffect, useState } from "react"
import axios from "axios"
import "../Style/App.css"
import SearchBar from "./SearchBar"

const Home = () =>{
    const [MovieInfo, SetMovieInfo] = useState()
    const [MovieLength, SetMovieLength] = useState()
    useEffect(()=>{
        axios.get(
            `${process.env.REACT_APP_DOMAIN}/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
            
        ).then(res =>{
            SetMovieInfo(res.data.results)
            SetMovieLength(20)
        
        })

    },[])
    

    let Cards = []

          for (let i = 0; i < MovieLength; i++) {
              Cards.push(<div key={i}className="card">
                
                <div className="info">
                    <h3>{MovieInfo[i].title}</h3>
                    <p className="rl-date"> Released on: {MovieInfo[i].release_date}</p>
                </div>
                <img src={`${process.env.REACT_APP_IMG_PATH}${MovieInfo[i].poster_path}`} />
            </div>)
          }

    return(
        <div>
            <SearchBar />
        <div className="sec-content">
            <section className="content-list">
                <h2>Movies Trending today...</h2>
                <div className="container1">
                    {Cards}
                </div>
            </section>
        </div>
        </div>
    )
}

export default Home