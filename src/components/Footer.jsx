import { Link } from "react-router-dom"
import "../Style/App.css"
import Logo from "../assets/movLogo.svg"

const Footer = () =>{
    return (
    <footer>
        <div className="logo"> <Link to="/"><img src={Logo} alt="" /> </Link></div>
    <p>&copy; 2021 Designed by Mohamed Kone. </p>
  </footer>   
    )
}

export default Footer