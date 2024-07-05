const unAuthorized = (code) => {
	if (code === 401) {
		sessionStorage.clear();
		localStorage.clear();
		window.location = "/";
	}
}

export default unAuthorized