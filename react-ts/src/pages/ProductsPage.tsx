import React, { useContext } from "react";

import CreateProduct from "../components/CreateProduct";
import ErrorMessage from "../components/ErrorMessage";
import { IProduct } from "../models";
import LoadingMessage from "../components/LoadingMessage";
import Modal from "../components/Modal";
import { ModalContext } from "../context/ModalContext";
import Product from "../components/Product";
import { useProducts } from "../hooks/products";

// import { products } from "./data/products";

const ProductsPage = () => {
	const { products, error, loading, addProduct } = useProducts();

	const { modal, open, close } = useContext(ModalContext);

	const createHandler = (product: IProduct) => {
		close();
		addProduct(product);
	};

	return (
		<div className="container mx-auto max-w-2xl pt-5 text-center">
			<h1>Hello, React x TS</h1>
			<button onClick={open} className="py-2 px-4 mb-2 border">
				Create an item
			</button>

			{loading && <LoadingMessage />}
			{error && <ErrorMessage error={error} />}

			{products.map((product) => (
				<Product product={product} key={product.id} />
			))}

			{modal && (
				<Modal title="Create new product" onClose={close}>
					<CreateProduct onCreate={createHandler} />
				</Modal>
			)}
			{/* <Product product={products[0]} /> */}
		</div>
	);
};

export default ProductsPage;
