import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledButton = styled.button `
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  background: #f4d7e4;
  box-shadow:  5px 5px 10px #bea8b2,
             -5px -5px 10px #ffffff;
`

const ImgRadius = styled.img `
  border-radius: 15px;
`

const Bookbg = styled.div `
  background-color: #f4d7e4;
  margin: 50px 100px 50px 100px;
  padding: 20px;
  border-radius: 20px;
  background: #f4d7e4;
  box-shadow:  16px 16px 32px #e3c8d4,
              -16px -16px 32px #ffe6f4;f;
`

  

const Book = ({ book, addBook }) => {
  const {
    volumeInfo: {
      title,
      authors,
      description,
      imageLinks: { thumbnail },
    },
    saleInfo: { retailPrice },
  } = book;


  return (
    <div>
      <Bookbg>
      <h1>{title}</h1>
      {authors.length > 1 ? <p>{authors.join(" and ")}</p> : <p>{authors}</p>}
      <ImgRadius src={thumbnail} alt={title} />
      <div>
        <StyledButton onClick={addBook}>Add+</StyledButton>
      </div>
      
      {book ? (
        <p>£{retailPrice && retailPrice.amount}</p>
      ) : (
        <p>No price found</p>
      )}
      <p>{description.substring(0, 200)}...</p>
      </Bookbg>
    </div>
  );

};


Book.propTypes = {
  volumeInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLinks: PropTypes.shape({ thumbnail: PropTypes.string.isRequired }),
  }),
  saleInfo: PropTypes.shape({
    retailPrice: PropTypes.shape({
      amount: PropTypes.string.isRequired,
    }),
  }),
};

Book.defaultProps = {
  saleInfo: {
    retailPrice: {
      amount: "No price provided" 
    },
  },
  volumeInfo: {
    title: "No title provided",
    authors: "No authors provided",
    description: "No description provided",
    imageLinks: {
      thumbnail: "No thumbnail provided"
    },
  },

};


export default Book;
