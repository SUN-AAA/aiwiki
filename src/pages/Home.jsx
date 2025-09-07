import Header from "../components/Header"
import Searchbar from "../components/Searchbar"
import List from "../components/List"
import "../styles/Home.css"

const Home = () => {
    return(
        <div className="Home">
            <Header/>
            <Searchbar/>
            <List/>
        </div>
    )
}

export default Home