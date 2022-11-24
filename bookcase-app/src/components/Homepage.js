import Header from './Header';
import BookList from './BookList';
import Book from './Book';
import Search from './Search';

// import findBook from '../App'

function Homepage ({books, addBook, findBook, keyword, setKeyword, getValue}) {

    return (
        <div>
            <Header/>
              <h2>Welcome to the Bookcase App</h2>
            <Search getValue={getValue} findBook={findBook} keyword={keyword} setKeyword={setKeyword}/>
            <BookList>
                {books.map((book) => 
                <Book key={book.id}
                book={book}
                addBook={() => addBook(book.volumeInfo.title)}/>)}
            </BookList>
        </div>
        
    )
}

export default Homepage