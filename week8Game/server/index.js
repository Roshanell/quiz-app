import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fetch from "node-fetch";

// For testing my API I saving one response in a .js file
// import fakedata from "./fakedata.js";

const app = express();
const PORT = 5000;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
	res.json("Hello Techtonica Server for a Game");
});

// Make the GET request for the GAME Api for grabbing all the questions

// //hardcode the game response for testing reasons to don't saturate my API call.
app.get("/api/game", async (req, res) => {
	const url = `https://opentdb.com/api.php?amount=10&category=20&difficulty=${req.query.difficulty}&type=multiple`;

	// 	// takes result and turn it to js
	try {
		const apiRequest = await fetch(url);
		const questions = await apiRequest.json();
		console.log(questions);
		res.send(questions);
	} catch (err) {
		console.log(err);
	}
});

app.listen(PORT, () =>
	console.log(`Hola! Server running on Port http://localhost:${PORT}`)
);
