function Score(props) {
	return (
		<div>
			<h1 className="animate__animated animate__jackInTheBox">
			{/* score is coming from app.js */}
				Your score is: {props.score}
			</h1>
			<img src="https://media.giphy.com/media/xT9DPvwdqWgLGeTTmE/giphy.gif" />
		</div>
	);
}

export default Score;
