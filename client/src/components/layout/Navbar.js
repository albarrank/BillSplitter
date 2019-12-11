import React from "react";

function Navbar() {
	let styles = {
		fontSize: "3rem",
		marginLeft: "3rem"
	};
	return (
		<nav className="navbar navbar-light bg-light fixed-top d-flex">
			<span style={styles}>
				<i className="fas fa-money-check-alt"> BillSplit</i>
			</span>
		</nav>
	);
}

export default Navbar;
