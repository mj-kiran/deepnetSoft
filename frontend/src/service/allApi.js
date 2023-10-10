import axios from "axios";
import BASE_URL from "./BaseUrl";

export const getCategories = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/categories/viewCategories`
    );
    return response
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; 
  }
};
