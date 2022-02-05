import React from "react";
import "./Filter.css";

function CategoryList({ groups, checkedList, setCheckedList }) {
	const handleCheckbox = (e) => {
		if (e.target.checked) {
			setCheckedList([...checkedList, e.target.value]);
		} else {
			setCheckedList(checkedList.filter((id) => id !== e.target.value));
		}
	};

	return (
		<div class="form-check">
			<input
				class="form-check-input"
				value={groups}
				type="checkbox"
				onChange={(e) => handleCheckbox(e)}
			/>
			<label>{groups}</label>
		</div>
	);
}

export default CategoryList;
