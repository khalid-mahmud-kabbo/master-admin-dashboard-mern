const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
const API_DATA = {
	API: isLocal ? "http://localhost:3000/api/v1" : "https://eksoftwares.com/api/v1",
	DOMAIN : isLocal ? "http://localhost:5173" : "https://eksoftwares.com",
	TOKEN_TEXT: "token",
	USER_ID_TOKEN_TEXT: "userID",
	USER_NAME_TEXT: "username",
};

Object.freeze(API_DATA);
export default API_DATA;
