import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { IconContext } from "react-icons";
import { toast } from "react-toastify";
import { GiShoppingCart } from "react-icons/gi";

function ProductCard({ info, setCount }) {
	const title = info.title;
	let oldItems = JSON.parse(localStorage.getItem("basketItems")) || [];
	const addToBasket = (value) => {
		oldItems.push(value);
		localStorage.setItem("basketItems", JSON.stringify(oldItems));
		toast.warn("Added into the basket!", {
			icon: (
				<GiShoppingCart
					style={{ color: "#F76E11", fontSize: "20px", fontWeight: "bolder" }}
				/>
			),
			position: "top-right",
			autoClose: 1500,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		setCount(oldItems.length);
	};
	return (
		<>
			<div className="card-container">
				<div className="card-content">
					<img
						src={info.image}
						className="card-img-top card-image d-flex justify-content-center"
						alt="prodct-photo"
					/>
					<div className="card-body">
						<h5 className="card-title">{title.substring(0, 20)}...</h5>
						<hr className="divider" />
						<h6 className="card-title text-end">{info.price.toFixed(2)}$</h6>
						<button
							className="align-self-center align-self-sm-center button mt-2"
							onClick={() => addToBasket(info)}
						>
							<IconContext.Provider
								value={{ color: "#F76E11", className: "global-class-name" }}
							>
								<MdAddShoppingCart /> Add To Cart
							</IconContext.Provider>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductCard;
