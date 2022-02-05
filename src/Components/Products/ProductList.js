import React from "react";
import ProductCard from "./ProductCard";
import "./Product.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ProductList({ data, setCount }) {
	return (
		<>
			<ToastContainer />
			<div className="wrapper">
				{data &&
					data.map((value, index) => (
						<div className="col-lg-4" key={index}>
							<ProductCard info={value} setCount={setCount} />
						</div>
					))}
			</div>
		</>
	);
}

export default ProductList;
