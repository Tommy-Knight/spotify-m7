// what the initial state of the application will be?

import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import favReducer from "../reducers/favourites"
import jobReducer from "../reducers/jobs"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
	favourites: [],
	jobs: [],
}

const mainReducer = combineReducers({
	favourites: favReducer,
	jobs: jobReducer,
})

const configureStore = () =>
	createStore(
		mainReducer,
		initialState,
		composeEnhancers(applyMiddleware(thunk))
	)

export default configureStore
