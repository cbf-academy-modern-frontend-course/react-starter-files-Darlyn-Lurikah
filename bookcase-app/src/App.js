import React, { useState } from 'react';
import data from './models/books.json';
import BookList from './components/BookList';
import { BrowserRouter ,Routes, Route, } from 'react-router-dom';
// import Header from './components/Header';
import Homepage from './components/Homepage';
import About from './pages/About';
import Search from './components/Search';


function App() {
  const [books, setBooks] = useState(data);

  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (title) => {
    const oldFavourites = [...favourites];

    const newFavourites = oldFavourites.concat(title);

    setFavourites(newFavourites);

    console.log(newFavourites);
  }

  // const removeFromFavourites = (id) => {
  //   const oldFavourites = [...favourites];

  //   const newFavourites = oldFavourites.filter({books} => books.id !== id);

  //   setFavourites(newFavourites);
  // }

  function addBook (title) {
    console.log(`The Book '${title}' was clicked`)
  };
  
  

  async function findBook(value) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;
    
    console.log(url)
    // const results = fetch(url).then(res => res.json());
    const results = await fetch(url)
    console.log(results)
    if (!results.error) {
      let jsonResponse = await results.json();
      setBooks(jsonResponse.items);
      
    }

    
  };


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage addToFavourites={addToFavourites} books={books} setBooks={setBooks} addBook={addBook} getValue={findBook}/>} />
          <Route path="/search" element={<Search/>}/>
          <Route path="/bookcase" element={<BookList/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
    
  )
};

export default App;

