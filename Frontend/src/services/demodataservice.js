import axios from "axios";
import API_DATA from "../constants/en";

const BASE_URI = API_DATA.API;

export const createAds = async (postBody) => {
	const END_POINT = `${BASE_URI}/add-ads`;
	return axios
		.post(END_POINT, postBody)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err;
		});
};

export const getAllAds = async () => {
	const END_POINT = `${BASE_URI}/get-all-ads`;
	return axios
		.get(END_POINT)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err;
		});
};

export const deleteAds = async (AdsID) => {
	const END_POINT = `${BASE_URI}/delete-ads/${AdsID}`;
	return axios
		.delete(END_POINT)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err;
		});
};