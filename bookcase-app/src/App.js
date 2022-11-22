import React, { useState } from 'react';
// import Book from './components/Book';
// import Book from './components/Book';
import data from './models/books.json';
import BookList from './components/BookList';
import { BrowserRouter ,Routes, Route, } from 'react-router-dom';
// import Header from './components/Header';
import Homepage from './components/Homepage';
import About from './pages/About';


function App() {
  const [books] = useState(data);

  function addBook (title) {
    console.log(`The Book '${title}' was clicked`)
  };
  
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage books={books} addBook={addBook}/>} />
          <Route path="/bookcase" element={<BookList/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
    
  )
};



export default App;

