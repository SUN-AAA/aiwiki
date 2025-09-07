import {Link} from "react-router-dom"
import Header from "../components/Header"
import Searchbar from "../components/Searchbar"
import "../styles/Home.css"

const Home = () => {
    return(
        <div className="Home">
            <Header/>
            <Searchbar/>
            <Link to={"/detail"} className="Detail">Detail</Link>
        </div>
    )
}

export default Home