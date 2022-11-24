import React, { useState } from "react";
// import findBook from '../App'

const Search = (props) => {

    const [keyword, setKeyword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(props.keyword)
        props.getValue(keyword)
    };

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search</label>
                <input type="text" value={props.keyword} onChange={(e) => setKeyword(e.target.value)}/>
                <button type="submit" >Search</button>
                <p style={{color:"red"}}><em>{keyword && 'Keywords Typed: ' + keyword}</em></p>
            </form>
        </div>
        
    
    )
};

export default Search