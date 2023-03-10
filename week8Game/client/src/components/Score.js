function Score(props) {
	// if (score <= 6) {
	// 	console.log("you fail");
	// } else if (score <= 80) {
	// 	console.log("Ok");
	// } else {
	// 	console.log("You win");
	// }

	return (
		<div>
			<h1>Your score is: {props.score}</h1>
		</div>
	);
}

export default Score;
