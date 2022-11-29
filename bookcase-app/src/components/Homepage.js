import Header from './Header';
import BookList from './BookList';
import Book from './Book';
import Search from './Search';

// import findBook from '../App'

function Homepage ({books, addBook, findBook, keyword, setKeyword, getValue, addToFavourites, removeFromFavourites, checkFavourites}) {

    return (
        <div>
            <Header/>
            <Search getValue={getValue} findBook={findBook} keyword={keyword} setKeyword={setKeyword}/>
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