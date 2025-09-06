import {Link} from "react-router-dom"

const Home = () => {
    return(
        <div>
            <h1>AiWiki</h1>
            <Link to={"/detail"}>Detail</Link>
        </div>
    )
}

export default Home