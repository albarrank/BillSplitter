import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Pages
import Landing from "./components/layout/Landing";
function App() {
	return (
		<Router>
			<Fragment>
				<Switch>
					<Route exact path="/" component={Landing} />
				</Switch>
			</Fragment>
		</Router>
	);
}

export default App;
