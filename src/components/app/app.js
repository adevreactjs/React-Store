import React from 'react'
import '../app/app.css'
import {Route, Switch} from 'react-router-dom'
import {HomePage, CartPage} from '../pages'

const App = () => {
    return (
        <Switch>
            <Route path="/"
            component={HomePage}
            exact> 
            </Route>

            <Route path="/cart"
            component={CartPage}
            exact> CartPage

            </Route>
        </Switch>
    )
}

export default (App)