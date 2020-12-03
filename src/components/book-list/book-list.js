import React, { Component } from 'react'
import BookListItem from '../book-list'
import './book-list.css'

class BookList extends Component {

    render() {
        const { books, id } = this.props 
        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={id}>
                                <BookListItem book={book}>
                                </BookListItem>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default BookList
