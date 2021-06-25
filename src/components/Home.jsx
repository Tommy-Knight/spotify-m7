import React, { Component } from "react"
import { Link } from "react-router-dom"


export default class Home extends Component {
	state = {
		loading: false,
		id: this.props.match.params.id,
		artist: {},
		data: [],
		next5: []
	}

	fetchArtist = async () => {
		try {
			this.setState({ loading: true })
			const resp = await fetch(
				`https://striveschool-api.herokuapp.com/api/deezer/artist/${this.props.match.params.id}`
			)
			const artist = await resp.json()
			this.setState({ loading: false })
			this.setState({ artist })
			console.log(`fetch returns artist`, this.state.artist)
		} catch (error) {
			console.log(error)
		}
	}
	fetchAll = async () => {
		try {
			this.setState({ loading: true })
			const resp = await fetch(
				`https://striveschool-api.herokuapp.com/api/deezer/artist/${this.props.match.params.id}/top?limit=50`
			)
			const data = await resp.json()
			console.log(data, "dataaa")
			this.setState({ loading: false })
			this.setState({ data: data.data })
			console.log(`fetch returns data`, this.state.data)
		} catch (error) {
			console.log(error)
		}
	}
	fetchMore = async () => {
		try {
			this.setState({ loading: true })
			const resp = await fetch(
				`https://api.deezer.com/artist/${this.props.match.params.id}/top?index=5`
			)
			const data = await resp.json()
			console.log("fethed")
			this.setState({ loading: false })
			this.setState({ next5: data.data })
			console.log(`fetch returns next 5`, this.state.next5)
		} catch (error) {
			console.log(error)
		}
	}
	componentDidMount = () => {
		this.fetchArtist()
		this.fetchAll()
		this.fetchMore()
	}
	75798
	render() {
		return (
			<div style={{ marginBottom: "500px" }}>
				<div
					className="jumbotron jumbotron-fluid"
					style={{
						backgroundImage: `url(${this.state.artist.picture_xl})`,
					}}
				>
					<div className="container">
						<div className="monthlyListen">
							{this.state.artist.nb_fan} MONTHLY LISTENERS
						</div>
						<h1 className="display-4">{this.state.artist.name}</h1>
						<button href="albumpage.html" className="btn btn-success playBtn">
							Play
						</button>
						<button className="btn followBtn">Follow</button>
						<span>
							<i className="fa fa-ellipsis-h mb-2 text-white" />
						</span>
						<br />
						<div className="col-md-2 col-sm-4 animatelinks d-inline">
							<button
								href="albumpage.html"
								className="btn px-0 home-nav-btns activateButton shadow-none"
							>
								Overview
							</button>
						</div>
						<div className="col-md-2 col-sm-4 animatelinks d-inline">
							<button
								href="albumpage.html"
								className="btn px-0 home-nav-btns activateButton shadow-none"
							>
								Related Artist
							</button>
						</div>
						<div className="col-md-2 col-sm-4 animatelinks d-inline">
							<button
								href="albumpage.html"
								className="btn px-0 home-nav-btns activateButton shadow-none"
							>
								About
							</button>
						</div>
					</div>
				</div>
				{/* END OF JUMBOTRON */}
				<div className="container">
					<div>
						<h2 style={{ marginBottom: 0 }}>#Albums</h2>
						<span id="collectionInfo" style={{ color: "grey" }}>
							The best of {this.state.artist.name}
						</span>
					</div>
					<div className="row mt-4 mb-1 no-gutters">
						{this.state.data.map((track) => {
							return (
								<div className="col-12 col-sm-6 col-md-4 col-lg-2 px-2" key={track.id}>
									<div className="tile-card">
										<Link to={`/album/${track.album.id}`}>
											<img
												src={track.album.cover}
												className="img-fluid rounded"
												alt=""
											/>
										</Link>
										<div className="tile-title">{track.album.title}</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
				{/* END OF ALBUMS */}
				{/* <div className="container">
					<div>
						<h2 style={{ marginBottom: 0 }}>#Singles</h2>
						<span id="collectionInfo" style={{ color: "grey" }}>
							{this.state.artist.name} best tracks
						</span>
					</div>
					<div className="row mt-4 mb-1 no-gutters">
						<div className="col-12 col-sm-6 col-md-4 col-lg-2 px-2">
							<div className="tile-card">
								<a href="albumpage.html">
									<img
										src="https://source.unsplash.com/random/248x251"
										className="img-fluid rounded"
										alt=""
									/>
								</a>
								<div className="tile-title">Here Comes The Sun</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-md-4 col-lg-2 px-2">
							<div className="tile-card">
								<a href="albumpage.html">
									<img
										src="https://source.unsplash.com/random/252x250"
										className="img-fluid rounded"
										alt=""
									/>
								</a>
								<div className="tile-title">Come Together</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-md-4 col-lg-2 px-2">
							<div className="tile-card">
								<a href="albumpage.html">
									<img
										src="https://source.unsplash.com/random/250x248"
										className="img-fluid rounded"
										alt=""
									/>
								</a>
								<div className="tile-title">Let It Be</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-md-4 col-lg-2 px-2">
							<div className="tile-card">
								<a href="albumpage.html">
									<img
										src="https://source.unsplash.com/random/248x250"
										className="img-fluid rounded"
										alt=""
									/>
								</a>
								<div className="tile-title">Yesterday</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-md-4 col-lg-2 px-2">
							<div className="tile-card">
								<a href="albumpage.html">
									<img
										src="https://source.unsplash.com/random/251x251"
										className="img-fluid rounded"
										alt=""
									/>
								</a>
								<div className="tile-title">Hey Jude</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-md-4 col-lg-2 px-2">
							<div className="tile-card">
								<a href="albumpage.html">
									<img
										src="https://source.unsplash.com/random/251x248"
										className="img-fluid rounded"
										alt=""
									/>
								</a>
								<div className="tile-title">Never Gonna Give You Up</div>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		)
	}
}
