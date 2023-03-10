function Score(props) {
	// if (props.score <= 6) {
	// } else if (props.score <= 80) {
	// 	console.log("Ok");
	// } else {
	// 	console.log("You win");
	// }

	return (
		<div>
			<h1 className="animate__animated animate__jackInTheBox">
				Your score is: {props.score}
			</h1>
			<img src="https://media.giphy.com/media/xT9DPvwdqWgLGeTTmE/giphy.gif" />
        
		</div>
	);
}

export default Score;
