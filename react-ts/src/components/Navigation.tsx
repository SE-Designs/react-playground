import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => {
	return (
		<nav className="h-[50px] flex items-center justify-between bg-gray-500 text-white px-5">
			<span className="font-bold">React x TS</span>
			<span>
				<Link className="mr-2" to="/">
					Products
				</Link>
				<Link to="/about">About</Link>
			</span>
		</nav>
	);
};

export default Navigation;
