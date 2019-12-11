import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Pages
import Landing from "./components/layout/Landing";

// Partials
import Nav from "./components/layout/Navbar";

function App() {
	return (
		<Router>
			<Nav />
			<Fragment>
				<section className="container main">
					<Switch>
						<Route exact path="/" component={Landing} />
					</Switch>
				</section>
			</Fragment>
		</Router>
	);
}

export default App;
