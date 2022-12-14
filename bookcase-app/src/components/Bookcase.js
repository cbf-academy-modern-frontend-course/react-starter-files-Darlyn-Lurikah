import Header from './Header';
import BookList from './BookList';
import Book from './Book';
import Search from './Search';
import '../App';
import styled from 'styled-components';

const HeaderCenter = styled.div `
    text-align: center;
`

// import findBook from '../App'

function Bookcase ({books, addBook, findBook, keyword, setKeyword, getValue, favourites, addToFavourites, removeFromFavourites, checkFavourites}) {

    return (
        <div>
            <HeaderCenter>
            <h1>BOOKCASE</h1>
            <Header/>
            <Search getValue={getValue} findBook={findBook} keyword={keyword} setKeyword={setKeyword}/>
            </HeaderCenter>
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
