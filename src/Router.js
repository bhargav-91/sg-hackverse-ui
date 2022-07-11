import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

let appRoute = [
    <Route key={0} exact path='/' element={<Home />}/>,
]
export default appRoute;