const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes");

// Init Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connecting to port number
const PORT = process.env.PORT || 5000;

// Server static assests in production
if (process.env.NODE_ENV === "production") {
	// Set static folder
	app.use(express.static("client/build"));

	// app.get("*", (req, res) => {
	// 	res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
	// });
}

// Adding api routes
app.use(routes);

// Run the server
app.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`);
});
