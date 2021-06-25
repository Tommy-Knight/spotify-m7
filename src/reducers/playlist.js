import { initialState } from "../store"

const playlistReducer = (state = initialState.currentPlaylist, action) => {
  switch (action.type) {
    case "GET_SONGS":
      return {
        ...state,
        songs: action.payload,
      }

    default:
      return state
  }
}

export default playlistReducer
