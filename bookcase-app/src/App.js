import React, { useState } from 'react';
// import Book from './components/Book';
import Book from './components/Book'
import data from './models/books.json';
import BookList from './components/BookList';



function App() {
  const [books] = useState(data);

  function addBook (title) {
    console.log(`The Book '${title}' was clicked`)
  };
  
  
  return (
    <div>
      <BookList>
            {books.map((book) => 
            <Book key={book.id} book={book} addBook={() => addBook(book.volumeInfo.title)}/>)};
      </BookList>
    </div>
    
  )
};



export default App;

