import React from "react";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { IconContext } from "react-icons";
import { GiShoppingCart } from "react-icons/gi";

function Navbar({ inputText, setInputText, count, setModalVisible }) {
	const handleChange = (event) => {
		setInputText(event.target.value);
	};
	const resetInput = () => {
		setInputText("");
	};

	return (
		<>
			<nav className="navbar sticky-top nav-container">
				<div className="container-fluid d-flex">
					<div className="ms-3">
						<form className="search-container">
							<IconContext.Provider
								value={{ color: "#F76E11", className: "icon" }}
							>
								<BsSearch />
							</IconContext.Provider>

							<input
								className="search-input"
								placeholder="Search..."
								value={inputText}
								onChange={handleChange}
							/>
							{inputText.length > 0 ? (
								<button className="erase-button" onClick={() => resetInput()}>
									<MdOutlineCancel />
								</button>
							) : null}
						</form>
					</div>

					<div className="me-3">
						<button className="basket" onClick={() => setModalVisible(true)}>
							<span class="badge badge-warning" id="lblCartCount">
								{count}
							</span>
							<GiShoppingCart />
						</button>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
