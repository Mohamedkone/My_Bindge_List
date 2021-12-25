import { useEffect, useState } from "react"
import axios from "axios"
import "../Style/App.css"
import SearchBar from "./SearchBar"

const TvShow = () =>{
    const [TvInfo, SetTvInfo] = useState()
    const [TvLength, SetTvLength] = useState()
    
        useEffect(()=>{
            axios.get(
                `${process.env.REACT_APP_DOMAIN}/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
                
            ).then(test =>{
                SetTvInfo(test.data.results)
                SetTvLength(20)     
            })
    
        },[])
        let length = 1
        let Cards = []

        for (let i = 0; i < TvLength; i++) {
            Cards.push(<div className="card">
            
            <div className="info">
                <h3>{TvInfo[i].name}</h3>
                <p className="rl-date"> Aired on: {TvInfo[i].first_air_date}</p>
            </div>
            <img src={`${process.env.REACT_APP_IMG_PATH}${TvInfo[i].poster_path}`} />
        </div>)
        }
    return(
        <div>
            <SearchBar />
        <div className="sec-content">
            <section className="content-list">
                <h2>Recent Aired Shows...</h2>
                <div className="container1">
                    {Cards}
                </div>
            </section>
        </div>
        </div>
    )
}

export default TvShow