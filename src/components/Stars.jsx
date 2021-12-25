import { useEffect, useState } from "react"
import axios from "axios"
import "../Style/App.css"
import SearchBar from "./SearchBar"

const Stars = () =>{
    const [Stars, SetStars] = useState()
    const [StarsLength, SetStarsLength] = useState()
    
        useEffect(()=>{
            axios.get(
                `${process.env.REACT_APP_DOMAIN}/trending/person/day?api_key=${process.env.REACT_APP_API_KEY}`
                
            ).then(test =>{
                SetStars(test.data.results)
                SetStarsLength(20)     
            })
    
        },[])
        let imgs
        let Cards = []


        for (let i = 0; i < StarsLength; i++) {
            if (Stars[i].profile_path == null) {
                imgs = `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`;
               } else {
                 imgs = `${process.env.REACT_APP_IMG_PATH}${Stars[i].profile_path}`;
               }
            Cards.push(<div className="card">
            
            <div className="info">
                <h3>{Stars[i].name}</h3>
                <p class="rl-date"> Known for: {Stars[i].known_for_department}</p>
            </div>
            <img src={imgs} />
        </div>)
        }
    return(
        <div>
            <SearchBar />
        <div className="sec-content">
            <section className="content-list">
                <h2>Trending Actor...</h2>
                <div className="container1">
                    {Cards}
                </div>
            </section>
        </div>
        </div>
    )
}

export default Stars