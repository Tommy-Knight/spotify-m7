import { initialState } from "../store"

const favouritesReducer = (state = initialState.favourites, action) => {
  switch (action.type) {
    case "ADD_SONG_TO_FAVOURITES":
      return {
        ...state,
        songs: [...state.songs, action.payload],
      }
    case "REMOVE_SONG_FROM_FAVOURITES":
      return {
        ...state,
        songs: state.songs.filter((song) => song.id !== action.payload.id),
      }
    default:
      return state
  }
}

export default favouritesReducer
