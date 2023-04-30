import React, { useMemo, useState } from "react";

import Button from "./components/UI/Button";
import Counter from "./components/Counter";
import CreatePost from "./components/CreatePost";
import Input from "./components/Input";
import Modal from "./components/UI/Modal";
import PostFilter from "./components/PostFilter";
import PostList from "./components/PostList";

function App() {
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: "Javascript",
			description: "Javascript is programming language",
		},
		{
			id: 2,
			title: "Python",
			description: "Python is programming language",
		},
		{
			id: 3,
			title: "Ruby",
			description: "I like Ruby is programming language",
		},
		{
			id: 4,
			title: "TS",
			description: "TS is good",
		},
	]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	const [filter, setFilter] = useState({ sort: "", query: "" });

	const sortedPosts = useMemo(() => {
		if (filter.sort) {
			return [...posts].sort((a, b) =>
				a[filter.sort].localeCompare(b[filter.sort])
			);
		}
		return posts;
	}, [filter.sort, posts]);

	const searchPosts = useMemo(() => {
		return sortedPosts.filter((post) =>
			post.title.toLowerCase().includes(filter.query.toLowerCase())
		);
	}, [filter.query, sortedPosts]);

	const [modal, setModal] = useState(false);

	return (
		<div className="App">
			<Counter />
			<Input />
			<Button onClick={(e) => setModal(true)}>Create post</Button>
			<PostFilter filter={filter} setFilter={setFilter} />
			<Modal visible={modal} setVisible={setModal}>
				<p style={{ fontWeight: 700, textAlign: "center" }}>Create Post</p>
				<CreatePost create={createPost} created={setModal} />
			</Modal>
			<PostList
				remove={removePost}
				posts={searchPosts}
				title={"Posts about IT"}
			/>
			<hr />
		</div>
	);
}

export default App;
