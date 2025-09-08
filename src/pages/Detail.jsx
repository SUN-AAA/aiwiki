import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Detail.css"

const Detail = () => {
  const location = useLocation();
  const { tool } = location.state;

  return (
    <div className="Detail">
        <Header/>
        <div className="link">
            <Link to={"/"}>Home</Link>
        </div>
        <hr/>
        
        <h1>{tool.name}</h1>
        <p>요금제 : {tool.price}</p>
        <p>카테고리 : {tool.category}</p>
        <p>사용 플랫폼 : {tool.platform}</p>
        <a href={tool.link} target="_blank" rel="noopener noreferrer">홈페이지 방문</a>
        <p className="content">상세 설명 <br/> {tool.content}</p>
        
    </div>
  );
}

export default Detail;
