export const addSongToFavourites = (song) => ({
  type: "ADD_SONG_TO_FAVOURITES",
  payload: song,
})

export const removeSongFromFavourites = (song) => ({
  type: "REMOVE_SONG_FROM_FAVOURITES",
  payload: song,
})

export const getPlaylistAction = (song, album, cover) => ({
  type: "SET_PLAYLIST",
  payload: {
    currentSong: song,
    songs: album,
    cover: cover,
  },
})

export const nextSongAction = () => ({
  type: "NEXT_SONG",
})

export const prevSongAction = () => ({
  type: "PREV_SONG",
})

// export const getPlaylistAction = (song) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: "SET_LOADING",
//         payload: true,
//       })
//       let response = await fetch(
//         `https://remotive.io/api/remote-jobs?search=${query}`
//       )
//       if (response.ok) {
//         let jobs = await response.json()
//         //  this.setState({ jobs: jobs.jobs })
//         dispatch({
//           type: "GET_JOBS",
//           payload: jobs.jobs,
//         })
//         dispatch({
//           type: "SET_LOADING",
//           payload: false,
//         })
//       }
//     } catch (error) {
//       console.log(error)
//       dispatch({
//         type: "SET_LOADING",
//         payload: false,
//       })
//     }
//   }
// }
