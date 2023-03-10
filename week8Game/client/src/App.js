import Header from "./components/header.js";
import UserForm from "./components/user.js";
import Game from "./components/game.js";
import "./App.css";
import { useState } from "react";
import { decode } from "html-entities";
import Score from "./components/Score.js";

// import Score from "./components/Score.js";

function App() {
	const [user, setUser] = useState("");
	const [score, setScore] = useState(0);

	const handleUser = (text) => {
		setUser(text);
	};
	// creating a state for the page to render
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
				<div className="sideBar"></div>
				<div className="gameInformation">
					{!isFinished ? <Header user={user} /> : null}

					{/* <Header user={user} /> */}
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
							setIsFinished={setIsFinished}
							score={score}
							setScore={setScore}
						/>
					) : null}

					{/* {user && !isFinished ? (
						<Game
							difficulty={difficulty}
							setIsFinished={setIsFinished}
							score={score}
							setScore={setScore}
						/>
					) : (
						<Score score={score} />
					)} */}
					{isFinished ? <Score score={score} /> : null}
				</div>
			</div>
		</div>
	);
}

export default App;
