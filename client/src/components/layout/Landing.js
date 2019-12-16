import React, { Fragment, useEffect, useState } from "react";
import API from "../../utils/API";

const Landing = () => {
	const [billData, setBillData] = useState({
		amount: ""
	});

	let { amount } = billData;

	const onInputChange = (e) => {
		setBillData({ ...billData, [e.target.name]: e.target.value });
		// original regex ^[0-9.]*$
		let test = /^[0-9]+(\.+[0-9]{0,2})?$/.test(e.target.value);

		if (!test) {
			setBillData({ ...billData, [e.target.name]: "" });
		}
	};

	const submitTotal = (e) => {
		e.preventDefault();
		console.log(typeof amount);
		let data = {
			total: parseFloat(amount)
		};

		API.sendTotal(data)
			.then()
			.catch();
	};
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
				<input
					type="text"
					placeholder="Enter total here"
					name="amount"
					value={amount}
					required
					onChange={(e) => onInputChange(e)}
				/>
				<button type="submit" onClick={(e) => submitTotal(e)}>
					submit
				</button>
			</div>
		</Fragment>
	);
};

export default Landing;
