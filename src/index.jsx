import './index.scss'
import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import primaryPageReducer from './pages/primary/reducers/primaryPageReducer'

const rootReducer = combineReducers({
    primaryPage: primaryPageReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
