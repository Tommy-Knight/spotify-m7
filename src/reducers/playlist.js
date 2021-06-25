import { initialState } from "../store"

const playlistReducer = (state = initialState.currentPlaylist, action) => {
  const currSongIndex = state.songs
    .map((s) => s.id)
    .indexOf(state.currentSong.id)
  switch (action.type) {
    case "SET_PLAYLIST":
      return {
        ...state,
        currentSong: action.payload.currentSong,
        songs: action.payload.songs,
        cover: action.payload.cover,
      }

    case "NEXT_SONG":
      if (currSongIndex + 1 <= state.songs.length - 1) {
        return {
          ...state,
          currentSong: state.songs[currSongIndex + 1],
        }
      } else {
        return {
          ...state,
        }
      }

    case "PREV_SONG":
      if (currSongIndex - 1 >= 0) {
        return {
          ...state,
          currentSong: state.songs[currSongIndex - 1],
        }
      } else {
        return {
          ...state,
        }
      }

    default:
      return state
  }
}

export default playlistReducer
