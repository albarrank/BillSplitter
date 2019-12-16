import axios from "axios";

export default {
	// sends total amount from bill to server
	sendTotal: function(amount) {
		return axios.post("api/bill/", amount);
	}
};
