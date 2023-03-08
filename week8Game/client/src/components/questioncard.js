import { useEffect, useState } from "react";

const QuestionCard = (props) => {
	// randomize multiple choice answers
	const [randomAnswers, setRandomAnswers] = useState([]);
	useEffect(() => {
		if (randomAnswers.length) return;
		const newRandomAnswers = [];

		let answers = [0, 1, 2, 3];
		while (answers.length > 0) {
			const answer = answers.splice(
				Math.floor(Math.random() * answers.length),
				1
			)[0];
			newRandomAnswers.push(answer);
		}
		setRandomAnswers(newRandomAnswers);
	}, []);
	const [selected, setSelected] = useState("");
	const handleClick = (e) => {
		e.preventDefault();
		const newSelected = e.target.value;
		//when changing selected from nothing to something(ALL Are if statements)
		// 		changing from nothing to wrong
		// 		changing from nothing to right
		// when changing from one answer to another
		// 		wrong to right
		// 		right to wrong
		// 		wrong wrong
		// clicking right/wrong answer twice

		setSelected(newSelected);
	};
	return (
		<div className={"question-section"}>
			<div className="question-text">{props.question.question}</div>
			<div className="answer-section">
				{randomAnswers.map((answer) => {
					if (answer === 3) {
						return (
							<button
								onClick={handleClick}
								className="correct"
								value={props.question.correct_answer}
							>
								{props.question.correct_answer}
							</button>
						);
					}
					return (
						<button
							onClick={handleClick}
							value={props.question.incorrect_answers[answer]}
						>
							{props.question.incorrect_answers[answer]}
						</button>
					);
				})}
				{selected ? <p>You selected: {selected}</p> : null}
			</div>
		</div>
	);
};

export default QuestionCard;

// correct answer = props.question.correct_answer
// incorrect answer = props.incorrect_answers[0]
