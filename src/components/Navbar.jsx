import React, { Component } from "react"
import Link from "react-router-dom/Link"
import logo from "../css/spotify-sidebar-logo.png" 
import nowPlaying from "../css/The-Beatles-Help-1.jpg"

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<div className="sidenav ">
					<div>
						<a href="https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2">
							<img
								alt=""
								src={logo}
								className="sidebar-logo"
							/>
						</a>
						<Link to="/home" className="greenborder homeGreen">
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
								<path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
								<path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
							</svg>
							Home
						</Link>

						<Link to="/search" className="greenborder searchGreen">
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
							Search
						</Link>
						<Link to="/library" className="greenborder libraryGreen">
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
								<path d="M12 20v-6M6 20V10M18 20V4" />
							</svg>
							Your Library
						</Link>
					</div>
					<div className="navFoot">
						<a
							href="/"
							type="button"
							className="btn btn-secondary loginBtn text-dark"
						>
							Sign Up
						</a>
						<a
							type="button"
							href="index.html"
							className="btn btn-dark loginBtn"
						>
							Login
						</a>
						<a href="/" className="cookies p-0">
							Cookies | Privacy
						</a>
					</div>
				</div>
				{/*  Bottom controls */}
				<div className="footer fixed-bottom">
					{/* MEDIA VIEW MINI NAV */}
					<div className="smallnav">
						<hr />
						<div className="smallnavicon">
							<Link to="/home" className=" mininav">
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
									<path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
									<path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
								</svg>
								Home
							</Link>
						</div>
						<div className="smallnavicon">
							<Link to="/search" className=" mininav">
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
								Search
							</Link>
						</div>
						<div className="smallnavicon">
							<Link to="/library" className=" mininav">
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
									<path d="M12 20v-6M6 20V10M18 20V4" />
								</svg>
								Your Library
							</Link>
						</div>
					</div>
					{/* END OF MINI NAV */}
					<div className="row">
						<div className="col-2 col-md-2 bottomLeft">
							<a href="albumpage.html">
								<img
									src={nowPlaying}
									className="currentalbumart"
									alt="Album"
									style={{ marginRight: 5 }}
								/>
							</a>
							<div className="d-inline p-1 songartist">
								<h6 className="text-white">Help!</h6>
								Beatles
							</div>
							<svg
								className=" ml-3 iconHover"
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
							</svg>
						</div>
						<div className="col-9 col-md-9">
							<div className="bottomMiddle">
								<div
									alt="Play Button"
									onmouseover="rick.play()"
									className="playbutton iconHover text-white"
								>
									<svg
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
										<polygon points="11 19 2 12 11 5 11 19"></polygon>
										<polygon points="22 19 13 12 22 5 22 19"></polygon>
									</svg>
								</div>
								<div
									alt="Play Button"
									onmouseover="rick.play()"
									className="playbutton text-white iconHover mt-0 mx-2"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="38"
										height="38"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<circle cx="12" cy="12" r="10"></circle>
										<polygon points="10 8 16 12 10 16 10 8"></polygon>
									</svg>
								</div>
								<div
									alt="Play Button"
									onmouseover="rick.play()"
									className="playbutton iconHover text-white"
								>
									<svg
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
										<polygon points="13 19 22 12 13 5 13 19"></polygon>
										<polygon points="2 19 11 12 2 5 2 19"></polygon>
									</svg>
								</div>
								<br />
							</div>
							<div className="row bottomMiddle">
								<div
									className="col-1 songtime py-1 "
									style={{ textAlign: "right" }}
								>
									00:00
								</div>
								<div className="col-8">
									<div className="progress mx-0" style={{ height: 5 }}>
										<div
											className="progress-bar bg-success mx-0"
											role="progressbar"
											aria-valuenow={25}
											aria-valuemin={0}
											aria-valuemax={100}
										>
											<p>FILL UP tHE BAR</p>
										</div>
									</div>
								</div>
								<div className="col-1 p-0 py-1 songtime">4:20</div>
							</div>
						</div>
						<div className="col-1 bottomRight">
							<div className="">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<line x1="8" y1="6" x2="21" y2="6"></line>
									<line x1="8" y1="12" x2="21" y2="12"></line>
									<line x1="8" y1="18" x2="21" y2="18"></line>
									<line x1="3" y1="6" x2="3.01" y2="6"></line>
									<line x1="3" y1="12" x2="3.01" y2="12"></line>
									<line x1="3" y1="18" x2="3.01" y2="18"></line>
								</svg>
							</div>
							<div className="mx-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
									<circle cx="12" cy="14" r="4"></circle>
									<line x1="12" y1="6" x2="12.01" y2="6"></line>
								</svg>
							</div>
							<div className="mr-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
									<path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
								</svg>
							</div>
							<input
								type="range"
								className="form-control-range slidernav d-md-block"
								style={{ width: 100 }}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
