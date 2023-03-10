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
	const [startTime] = useState(new Date());
	const [time, setTimer] = useState(60);
	setInterval(() => {
		setTimer(60 - (new Date().getUTCSeconds() - startTime.getUTCSeconds()));
	}, 1000);
	//const [instructions, setInstructions] = useState("");
	return (
		<div className="App">
			<div className="game">
				<div className="sideBar">
					<image src="client/src/assets" />
				</div>
				<div className="gameInformation">
					<Header user={user} />
					{!user ? (
						<UserForm
							// instructions={instructions}
							// setInstructions={setInstructions}
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
			</div>
		</div>
	);
}

export default App;
