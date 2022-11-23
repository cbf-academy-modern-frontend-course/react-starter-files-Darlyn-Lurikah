import Header from './Header'
import BookList from './BookList'
import Book from './Book'
import Search from './Search'


function Homepage ({books, addBook}) {

    return (
        <div>
            <Header/>
              <h2>Welcome to the Bookcase App</h2>
            <Search/>
            <BookList>
                {books.map((book) => 
                <Book key={book.id} book={book} addBook={addBook}/>)}
                </BookList>
        </div>
        
    )
}

export default Homepage