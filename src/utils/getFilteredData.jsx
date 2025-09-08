const getFilteredData = ({search, tools}) => {
    if(search === ""){
        return tools;
    }
    return tools.filter((tool) => 
        tool.name.toLowerCase().includes(search.toLowerCase())
    )
}

export default getFilteredData