import axios from "axios";
import API_DATA from "../constants/en";
import unAuthorized from "../utility/unAuthorized";
const BaseURL = API_DATA.API;
export async function getRequest(url) {
	try {
		const res = await axios.get(`${BaseURL}/${url}`);
		if (res.status === 200) {
			return res;
		} else {
			return [];
		}
	} catch (error) {
		unAuthorized(error.response.status);
	}
}
export async function deleteRequest(url) {
	const res = await axios.delete(`${BaseURL}/${url}`);
	if (res.status === 200) {
		return res;
	} else {
		return [];
	}
}
export async function postRequest(url, data) {
	try {
		const res = await axios.post(`${BaseURL}/${url}`, data);

		if (res.status === 200) {
			return res;
		} else {
			return [];
		}
	} catch (error) {
		unAuthorized(error.response.status);
	}
}


export async function putRequest(url, data) {
	try {
	  const res = await axios.put(`${BaseURL}/${url}`, data);
	  if (res.status === 200) {
		return res;
	  } else {
		return [];
	  }
	} catch (error) {
	  unAuthorized(error.response.status);
	}
  }