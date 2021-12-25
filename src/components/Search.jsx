import { useEffect, useState } from "react"
import axios from "axios"
import "../Style/App.css"
import { Link, useParams } from "react-router-dom"
import SearchBar from "./SearchBar"

const Search = () => {
    const [MovieInfo, SetMovieInfo] = useState()
    const [TvInfo, SetTvInfo] = useState()
    const [MovieLength, SetMovieLength] = useState()
    const [TvLength, SetTvLength] = useState()
    const params = useParams()

    useEffect(()=>{
        axios.get(
            `${process.env.REACT_APP_DOMAIN}/search/movie?query=${params.id}&api_key=${process.env.REACT_APP_API_KEY}`
            
        ).then(res =>{
            SetMovieInfo(res.data.results)
            SetMovieLength(10)
        
        })

    },[params.id])
    let Cards = []
    let Cards2 =[]

          for (let i = 0; i < MovieLength; i++) {
              Cards.push(<div key={i} className="card">
                
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
                        <h2>Search for <span id="s-result"></span></h2>
                        <div className="container1">
                            {Cards}
                        </div>
                    </section>
            </div>
        </div>
    )
}

export default Search