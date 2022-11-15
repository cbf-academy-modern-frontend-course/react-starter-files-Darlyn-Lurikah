// import React, { useState } from 'react';
import Book from './components/Book';
// import data from './models/books.json';
import BookList from './components/BookList';


function App() {
  
  const addBook = (title) => {
    console.log(`The Book '${title}' was clicked`)
  };
  
  return (
    <div>
      <BookList book={Book} addBook={addBook}/> 

    </div>
  )
};



export default App;

