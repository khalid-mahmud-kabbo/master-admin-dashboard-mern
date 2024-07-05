import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/user/HomePage.jsx";
import DashboardPage from "./pages/admin/DashboardPage.jsx";
import { useUserStore } from "./store/UserStore.js";

function App() {
	const { isLoggedIn, setIsLoggedIn, userData, setUserData } = useUserStore();
	useEffect(() => {
		(async () => {
			if (!isLoggedIn) return;
			await setUserData();
		})()
	}, [isLoggedIn, setUserData]);
	useEffect(() => {
		setIsLoggedIn()
	}, []);



	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				{/* <Route path="/" element={<DashboardPage />} /> */}
				
{/* 
				{isLoggedIn && (
					<>
				 */}
				<Route path="/admin/dashboard" element={<DashboardPage />} />
{/* 				
				</>
				)}
				 */}
				<>
				 
						{/* <Route path="*" element={<NotFound />} /> */}
					</>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
