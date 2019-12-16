// LIBRARIES
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// PAGES
import Landing from "./components/layout/Landing";
import Main from "./components/layout/Main";

// PARTIALS
import Nav from "./components/layout/Navbar";

function App() {
	return (
		<Router>
			<Nav />
			<Fragment>
				<section className="container main">
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route exact path="/main" component={Main} />{" "}
					</Switch>
				</section>
			</Fragment>
		</Router>
	);
}

export default App;
