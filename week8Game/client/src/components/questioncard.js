import { useEffect, useState } from "react";
import { decode } from "html-entities";

const QuestionCard = (props) => {
	// randomize multiple choice answers
	const [randomAnswers, setRandomAnswers] = useState([]);
	const [disableButton, setDisableButton] = useState(false);
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

	const handleClick = (e) => {
		if (e.target.value === props.question.correct_answer) {
			//update scores using a callback function data goes to parent
			props.setScore(props.score + 1);
		}
		setDisableButton(true);
	};
	return (
		<div className={"question-section"}>
			<div className="question-text">{decode(props.question.question)}</div>
			<div className="answer-section">
				{randomAnswers.map((answer) => {
					if (answer === 3) {
						return (
							<button
								key={answer}
								onClick={handleClick}
								className="options correct "
								value={decode(props.question.correct_answer)}
								disabled={disableButton}
							>
								{decode(props.question.correct_answer)}
							</button>
						);
					}
					return (
						<button
							key={answer}
							onClick={handleClick}
							value={decode(props.question.incorrect_answers[answer])}
							className="options wrong"
							disabled={disableButton}
						>
							{decode(props.question.incorrect_answers[answer])}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default QuestionCard;

