import React from "react";
import { FaTrash } from "react-icons/fa";
import "./Basket.css";

function BasketItems({ setCount }) {
	const items = JSON.parse(localStorage.getItem("basketItems"));
	const map = items.reduce((a, c) => {
		a[c.id] = (a[c.id] || 0) + 1;
		return a;
	}, {});
	//map shows the occurencies of the elements in the basket
	//basketItems is an array of objects that contains id,title,price,count
	const basketItems = [];
	let total = 0;
	items.forEach(function (item) {
		const i = basketItems.findIndex((x) => x.id == item.id);

		if (i <= -1) {
			basketItems.push({
				id: item.id,
				title: item.title,
				price: item.price,
				count: map[item.id],
			});
		}
	});
	for (let i = 0; i < basketItems.length; i++) {
		total += basketItems[i].price * basketItems[i].count;
	}
	const deleteItem = (id) => {
		const nondeletedItems = items.filter((item) => item.id !== id);
		setCount(nondeletedItems.length);
		localStorage.setItem("basketItems", JSON.stringify(nondeletedItems));
	};
	return (
		<>
			{basketItems.length > 0 ? (
				<>
					<table class="table">
						<thead>
							<tr>
								<th scope="col">Product Name</th>
								<th scope="col">Price</th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
							{basketItems.map((item, index) => (
								<tr key={index}>
									<th>{item.title}</th>
									<td>
										{item.count}x{item.price}$
									</td>
									<td>
										<button
											className={"delete-button"}
											onClick={() => deleteItem(item.id)}
										>
											<FaTrash style={{ color: "#F76E11" }} />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<p className="text-end me-4">
						<strong>Total:</strong> {total.toFixed(2)}$
					</p>
				</>
			) : (
				<p>There is no items in your basket</p>
			)}
		</>
	);
}

export default BasketItems;
