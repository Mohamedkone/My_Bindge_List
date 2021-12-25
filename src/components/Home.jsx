import { useEffect, useState } from "react";
import axios from "axios";
import "../Style/App.css"
import SearchBar from "./SearchBar";


const Home = () =>{

    let movieList
    const [MovieInfo, SetMovieInfo] = useState()
    const [TvInfo, SetTvInfo] = useState()
    const [MovieLength, SetMovieLength] = useState()
    const [TvLength, SetTvLength] = useState()

    useEffect(()=>{
        axios.get(
            `${process.env.REACT_APP_DOMAIN}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
            
        ).then(res =>{
            SetMovieInfo(res.data.results)
            SetMovieLength(10)
        
        })

    },[])
    useEffect(()=>{
        axios.get(
            `${process.env.REACT_APP_DOMAIN}/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
            
        ).then(test =>{
            SetTvInfo(test.data.results)
            SetTvLength(10)     
        })

    },[])
    let length = 1
    let Cards = []
    let Cards2 =[]

          for (let i = 0; i < MovieLength; i++) {
              Cards.push(<div className="card">
                
                <div className="info">
                    <h3>{MovieInfo[i].title}</h3>
                    <p className="rl-date"> Released on: {MovieInfo[i].release_date}</p>
                </div>
                <img src={`${process.env.REACT_APP_IMG_PATH}${MovieInfo[i].poster_path}`} />
            </div>)
          }
            for (let i = 0; i < TvLength; i++) {
                Cards2.push(<div className="card">
                
                <div className="info">
                    <h3>{TvInfo[i].name}</h3>
                    <p className="rl-date"> Aired on: {TvInfo[i].first_air_date}</p>
                </div>
                <img src={`${process.env.REACT_APP_IMG_PATH}${TvInfo[i].poster_path}`} />
            </div>)
            }

return(
    <div>
        <div className="search-section">
            <div className="sec-content">
            <h1>Movie Library</h1>
            <h3>Find the best movies to bindge watch no matter
            the category we've got your back.
            </h3>
            <SearchBar />
            </div>
        </div>
        
    <div className="sec-content">
    <section className="content-list">
        <h2>Recent Movies To Bindge...</h2>
        <div className="container1">
            {Cards}
        </div>
        <h2>More Tv Show to Bindge...</h2>
        <div className="container2">
            {Cards2}
        </div>
  </section>
  </div>
  </div>
)
}

export default Home