import React, { useState } from "react";
import ProductList from "../Components/Products/ProductList";
import Navbar from "../Components/Navbar/Navbar";
import products from "../Data/products-list.json";
import Filter from "../Components/Filter/Filter";
import MyBasket from "../Components/MyBasket/MyBasket";

function ShopContainer(props) {
	const [inputText, setInputText] = useState("");
	const [checkedList, setCheckedList] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);
	const items = JSON.parse(localStorage.getItem("basketItems")) || [];
	const [count, setCount] = useState(items.length);
	const result = products.filter(function (obj) {
		if (checkedList.length > 0) {
			return (
				(obj.title.toLowerCase().includes(inputText.toLowerCase()) ||
					obj.category === inputText) &&
				checkedList.includes(obj.category)
			);
		} else {
			return (
				obj.title.toLowerCase().includes(inputText.toLowerCase()) ||
				obj.category === inputText
			);
		}
	});

	return (
		<>
			<Navbar
				inputText={inputText}
				setInputText={setInputText}
				count={count}
				setModalVisible={setModalVisible}
			/>

			<div className="container">
				{modalVisible ? (
					<MyBasket setModalVisible={setModalVisible} setCount={setCount} />
				) : null}
				<div className="row">
					<div className="col-1  justify-content-start">
						<Filter checkedList={checkedList} setCheckedList={setCheckedList} />
					</div>
					<div className="col-11">
						<ProductList data={result} setCount={setCount} />
					</div>
				</div>
			</div>
		</>
	);
}

export default ShopContainer;
