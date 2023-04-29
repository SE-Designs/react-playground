import React, { useState } from "react";

import { IProduct } from "../models";

interface ProductProps {
	product: IProduct;
}

const Product = ({ product }: ProductProps) => {
	const [details, setdetails] = useState(false);

	return (
		<div className="border py-2 px-4 border flex flex-col items-center mb-2">
			<img src={product.image} alt={product.title} className="w-1/6" />
			<p> {product.title}</p>
			<p className="font-bold">{product.price} $</p>
			<button
				onClick={() => setdetails(!details)}
				className="py-2 px-4 border bg-yellow-400"
			>
				{details ? "Hide Details" : "Show Details"}
			</button>
			{details && (
				<div>
					<p>{product.description}</p>
				</div>
			)}
		</div>
	);
};

export default Product;
