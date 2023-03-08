import Header from "./components/header.js";
import UserForm from "./components/user.js";
import Game from "./components/game.js";
import "./App.css";
import { useState } from "react";
import Score from "./components/score.js";

function App() {
	const [user, setUser] = useState("");
	const handleUser = (text) => {
		setUser(text);
	};
	// creating a state for the page to render
	const [score, setScore] = useState(0);
	const [isFinished, setIsFinished] = useState(false);
	const [difficulty, setDifficulty] = useState("easy");
	console.log("hi");
	return (
		<div className="App">
			<Header user={user} />
			{!user ? (
				<UserForm
					grabUser={handleUser}
					difficulty={difficulty}
					setDifficulty={setDifficulty}
				/>
			) : null}
			{user && !isFinished ? (
				<Game
					difficulty={difficulty}
					score={score}
					setScore={setScore}
					setIsFinished={setIsFinished}
				/>
			) : null}

			{/* if score does not equal null then the component will render */}
			{isFinished ? <Score score={score} /> : null}
		</div>
	);
}

export default App;
