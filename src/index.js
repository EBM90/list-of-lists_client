import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'


const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render( 
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>

, document.querySelector('#root'))