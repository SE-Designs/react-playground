import React, { useState } from "react";

import ErrorMessage from "./ErrorMessage";
import { IProduct } from "../models";
import axios from "axios";

interface CreateProductProps {
	onCreate: (product: IProduct) => void;
}

const productData: IProduct = {
	id: Date.now(),
	title: "",
	price: 13.5,
	description: "lorem ipsum set",
	image: "https://i.pravatar.cc",
	category: "electronic",
	rating: {
		rate: 42,
		count: 10,
	},
};

const CreateProduct = ({ onCreate }: CreateProductProps) => {
	const [value, setValue] = useState("");
	const [error, setError] = useState("");

	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		productData.title = value;
		if (value.trim().length === 0) {
			setError("Please enter a title");
			return;
		}

		const response = await axios.post<IProduct>(
			"https://fakestoreapi.com/products",
			productData
		);

		onCreate(response.data);
	};

	// const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
	// 	setValue(event.target.value);
	// };

	return (
		<>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					className="border py-2 px-4 mb-2 w-full outline-0"
					placeholder="Enter product title..."
					value={value}
					// onChange={changeHandler}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button className="py-2 px-4 border bg-yellow-400">Create</button>
			</form>
			<ErrorMessage error={error} />
		</>
	);
};

export default CreateProduct;
