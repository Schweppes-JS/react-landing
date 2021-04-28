import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools'
import primaryReducer from '../pages/primary/store/reducer'
import secondaryReducer from '../pages/secondary/store/reducer'

const reducers = combineReducers({
  primaryPage: primaryReducer,
  secondaryPage: secondaryReducer
})

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
))