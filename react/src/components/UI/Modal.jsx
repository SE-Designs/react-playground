import React from "react";
import classes from "./StyledModal.module.css";

const Modal = ({ children, visible, setVisible }) => {
	const rootClasses = [classes.modal];

	if (visible) {
		rootClasses.push(classes.active);
	}

	return (
		<div onClick={(e) => setVisible(false)} className={rootClasses.join(" ")}>
			<div
				onClick={(e) => e.stopPropagation()}
				className={classes.modalContent}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
