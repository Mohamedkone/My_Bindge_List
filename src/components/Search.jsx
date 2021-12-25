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
    const [ArrayLength, SetArrayLength] = useState()
    const params = useParams()

    useEffect(()=>{
        axios.get(
            `${process.env.REACT_APP_DOMAIN}/search/movie?query=${params.id}&api_key=${process.env.REACT_APP_API_KEY}`
            
        ).then(res =>{
            SetMovieInfo(res.data.results)
            SetArrayLength(res.data.results.length)
            SetMovieLength(10)
        
        })

    },[params.id])
    let Cards = []
    let Cards2 =[]
    let h4
    let imgs
    if (ArrayLength == 0 ) {
        Cards = []
        h4 = "...No such Movie Available"
    }else{

          for (let i = 0; i < MovieLength; i++) {
              console.log(MovieInfo[i].poster_path)
            if (MovieInfo[i].poster_path == null ) {
                
                imgs = `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`;
               } else {
                 imgs = `${process.env.REACT_APP_IMG_PATH}${MovieInfo[i].poster_path}`;
               }
              Cards.push(<div key={i} className="card">
                
                <div className="info">
                    <h3>{MovieInfo[i].title}</h3>
                    <p className="rl-date"> Released on: {MovieInfo[i].release_date}</p>
                </div>
                <img src={imgs} />
            </div>)
          }
        }
    return(

        <div>
            <SearchBar />
            <div className="sec-content">
                    <section className="content-list">
                        <h2>Search for <span id="s-result">" {params.id} "</span></h2>
                        <div className="container1">
                            {Cards}
                            <h3>{h4}</h3>
                        </div>
                    </section>
            </div>
        </div>
    )
}

export default Search