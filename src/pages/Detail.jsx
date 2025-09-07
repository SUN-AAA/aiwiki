import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import "../styles/Detail.css"

function Detail() {
  const location = useLocation();
  const { tool } = location.state;

  return (
    <div className="Detail">
      <h1>{tool.name}</h1>
      <p>{tool.content}</p>
      <a href={tool.link} target="_blank" rel="noopener noreferrer">Go to Homepage</a>
      <div className="link">
        <Link to={"/"}>Home</Link>
      </div>
    </div>
  );
}

export default Detail;
