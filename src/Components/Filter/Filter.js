import React, { useEffect, useState } from "react";
import "./Filter.css";
import * as api from "../../Api/api.js";
import CategoryList from "./CategoryList";

function Filter({ checkedList, setCheckedList }) {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		api.getAllCategories().then((resp) => setCategories(resp));
	}, []);

	return (
		<div className="filter-container">
			<h5 className="text-start title">Filter</h5>
			<div className="checklist">
				{categories &&
					categories.map((value, index) => (
						<CategoryList
							key={index}
							groups={value}
							checkedList={checkedList}
							setCheckedList={setCheckedList}
						/>
					))}
			</div>
		</div>
	);
}

export default Filter;
