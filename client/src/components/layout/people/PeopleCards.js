import React, { Fragment } from "react";

const PeopleCard = ({ payee }) => {
	console.log(payee);
	return (
		<Fragment>
			<div className="card-display">
				<h1>Name: {payee.title}</h1>
				<h2>Amount: ${payee.amount}</h2>
				<h5>Percent Paid: {payee.percentage}</h5>
				<h5>Tip: {payee.tip}</h5>
			</div>
		</Fragment>
	);
};

export default PeopleCard;
