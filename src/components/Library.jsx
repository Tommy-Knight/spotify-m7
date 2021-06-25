import React, { Component } from "react"

export default class Library extends Component {
	state = { id: this.props.match.params.id }

 
	render() {
		return (
<p>THIS IS THE album page now</p>
		)
	}
}
