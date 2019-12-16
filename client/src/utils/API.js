import axios from "axios";

export default {
	// test
	sendTotal: function(amount) {
		return axios.post("api/bill/", amount);
	}
};
