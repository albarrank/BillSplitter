// LIBRARIES
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import Card from "./people/PeopleCards";

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

	// Handles Subtotal
	const changeSubTotal = (e) => {
		e.preventDefault();

		if (amount === "") return alert("Please enter item amount!");

		let newSubTotal = parseFloat(subTotal);
		newSubTotal += parseFloat(amount);

		let bigger = checkSubTotal(bill, newSubTotal);

		if (!bigger) {
			setFormData({
				...formData,
				subTotal: newSubTotal.toFixed(2),
				amount: ""
			});
		} else alert("SubTotal is over Total Amount");
	};

	const checkSubTotal = (total, subTotal) => {
		return subTotal > parseFloat(total);
	};

	// Handles creating payees
	const createPayee = () => {
		if (fname === "" || lname === "") return alert("Please fill out names");
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
			<Link to="/">
				<i className="fas fa-arrow-circle-left"></i>
			</Link>

			<br />
			<h4>Directions:</h4>
			<h6>
				Add each individual price of item you want to pay and hit add
				until desired subTotal.
				<br /> <br />
				When your done press add person to create the member of your
				group and see how much each person has to pay.
			</h6>

			<header className="total-display">
				<h1>Total Left: </h1>
				<h2>${bill}</h2>
			</header>

			<div className="form-wrapper">
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
						<br />
						<label htmlFor="amount">
							Please use US Format i.e $2.34
						</label>
						<input
							required
							type="number"
							id="amount"
							name="amount"
							value={amount}
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

			<div className="payee-display">
				{payees.map((value, index) => {
					return <Card key={index} payee={value} />;
				})}
			</div>
		</Fragment>
	);
};

export default Main;
