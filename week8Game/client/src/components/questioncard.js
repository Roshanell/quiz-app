import { useEffect, useState } from "react";

const QuestionCard = (props) => {
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

	return (
		<div className={"question-section"}>
			<div className="question-text">{props.question.question}</div>
			<div className="answer-section">
				{randomAnswers.map((answer) => {
					if (answer === 3) {
						return (
							<button className="correct">
								{props.question.correct_answer}
							</button>
						);
					}
					return <button>{props.question.incorrect_answers[answer]}</button>;
				})}
			</div>
		</div>
	);
};

export default QuestionCard;

// correct answer = props.question.correct_answer
// incorrect answer = props.incorrect_answers[0]
