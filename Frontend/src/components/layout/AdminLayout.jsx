import React from 'react'
import Footer from '../admin/footer/Footer';
import Header from '../admin/header/Header'
import './style.css';
import Sidebar from '../admin/sidebar/Sidebar';

export const AdminLayout = (props) => {
  return (
   <div id="layout-wrapper">
			<Header />
			<Sidebar />
			<div className="main-content">
				{props.children}

				<Footer />
				</div>
			

			</div>
			
	)
}
