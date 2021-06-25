export const addToFavourites = (favourite) => {
	return {
		type: "ADD_TO_FAVOURITES",
		payload: favourite,
	}
}

export const fetchAll = () => {
	return async (dispatch, getState) => {
		try {
			dispatch({
				type: "SET_LOADING",
				payload: true,
			})
			let resp = await fetch("https://remotive.io/api/remote-jobs?search=")
			console.log("state is", getState())
			if (resp.ok) {
				let jobs = await resp.json()
				dispatch({
					type: "GET_JOBS",
					payload: jobs,
				})
				dispatch({
					type: "SET_LOADING",
					payload: false,
				})
				dispatch({
					type: "SET_ERROR",
					payload: false,
				})
			} else {
				console.log("error")
				dispatch({
					type: "SET_LOADING",
					payload: false,
				})
				dispatch({
					type: "SET_ERROR",
					payload: true,
				})
			}
		} catch (error) {
			console.log(error)
			dispatch({
				type: "SET_LOADING",
				payload: false,
			})
			dispatch({
				type: "SET_ERROR",
				payload: true,
			})
		}
	}
}
// export const addItemToCartAction = (book) => ({
//   type: 'ADD_ITEM_TO_CART',
//   payload: book,
// })

// export const removeItemFromCartAction = (index) => ({
//   type: 'REMOVE_ITEM_FROM_CART',
//   payload: index,
// })

// ({
// })
// is for returning an object out of your arrow function

// export const setUsernameAction = (name) => ({
//   type: 'SET_USERNAME',
//   payload: name,
// })
