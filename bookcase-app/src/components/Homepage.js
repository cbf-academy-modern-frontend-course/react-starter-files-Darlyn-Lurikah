import Header from './Header';
import BookList from './BookList';
import Book from './Book';
import Search from './Search';
import styled from 'styled-components';
import '../App.css';





function Homepage ({books, addBook, findBook, keyword, setKeyword, getValue, addToFavourites, removeFromFavourites, checkFavourites}) {

    return (
        <div>
            <div className='headerCenter'>
            <Header/>
            <Search getValue={getValue} findBook={findBook} keyword={keyword} setKeyword={setKeyword}/>
            </div>
            <BookList>
                {books.map((book) => 
                <Book key={book.id}
                book={book}
                addBook={() => addBook(book.volumeInfo.title)}
                addToFavourites={() => addToFavourites(book)}
                removeFromFavourites={() => removeFromFavourites(book.id)}
                checkFavourites={checkFavourites}/>)}
            </BookList>
        </div>
        
    )
}

export default Homepage