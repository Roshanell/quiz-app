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
			<div className="header">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Please enter your name"
						className="input"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<div className="buttonsContainer">
						<button onClick={handleClick} value={"easy"}>
							Easy
						</button>
						<button onClick={handleClick} value={"medium"}>
							Medium
						</button>
						<button onClick={handleClick} value={"hard"}>
							Hard
						</button>
					</div>
					<p>Difficulty: {props.difficulty} </p>
					<br /> <button type="submit">Send</button>
				</form>
			</div>
		</div>
	);
};

export default UserForm;
