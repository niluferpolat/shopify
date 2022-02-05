import React from "react";
import BasketItems from "./BasketItems";

function MyBasket({ setModalVisible, setCount }) {
	return (
		<div
			className="modal show fade modal-container"
			style={{ display: "inline-block", backgroundColor: "rgba(0,0,0,0.8)" }}
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">My Basket</h5>
						<button
							type="button"
							className="btn-close"
							style={{ position: "absolute", right: 15, top: 15 }}
							onClick={() => setModalVisible(false)}
						></button>
					</div>
					<div className="modal-body">
						<BasketItems setCount={setCount} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyBasket;
