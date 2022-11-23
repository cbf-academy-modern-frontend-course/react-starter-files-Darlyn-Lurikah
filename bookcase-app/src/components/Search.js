import React from "react";

const Search = (props) => {
    return (
        <form>
            <label>Search</label>
            <input type="text" id="query" name="query"/>
            <input type="submit" value="submit"/>
        </form>
    )
}

export default Search