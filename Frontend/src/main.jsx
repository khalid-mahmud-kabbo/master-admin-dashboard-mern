import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './assets/admin/css/styles.css';
import './assets/admin/css/sidebar.css';
import './assets/admin/css/header.css';
import './assets/admin/css/footer.css';
import './assets/admin/css/responsive.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
