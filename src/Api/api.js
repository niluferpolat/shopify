import axios from "axios";

export const getAllCategories = async () => {
	const response = await axios.get(
		"https://fakestoreapi.com/products/categories",
		{
			headers: {
				"Content-Type": "text/plain",
			},
		}
	);
	return response.data;
};
