import React, { Fragment, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";

const Main = ({
	location: {
		state: { total }
	}
}) => {
	console.log(total);
	return (
		<Fragment>
			<div>
				<h2>This is where we redirect</h2>
			</div>
		</Fragment>
	);
};

export default Main;
