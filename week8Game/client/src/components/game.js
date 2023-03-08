import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = (props) => {
	const [questions, setQuestions] = useState([]);

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
			<div className="question-count">
				<span>Question 1</span>/{questions.length}
			</div>
			{questions.map((question, index) => {
				return (
					<QuestionCard
						key={index}
						question={question}
						score={props.score}
						setScore={props.setScore}
					/>
				);
			})}
			<button
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
