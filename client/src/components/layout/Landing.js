import React, { Fragment, useEffect, useState } from "react";

function Landing() {
	return (
		<Fragment>
			<div className="intro">
				<h2>Welcome to BillSplit!</h2>
				<p>
					Taking all of the hassle of having to talk and figure out
					who is paying for what. <br></br>
					<br></br>Now you can figure it all out with out even having
					to say a word especially to the ones you hate!
				</p>
			</div>

			<div className="total-input">
				<h3>Please Enter the amount of the bill</h3>
				<input type="text" placeholder="Enter total here"></input>
			</div>
		</Fragment>
	);
}

export default Landing;
