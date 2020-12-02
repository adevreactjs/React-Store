import React from 'react'
import {BookstoreServiceConsumer} from '../bookstore-service-context/bookstore-service-context'

const withBookstoreService = () => (Wrapped) => {
     return (props) => {
         return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        <Wrapped {...props} bookstoreService ={bookstoreService}></Wrapped>
                    }
                }
            </BookstoreServiceConsumer> 
            )
        }
}
export default withBookstoreService