// reguire models that we use here
const Bill = require("../models/bill");

module.exports = {
	totalLeft: function(req, res) {
		let body = req.body;
		let displayTotal = body.total;

		res.send({
			display: displayTotal
		});
	}
};
