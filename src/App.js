import "bootstrap/dist/css/bootstrap.min.css"
import "./css/App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Search from "./components/Search"
import Library from "./components/Library"
import Favourites from "./components/Favourites"

function App() {
  return (
		<div className="App">
			<Router>
				<>
					<Navbar />
					<Switch>
						<Route
							render={(routerProps) => <Home {...routerProps} title="home" />}
							path="/artist/:id"
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
							render={(routerProps) => <Library {...routerProps} title="" />}
							path="/album/:id"
						/>
						<Route
							render={(routerProps) => <Favourites {...routerProps} title="" />}
							path="/library"
						/>
						<Route path="/">
							<h1>Welcome to Tommy&Gregorify</h1>
						</Route>
					</Switch>
				</>
			</Router>
		</div>
	)
}

export default App
