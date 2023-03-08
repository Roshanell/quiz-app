const QuestionCard = (props) => {
	return (
		<div className={"question-section"}>
			<div className="question-text">{props.question.question}</div>
			<div className="answer-section">
				<button>{props.question.correct_answer}</button>
				<button>{props.question.incorrect_answers[0]}</button>
				<button>{props.question.incorrect_answers[1]}</button>
				<button>{props.question.incorrect_answers[2]}</button>
			</div>
		</div>
	);
};

export default QuestionCard;

// correct answer = props.question.correct_answer
// incorrect answer = props.incorrect_answers[0]
