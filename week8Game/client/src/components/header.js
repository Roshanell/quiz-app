const Header = (props) => {
	let message;
	if (props.user) {
		message = `Welcome to my game ${props.user}`;
	} else {
		message = `Welcome to my game`;
	}

	return (
		<div className={"textHeader"}>
			<h3 className="greeting animate__animated animate__shakeY animate__delay-1s	1s">
				{message}
			</h3>
		</div>
	);
};

export default Header;
