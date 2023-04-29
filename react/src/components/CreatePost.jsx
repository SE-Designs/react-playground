import React, { useState } from "react";

import Button from "./UI/Button";
import Input from "./UI/Input";

const CreatePost = ({ create }) => {
	const [post, setPost] = useState({ title: "", description: "" });

	const addNewPost = () => {
		const newPost = {
			...post,
			id: Date.now(),
		};

		create(newPost);

		setPost({ title: "", description: "" });
	};

	return (
		<div>
			<Input
				value={post.title}
				onChange={(e) => setPost({ ...post, title: e.target.value })}
				type="text"
				placeholder="Название поста"
			/>
			<Input
				value={post.description}
				onChange={(e) => setPost({ ...post, description: e.target.value })}
				type="text"
				placeholder="Описание поста"
			/>
			<Button onClick={addNewPost}>Создать пост</Button>
		</div>
	);
};

export default CreatePost;
