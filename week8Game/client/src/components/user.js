import { useState } from "react";

const UserForm = (props) => {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		props.grabUser(value);
		console.log(value);
		setValue("");
	};
	const handleClick = (e) => {
		e.preventDefault();
		props.setDifficulty(e.target.value);
	};
	return (
		<div className="ListMain">
			{/* <p className="instructions">Please provide your name and difficulty level</p> */}
			<div className="header">
				<form onSubmit={handleSubmit}>
					<span>Name</span>
					<br></br>
					<input
						type="text"
						placeholder="Please enter your name"
						className="input"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<br></br>
					<span>Level</span>
					<br></br>
					<div className="buttonsContainer">
						<button
							className="options level"
							onClick={handleClick}
							value={"easy"}
						>
							Easy
						</button>
						<button
							className="options homeButton level"
							onClick={handleClick}
							value={"medium"}
						>
							Medium
						</button>
						<button
							className="options homeButton level"
							onClick={handleClick}
							value={"hard"}
						>
							Hard
						</button>
					</div>
					<p>Difficulty: {props.difficulty} </p>
					<br />
					<button type="submit" className="submitButton">
						Send
					</button>
				</form>
			</div>
		</div>
	);
};

export default UserForm;
