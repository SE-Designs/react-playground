import PostItem from "./PostItem";
import React from "react";

const PostList = ({ posts, title, remove }) => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>List of posts</h1>
			<p style={{ textAlign: "center" }}>About {title}</p>
			{posts.map((post, index) => (
				<PostItem
					remove={remove}
					number={index + 1}
					post={post}
					key={post.id}
				/>
			))}
		</div>
	);
};

export default PostList;
