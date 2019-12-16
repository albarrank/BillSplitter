// reguire models that we use here
const Bill = require("../models/bill");

module.exports = {
	totalLeft: function(req, res) {
		let body = req.body;

		console.log(typeof body.total);
	}
};
