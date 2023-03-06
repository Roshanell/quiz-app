const QuestionCard = (props) => {
    
    return (
      <div className={"question-section"}>
        <div className='question-text'>{props.question.question}</div>
        <div className='answer-section'>
		<button>True</button>
		<button>False</button>
        </div>
      </div>
    );
  };

export default QuestionCard;