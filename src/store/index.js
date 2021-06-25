import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import favouritesReducer from "../reducers/favourites"
import playlistReducer from "../reducers/playlist"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  favourites: {
    songs: [],
  },
  currentPlaylist: {
    songs: [],
    currentSong: {},
    cover: "",
  },
}

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  currentPlaylist: playlistReducer,
})

const configureStore = () =>
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  )

export default configureStore
