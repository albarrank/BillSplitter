import React, { Fragment, useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import API from "../../utils/API";

import Card from "./people/PeopleCards";
import Landing from "./Landing";

const Main = ({
	location: {
		state: { total }
	}
}) => {
	// INITIALIZING STATES
	let [formData, setFormData] = useState({
		fname: "",
		lname: "",
		subTotal: 0,
		amount: ""
	});

	let [cardData, setCardData] = useState({
		payees: []
	});

	let [billData, setBillData] = useState({
		bill: total.display
	});

	// DECONSTRUCTION PROPERTIES FROM STATE
	let { fname, lname, subTotal, amount } = formData;
	let { payees } = cardData;
	let { bill } = billData;

	const onInputChange = (e) => {
		if (e.target.name === "amount") {
			let USFormatTest = /^[0-9]+(\.+[0-9]{0,2})?$/.test(e.target.value);

			if (!USFormatTest)
				setFormData({ ...formData, [e.target.name]: "" });
			else setFormData({ ...formData, [e.target.name]: e.target.value });
		} else setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Handles subtotal
	const changeSubTotal = (e) => {
		e.preventDefault();
		if (amount === "") return alert("Please enter item amount!");

		let newSubTotal = parseFloat(subTotal);
		newSubTotal += parseFloat(amount);

		let check = checkSubTotal(total, newSubTotal);

		if (check) {
			setFormData({
				...formData,
				subTotal: newSubTotal.toFixed(2),
				amount: ""
			});
		} else alert("SubTotal is over Total Amount");
	};

	const checkSubTotal = (total, subTotal) => {
		return total.display > subTotal;
	};

	// Handles creating payees
	const createPayee = () => {
		let payee = {
			title:
				fname.slice(0, 1).toLocaleUpperCase() +
				lname.slice(0, 1).toLocaleUpperCase(),
			amount: subTotal,
			percentage: `${calulatePercent()}%`,
			tip: `$${caculateTip()}`
		};

		setCardData({ ...cardData, payees: [...payees, payee] });

		changeBillTotal();
		resetForm();
	};

	const calulatePercent = () => {
		return Math.floor((parseFloat(subTotal) / total.display) * 100);
	};

	const caculateTip = () => {
		return (parseFloat(subTotal) * 0.15).toFixed(2);
	};

	const resetForm = () => {
		setFormData({
			...formData,
			subTotal: 0,
			amount: "",
			fname: "",
			lname: ""
		});
	};

	const changeBillTotal = () => {
		let newBill = parseFloat(bill) - parseFloat(subTotal);
		newBill = newBill.toFixed(2);
		setBillData({ ...billData, bill: newBill });
	};

	return (
		<Fragment>
			<header className="total_display">
				<h1>Total Left: </h1>
				<h2>${bill}</h2>
			</header>

			<div className="form_wrapper">
				<h2>SubTotal: ${subTotal}</h2>
				<form>
					<div className="form-group">
						<label htmlFor="fname">First Name</label>
						<input
							required
							type="text"
							id="fname"
							name="fname"
							value={fname}
							onChange={(e) => onInputChange(e)}
							className="form-control"
							placeholder="Billy"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="lname">Last Name</label>
						<input
							required
							type="text"
							id="lname"
							name="lname"
							value={lname}
							onChange={(e) => onInputChange(e)}
							placeholder="Bob"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="amount">Amount To Add</label>
						<input
							required
							type="text"
							id="amount"
							name="amount"
							value={amount}
							required
							onChange={(e) => onInputChange(e)}
							placeholder="0"
							className="form-control"
						/>
						<button
							className="btn btn-dark btn-lg btn-block"
							onClick={(e) => changeSubTotal(e)}
						>
							Add to total
						</button>
					</div>
				</form>

				<button
					className="create-card btn btn-dark btn-lg"
					onClick={(e) => createPayee(e)}
				>
					Add person
				</button>
			</div>

			<div className="member-display">
				{payees.map((value, index) => {
					return <Card key={index} payee={value} />;
				})}
			</div>
		</Fragment>
	);
};

export default Main;
