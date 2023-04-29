import React, { useState } from "react";

const Counter = function () {
	const [likes, setLikes] = useState(0);

	function change(type) {
		if (type) {
			setLikes(likes + 1);
		} else {
			setLikes(likes - 1);
		}
	}

	return (
		<div>
			<h1>likes: {likes}</h1>
			<button onClick={() => change(true)}>Increment</button>
			<button onClick={() => change(false)}>Decrement</button>
			<hr />
		</div>
	);
};

export default Counter;
