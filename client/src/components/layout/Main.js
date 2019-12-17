import React, { Fragment, useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import API from "../../utils/API";

import Card from "./people/PeopleCards";

const Main = ({
	location: {
		state: { total }
	}
}) => {
	let [formData, setFormData] = useState({
		fname: "",
		lNmae: "",
		subTotal: "",
		amount: 0
	});

	let { fname, lNmae, subTotal, amount } = formData;

	return (
		<Fragment>
			<header className="total_display">
				<h1>Total Left: </h1>
				<h2>{total.display}</h2>
			</header>
			<div className="form-wrapper">
				<form>
					<div className="form-group">
						<label htmlFor="fname">First Name</label>
						<input
							type="text"
							id="fname"
							className="form-control"
							placeholder="Billy"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="lname">Last Name</label>
						<input
							type="text"
							id="lname"
							placeholder="Bob"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="amount">Amount To Add</label>
						<input
							type="number"
							id="amount"
							placeholder="0"
							className="form-control"
						/>
					</div>
				</form>
			</div>
			<div className="member_display">
				<Card />
			</div>
		</Fragment>
	);
};

export default Main;