import "../styles/List.css"
import {Link} from "react-router-dom"
import { useState, useRef } from "react"
import getFilteredData from "../utils/getFilteredData"
import Tools from "../data/Tools"

const List = () => {
    const [result, setResult] = useState(Tools)
    const searchRef = useRef("")
    
    const onChangeSearch = (e) => {
        searchRef.current = e.target.value
    }

    const onClickSearch = () => {
        const filteredtool = getFilteredData({search : searchRef.current, tools: Tools})
        setResult(filteredtool)
    }


    return (
        <div className="List">
            <div className="Searchbar">
                <input ref={searchRef} onChange={onChangeSearch} placeholder="검색어를 입력하세요"></input>
                <button onClick={onClickSearch}>검색</button>
            </div>

            {result.map((tool, index) => (
                <div key={index} className="tool-item">
                    <h2>{tool.name}</h2>

                    <div className="explane">
                        <p>요금제 : {tool.price}</p>
                        <p>카테고리 : {tool.category}</p>
                    </div>
                    
                    <div className="button">
                        <a href={tool.link} target="_blank" rel="noopener noreferrer">홈페이지 방문</a>
                        <Link to={"/detail"} className="Detail" state={{tool}}>상세 보기</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default List