import { create } from "zustand";
import Cookies from "js-cookie";
import axios from "axios";
import API_DATA from "../constants/en";
const BaseURL = API_DATA.API;

export const useUserStore = create((set) => ({
	isLoggedIn: false,
	setIsLoggedIn: () => {
		const userCookie = Cookies.get(API_DATA.TOKEN_TEXT);
		set({ isLoggedIn: !!userCookie })
	},

	userAction: false,
	setUserAction: (state) => set({ userAction: state }),

	isVerified: false,
	setIsVerified: (state) => set({ isVerified: state }),

	verificationData: {},
	setVerificationData: (state) => set({ verificationData: state }),

	userData: {},
	setUserData: async () => {
		const userID = Cookies.get(API_DATA.USER_ID_TOKEN_TEXT);
		const token = Cookies.get(API_DATA.TOKEN_TEXT);

		if (!userID) return;
		let res = await axios.get(`${BaseURL}/get-user/${userID}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			}
		});
		
		if (res.data.success) {
			set({ userData: res.data.data });
		}
	},

	isSidebarActive: false,
	setIsSidebarActive: (isSidebarActive) => set({ isSidebarActive }),



}));
