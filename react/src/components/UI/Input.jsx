import React from "react";
import classes from "./StyledInput.module.css";

const Input = (props) => {
	return (
		<div>
			<input className={classes.styledInput} {...props} type="text" />
		</div>
	);
};

export default Input;
