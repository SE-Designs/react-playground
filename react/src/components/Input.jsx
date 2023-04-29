import React, { useState } from "react";

const Counter = function () {
	const [inputValue, setInputValue] = useState("Здесь будет ваша реклама");

	return (
		<div>
			<h1>Текст: {inputValue.toUpperCase()}</h1>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
		</div>
	);
};

export default Counter;
