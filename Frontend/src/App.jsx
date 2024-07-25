import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/admin/DashboardPage.jsx";
import ProductListPage from "./pages/admin/ProductListPage.jsx";
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
				
				{/* <Route path="/" element={<DashboardPage />} /> */}
				
{/* 
				{isLoggedIn && (
					<>
				 */}
				<Route path="/" element={<DashboardPage />} />
				<Route path="/products" element={<ProductListPage />} />
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
