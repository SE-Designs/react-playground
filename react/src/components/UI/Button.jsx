import React from "react";
import classes from "./StyledButton.module.css";

const Button = ({ children, ...props }) => {
	return (
		<div>
			<button {...props} className={classes.styledBtn}>
				{children}
			</button>
		</div>
	);
};

export default Button;
