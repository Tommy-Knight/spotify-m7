import { Container, Col, Row, Spinner, Alert, Form } from "react-bootstrap"
import { Component } from "react"
import { Link } from "react-router-dom"

class Search extends Component {
	state = {
		songs: {},
		showSpinner: false,
		findError: false,
		searchQuery: "",
	}

	componentDidMount = () => {
		this.fetchResults()
	}

	fetchResults = async () => {
		try {
			this.setState({
				showSpinner: true,
			})

			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
					this.state.searchQuery
			)
			if (response.ok) {
				let jsonData = await response.json()
				let data = jsonData.data
				console.log(data)
				this.setState({ songs: data, findError: false, showSpinner: false })
			} else {
				this.setState({ findError: true, showSpinner: false })
			}
		} catch (error) {
			console.log(`${error} fetch failed`)
			this.setState({ findError: true, showSpinner: false })
		}
	}

	onChangeFunction = (e) => {
		e.preventDefault()
		this.setState({ searchQuery: e.target.value }, () => this.fetchResults())
	}

	render() {
		return (
			<>
				<Container>
					<Form>
						<Form.Group className="mt-3">
							<svg
								className="mr-2 mb-2"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<circle cx="11" cy="11" r="8"></circle>
								<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
							</svg>
							<Form.Control
								style={{ display: "inline-block" }}
								type="text"
								placeholder="Search for Albums, Artists..."
								onChange={(e) => {
									this.onChangeFunction(e)
								}}
							/>
						</Form.Group>
					</Form>
				</Container>

				{this.state.findError && (
					<Alert variant="success">
						Uh Oh! We can't find what you're looking for.{" "}
					</Alert>
				)}

						{this.state.showSpinner && (
							<Spinner
								style={{ marginLeft: "6px" }}
								animation="grow"
								variant="success"
							/>
						)}
				<Container className="m-15 p-5" fluid>
					<h3 className="mt-4 text-white">
						Searching for "{this.state.searchQuery}"
					</h3>
					<Row>

						{this.state.songs.length > 0 ? (
							this.state.songs.map((song) => (
								<div>
									<Col key={song.id} className="my-2">
										<Link to={`/library/${song.id}`}>
											<img
												style={{ marginTop: "20px" }}
												className="iconHover"
												src={song.album.cover}
												alt={song.album.title}
											/>
											<div
												style={{ width: "145px", marginBottom: "50px" }}
												className="text-white albumSearch"
											>
												{song.album.title}
											</div>
										</Link>
									</Col>
									<Col className="my-2">
										<Link to={`/library/${song.id}`}>
											<img
												className="iconHover"
												src={song.artist.picture}
												alt={song.artist.name}
											/>
											<div
												style={{ width: "145px", marginBottom: "142px" }}
												className="text-white albumSearch"
											>
												{song.artist.name}
											</div>
										</Link>
									</Col>
								</div>
							))
						) : (
							<p>Nothing Here!</p>
						)}
					</Row>
				</Container>
			</>
		)
	}
}

export default Search
