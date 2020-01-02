import React, { Fragment, useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";

const PeopleCard = ({ payee }) => {
	console.log(payee);
	return (
		<Fragment>
			<div className="card-display">
				<h1>{payee.title}</h1>
			</div>
		</Fragment>
	);
};

export default PeopleCard;
