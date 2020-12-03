import React, { Fragment } from 'react';
import './book-list-item.css';

const BookListItem = ({ book }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="bool-list-item">
        <div className="book-cover"> 
            <img src={coverImage} alt="cover"></img>
            <div className ="book-detail">
                <a href="#" className="book-title">{title}</a>
                <a href="#" className="book-author">{author}</a>
                <a href="#" className="book-price">{price}</a>
                <button className="btn btn-info add-to-cart"> Add to card</button>
            </div>
        </div>
    </div>
  );
};

export default BookListItem;
