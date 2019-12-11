const express = require("express");
const path = require("path");
const app = express();

// Init Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5050;

app.get("/test", (req, res) => {
	res.send({ express: "Express server is up" });
});

// Server static assests in production
if (process.env.NODE_ENV === "production") {
	// Set static folder
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
	});
}

// Run the server
app.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`);
});
