import Header from './Header';
import Book from './Book';
import Search from './Search';
import '../App';
import styled from 'styled-components';
import { useState } from 'react';


// import findBook from '../App'

function Bookcase ({books, addBook, findBook, keyword, setKeyword, getValue, favourites, addToFavourites, removeFromFavourites, checkFavourites}) {
    const [filteredBooks, setFilteredBooks] = useState([]);

    function filterBooks(book) {
        console.log(favourites)
        const findFavourites = favourites.filter(x => x.volumeInfo.title.includes(book));
        setFilteredBooks(findFavourites)
        console.log(findFavourites) 
    }

    return (
        <div>
            <div className='headerCenter'>
            <Header/>
            <Search filterBooks={filterBooks} getValue={getValue} findBook={findBook} keyword={keyword} setKeyword={setKeyword}/>
            <h1>MY BOOKCASE</h1>
            </div>
            <div> 
                {favourites.length > 0 ? favourites.map((book) => (
                <Book key={book.id}
                book={book}
                addBook={() => addBook(book.volumeInfo.title)}
                addToFavourites={() => addToFavourites(book)}
                removeFromFavourites={() => removeFromFavourites(book.id)}
                checkFavourites={checkFavourites}/>
                )): <h2 className='emptybookcase'>Your bookcase is empty!</h2>}
            </div>
        </div>
        
    )
}

export default Bookcase;
