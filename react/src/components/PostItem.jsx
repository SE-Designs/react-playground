import Button from "./UI/Button";
import React from "react";

const PostItem = (props) => {
	return (
		<div
			className="post"
			style={{ border: "2px solid black", padding: "10px", marginTop: "40px" }}
		>
			<div className="post__content">
				<strong>
					{props.number}. {props.post.title}
				</strong>
				<div>
					<p>{props.post.description}</p>
				</div>
			</div>
			<div className="post__btns">
				<Button onClick={() => props.remove(props.post)}>Delete</Button>
			</div>
		</div>
	);
};

export default PostItem;
