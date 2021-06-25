import { initialState } from "../store"

const favReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TO_FAVOURITES":
			console.log("action:", state, initialState)
			//   let newProducts = state.cart.products.concat(action.payload)
			return {
				// the reducer must be a pure function
				// so we always need to remember to not MUTATE our parameter
				// the state we're given must not change
				...state,
				favourites: [
					...state.favourites,
					action.payload,
					// products: state.cart.products.push(action.payload) // SUPER WRONG
					// this will lead to unexpected behavior in your redux store
					// products: state.cart.products.concat(action.payload) // THIS IS VALID
					// jobs: [...state.favourites.jobs, action.payload], // THIS IS VALID
					// do not use: push, splice, sort, reverse
					// instead use: ..., concat, slice, filter, map
					// https://doesitmutate.xyz/
				],
			}

		case "REMOVE_ITEM_FROM_CART":
			// filter
			// slice
			let newProducts = state.cart.products.filter(
				(book, i) => i !== action.payload
			)
			//   let newProducts = [
			//     ...state.cart.products.slice(0, action.payload),
			//     ...state.cart.products.slice(action.payload + 1),
			//   ]

			// *** ATTENTION!! WRONG
			//   let newProducts = state.cart.products.splice(action.payload - 1, 1)
			// *** ATTENTION!! WRONG

			return {
				...state,
				cart: {
					...state.cart,
					products: newProducts,
				},
			}

		case "SET_USERNAME":
			return {
				...state, // carrying over the cart, I don't want to lose it
				user: {
					...state.user,
					firstName: action.payload,
				},
			}

		default:
			return state
	}
}

export default favReducer
