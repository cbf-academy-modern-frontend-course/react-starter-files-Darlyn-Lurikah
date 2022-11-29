import Header from './Header';
import BookList from './BookList';
import Book from './Book';
import Search from './Search';
import styled from 'styled-components';

const HeaderCenter = styled.div `
    text-align: center;
`


function Homepage ({books, addBook, findBook, keyword, setKeyword, getValue, addToFavourites, removeFromFavourites, checkFavourites}) {

    return (
        <div>
            <HeaderCenter>
            <h1>My e-book app</h1>
            <Header/>
            <Search getValue={getValue} findBook={findBook} keyword={keyword} setKeyword={setKeyword}/>
            </HeaderCenter>
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