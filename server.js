const express = require("express");
const app = express();
const port = process.env.PORT || 5050;
app.get("/test", (req, res) => {
	res.send({ express: "Express server is up" });
});
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
