import React, { useState } from "react";

const Search = (props) => {

    const [keyword, setKeyword] = useState('');

    return (
        <form>
            <label>Search</label>
            <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
            <input type="submit" value="submit"/>
            <p style={{color:"red"}}><em>{keyword && 'Keywords Typed: ' + keyword}</em></p>
        </form>
    )
}

export default Search