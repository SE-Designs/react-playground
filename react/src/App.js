import React, { useState } from "react";

import Counter from "./components/Counter";
import CreatePost from "./components/CreatePost";
import Input from "./components/Input";
import InputV2 from "./components/UI/Input";
import PostList from "./components/PostList";
import Select from "./components/UI/Select";

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

	const [selectedSort, setSelectedSort] = useState("");

	function getSortedPost() {
		if (selectedSort) {
			return [...posts].sort((a, b) =>
				a[selectedSort].localeCompare(b[selectedSort])
			);
		}
		return posts;
	}

	const sortedPosts = getSortedPost();

	const sortPosts = (sort) => {
		setSelectedSort(sort);
	};

	const [searchQuery, setSearchQuery] = useState("");

	return (
		<div className="App">
			<Counter />
			<Input />
			<CreatePost create={createPost} />
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<Select
					value={selectedSort}
					onChange={sortPosts}
					options={[
						{ value: "title", name: "По названию" },
						{ value: "description", name: "По описанию" },
					]}
					defaultValue="Сортировка"
				/>
				<InputV2
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					placeholder="Поиск по..."
				/>
			</div>
			{posts.length !== 0 ? (
				<PostList
					remove={removePost}
					posts={sortedPosts}
					title={"Posts about IT"}
				/>
			) : (
				<div>
					<p>Посты не найдены</p>
				</div>
			)}
			<hr />
		</div>
	);
}

export default App;
