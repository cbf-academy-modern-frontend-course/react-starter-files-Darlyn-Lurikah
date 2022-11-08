import React from 'react';
import PropTypes from 'prop-types';


const Book = ({ book }) => {
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
      <h1>{title}</h1>
      {authors.length > 1 ? <p>{authors.join(" and ")}</p> : <p>{authors}</p>}

      <img src={thumbnail} alt={title} />
      {book ? (
        <p>£{retailPrice && retailPrice.amount}</p>
      ) : (
        <p>No price found</p>
      )}
      <p>{description.substring(0, 200)}...</p>
    </div>
  );
};


Book.propTypes = {
  volumeInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    imageLinks: PropTypes.shape({ thumbnail: PropTypes.string.isRequired }),
  }),
  saleInfo: PropTypes.shape({
    retailPrice: PropTypes.shape({
      amount: PropTypes.number.isRequired,
    }),
  }),
};

Book.defaultProps = {
  saleInfo: {
    amount: "No price provided",
  },
};


export default Book;
