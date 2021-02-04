import React, {Component} from 'react'
import { Switch, Route } from "react-router-dom";
import ProductList from './ProductList/ProductList'
import Home from './Home/Home'
import './App.css'


export default function App() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={ProductList} />
            </Switch>
        </>
    )
}
