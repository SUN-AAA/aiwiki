import "../styles/List.css"
import {Link} from "react-router-dom"

const List = () => {
    const tools = [
        {
            name: "Tool 1",
            content: "This tool is...",
            link: "https://www.aiwiki.kr"
        },
        {
            name: "Tool 2",
            content: "This tool is...",
            link: "https://www.aiwiki.kr"
        },
        {
            name: "Tool 3",
            content: "This tool is...",
            link: "https://www.aiwiki.kr"
        },
    ]

    return (
        <div className="List">
            {tools.map((tool, index) => (
                <div key={index} className="tool-item">
                    <h2>{tool.name}</h2>
                    <p>{tool.content}</p>
                    <div className="button">
                        <a href={tool.link} target="_blank" rel="noopener noreferrer">Go to Homepage</a>
                        <Link to={"/detail"} className="Detail" state={{tool}}>Detail</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default List