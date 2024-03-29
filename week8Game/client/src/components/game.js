import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";
import Timer from "./Timer";

const Game = (props) => {
	const [questions, setQuestions] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	// const [score, setScore] = useState(0);

	const loadData = () => {
		const queryParams = new URLSearchParams({ difficulty: props.difficulty });
		fetch("http://localhost:5000/api/game?" + queryParams)
			.then((response) => response.json())
			.then((data) => {
				console.log("This is line 11", data.results);
				setQuestions(data.results);
			});
	};

	useEffect(() => {
		loadData();
	}, []);
	return (
		<div className="Container">
			<Timer />
			<div className="question-count">
				<span>{currentQuestion + 1}</span>/{questions.length}
			</div>
			{/* mapping over individual questions */}
			{questions.map((question, index) => {
				return (
					<QuestionCard
						key={index}
						//each individual question being mapped over
						question={question}
						score={props.score}
						setScore={props.setScore}
					/>
				);
			})}
			<button
				className="submitButton"
				onClick={(e) => {
					e.preventDefault();
					props.setIsFinished(true);
				}}
			>
				submit
			</button>
		</div>
	);
};

export default Game;
