import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const { tool } = location.state;

  return (
    <div>
      <h1>{tool.name}</h1>
      <p>{tool.content}</p>
      <a href={tool.link} target="_blank" rel="noopener noreferrer">Go to Homepage</a>
      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default Detail;
