import axios from "axios";
import { config } from "../constants/details";
import { GET_ALL_CATEGORIES, UPDATE_USER } from "../constants/links";

export const updateUser = async (id, data) => {
    try {
        const res = await axios.put(`${UPDATE_USER}${id}`, data, { ...config });
        localStorage.setItem('user', JSON.stringify(res.data.data));
        return { data: res, error: undefined };
    } catch (error) {
        return { data: undefined, error: error };
    }
};

export const getCategories = async () => {
    try {
      const res = await axios.get(`${GET_ALL_CATEGORIES}`);
      return { data: res.data.categories, error: undefined };
    } catch (error) {
        return { data: undefined, error: error };
    }
  }