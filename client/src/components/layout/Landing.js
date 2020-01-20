// LIBRARIES
import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";

// API CONNECTION
import API from "../../utils/API";

const Landing = () => {
	// INITIALIZING STATES
	const [billData, setBillData] = useState({
		amount: ""
	});
	let [redirectState, setRedirectState] = useState({
		redirect: false,
		data: ""
	});

	// DECONSTRUCTION PROPERTIES FROM STATE
	let { amount } = billData;
	let { redirect, data } = redirectState;

	const onInputChange = (e) => {
		// setting state of billData.amount equal to a copy of billData along with the value input in the text box
		setBillData({ ...billData, [e.target.name]: e.target.value });

		// checks to see if the target value of the input box is in the format of US Currency
		let USFormatTest = /^[0-9]+(\.+[0-9]{0,2})?$/.test(e.target.value);

		if (!USFormatTest) setBillData({ ...billData, [e.target.name]: "" });
	};

	const submitTotal = (e) => {
		e.preventDefault();

		let data = {
			total: parseFloat(amount)
		};

		if (!amount) alert("please enter total");
		else {
			API.sendTotal(data)
				.then((res) => {
					// setting redirect state along with data passing into props
					setRedirectState({ redirect: true, data: res.data });
				})
				.catch((err) => console.log(err));
		}
	};
	if (redirect)
		return (
			<Redirect
				to={{
					pathname: "/main",
					state: { total: data }
				}}
			/>
		);
	else {
		return (
			<Fragment>
				<div className="intro">
					<h2>Welcome to BillSplit!</h2>
					<p>
						Taking all of the hassle of having to talk and figure
						out who is paying for what.
						<br />
						Now you can figure it all out with out just based of the
						price of the items that the persone ordered!
						<br />
						Create individual cards for each member of you party and
						see what everyone has to pay.
					</p>
				</div>

				<div className="total-input">
					<h3>Enter the amount of the bill</h3>
					<h6> Please use US Format i.e $2.34</h6>
					<input
						type="number"
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
	}
};

export default Landing;
