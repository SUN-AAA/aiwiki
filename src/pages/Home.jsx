import {Link} from "react-router-dom"
import Header from "../components/Header"
import "../styles/Home.css"

const Home = () => {
    return(
        <div className="Home">
            <Header/>
            <Link to={"/detail"} className="Detail">Detail</Link>
        </div>
    )
}

export default Home