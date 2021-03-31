// import React from 'react'
import React, { useState } from 'react'

const SearchBar = ({updateInput}) => {

    const [input, setInput] = useState("")

    function handleSearch(e) {
        e.preventDefault()
        
        updateInput(input)
        setInput('')
    }

    const BarStyling = {width:"20rem", background:"#F2F1F9", border:"none", padding:"0.5rem"};
    
    return(
        <form onSubmit={(e) => handleSearch(e)}>
            <input
                style={BarStyling}
                type="search"
                id="header-search"
                key="random1"
                value={input}
                placeholder={"find restuarants by city"}
                name="s"
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar