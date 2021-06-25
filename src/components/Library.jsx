import React, { Component } from "react"

export default class Library extends Component {
	state = { id: this.props.match.params.id }

 
	render() {
		return (
			<div>
				<div className="container-fluid m-0 p-0">
					<div className="row mt-5">
						<div className="col-lg-6 col-md-6 album-n">
							<div className="container m-0 p-1">
								<img
									src="./assets/images/album-images/hey-jude.jpg"
									id="img-album-n"
									alt=""
								/>
								<h4>Greatest Hits Collection (First Edition)</h4>
								<p>Beatles</p>
								<button className="btn btn-success btn-n">PLAY</button>
								<p>1970 • 16 SONGS</p>
								<div>
									<span className="fa-stack mb-2" id="toggle">
										<i className="far fa-heart fa-stack-1x" />
										<i className="fas fa-heart fa-stack-1x" />
									</span>
									<span>
										<i className="fa fa-ellipsis-h mb-2" />
									</span>
								</div>
							</div>
						</div>
						<div className="col-lg-5 col-md-5 tracklist-n">
							<div className="track-container">
								<ul className="fa-ul">
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										She Loves You
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										From Me to You{" "}
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										We Can Work It Out{" "}
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										Help!
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										Michelle
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										Yesterday
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										I Feel Fine - Example of Long Text With No Meaning Extra
										Extra
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										Yellow Submarine - Example of Long Text With No Meaning
										Extra Extra
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										Can't Buy Me Love
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										Bad Boy
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										Day Tripper
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										A Hard Day's Night - Example of Long Text With No Meaning
										Extra Extra
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										Ticket To Ride - Example of Long Text With No Meaning
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										Paperback Writer - Example of Long Text With No Meaning
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										Eleanor Rigby
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										I Want to Hold Your Hand - Example of Long Text With No
										Meaning
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										Ticket To Ride
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										Paperback Writer - Example of Long Text With No Meaning
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										Eleanor Rigby
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										I Want to Hold Your Hand - Example of Long Text With No
										Meaning
									</li>
									<li>Beatles</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-music" />
										</span>
										Ticket To Ride
									</li>
									<li>Beatles</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
