import React, { useState } from "react";
import styled from 'styled-components';

const SearchBar = styled.input `
    border-radius: 20px;
    border: 2px solid #e3c8d4;
    margin-top: 15px;
    width: 70%;
    height: 20px;
`

const SearchBtn = styled.button `
    border-radius: 20px;
    border: none;
    background-color: #e3c8d4;
    color: #9f215a;
    margin-top: 15px;
    padding: 5px 15px;
    font-family: 'Poppins';
`

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
                <SearchBar type="text" value={props.keyword} onChange={(e) => setKeyword(e.target.value)}/>
                <div>
                    <SearchBtn type="submit" >Search</SearchBtn>
                </div>
                <p style={{color:"red"}}><em>{keyword && 'Keywords Typed: ' + keyword}</em></p>
            </form>
        </div>
        
    
    )
};

export default Search