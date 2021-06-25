import React, { Component } from "react"

export default class Home extends Component {
	render() {
		return (
			<div style={{marginBottom:"500px"}}>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<div className="monthlyListen">33,000,575 MONTHLY LISTENERS</div>
						<h1 className="display-4">The Beatles</h1>
						<button
							href="albumpage.html"
							className="btn btn-success playBtn"
							onmouseover="rick.play()"
						>
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
							The best of The Beatles
						</span>
					</div>
					<div className="row mt-4 mb-1 no-gutters">
						<div className="col-12 col-sm-6 col-md-4 col-lg-2 px-2">
							<div className="tile-card">
								<a href="albumpage.html">
									{" "}
									<img
										src="assets/images/icons/the-beatles-the-white-album.png"
										className="img-fluid rounded"
										alt=""
									/>
								</a>
								<div className="tile-title">The White Album</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-md-4 col-lg-2 px-2">
							<div className="tile-card">
								<a href="albumpage.html">
									<img
										src="assets/images/icons/The-Beatles-Sgt.-Peppers-Lonely-Hearts-Club-Band.jpg"
										className="img-fluid rounded"
										alt=""
									/>
								</a>
								<div className="tile-title">
									Sgt. Peppers Lonely Hearts Club
								</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-md-4 col-lg-2 px-2">
							<div className="tile-card">
								<a href="albumpage.html">
									<img
										src="assets/images/icons/the-beatles-revolver.jpg"
										className="img-fluid rounded"
										alt=""
									/>
								</a>
								<div className="tile-title">Revolver</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-md-4 col-lg-2 px-2">
							<div className="tile-card">
								<a href="albumpage.html">
									<img
										src="assets/images/icons/The-Beatles-Help-1.jpg"
										className="img-fluid rounded"
										alt=""
									/>
								</a>
								<div className="tile-title">Help</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-md-4 col-lg-2 px-2">
							<div className="tile-card">
								<a href="albumpage.html">
									<img
										src="assets/images/icons/The-Beatles-Abbey-Road.jpg"
										className="img-fluid rounded"
										alt=""
									/>
								</a>
								<div className="tile-title">Abbey Road</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-md-4 col-lg-2 px-2">
							<div className="tile-card">
								<a href="albumpage.html">
									{" "}
									<img
										src="assets/images/icons/rubber-soul.png"
										className="img-fluid rounded"
										alt=""
									/>
								</a>
								<div className="tile-title">Rubber Soul</div>
							</div>
						</div>
					</div>
				</div>
				{/* END OF ALBUMS */}
				<div className="container">
					<div>
						<h2 style={{ marginBottom: 0 }}>#Singles</h2>
						<span id="collectionInfo" style={{ color: "grey" }}>
							The Beatles's best tracks
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
				</div>
			</div>
		)
	}
}
