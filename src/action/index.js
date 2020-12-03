
const bookLoader = (newBook) => {
    return {
        type: 'BOOK_LOADED',
        payload: newBook
    }
}

export {
    bookLoader
}