import { useState } from "react";
function Timer() {
	const [startTime] = useState(new Date());
	const [counter, setCounter] = useState(60);

	setInterval(() => {
		setCounter(60 - (new Date().getUTCSeconds() - startTime.getUTCSeconds()));
	}, 1000);

	return <div>Countdown: {counter}</div>;
}
export default Timer;
