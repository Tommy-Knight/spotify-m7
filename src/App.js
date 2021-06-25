import "bootstrap/dist/css/bootstrap.min.css"
import "./css/App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Search from "./components/Search"
import Library from "./components/Library"

function App() {
	return (
		<div className="App">
			<Router>
				<>
					<Navbar />
					<Switch>
						<Route
							render={(routerProps) => (
								<Home {...routerProps} title="home" />
							)}
							path="/home"
							exact
						/>
						<Route
							render={(routerProps) => (
								<Search {...routerProps} title="Show Details" />
							)}
							path="/search"
							exact
						/>
						<Route
							render={(routerProps) => (
								<Library {...routerProps} title="" />
							)}
							path="/library"
							
						/>

						<Route path="/">
							<h1>Welcome to Tommyify</h1>
						</Route>
					</Switch>
				</>
			</Router>
		</div>
	)
}

export default App
