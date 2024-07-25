import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserStore } from '../../../store/UserStore';

const Sidebar = () => {

    const { isSidebarActive, setIsSidebarActive } = useUserStore();
    const [activeMenu, setActiveMenu] = useState('');
	const [submenuVisible, setSubmenuVisible] = useState({ dashboard: false, manageadmin: false, products: false });

	const handleMenuItemClick = (menuItem) => {
		setActiveMenu(menuItem);
		// Toggle visibility for submenus
		if (menuItem in submenuVisible) {
			setSubmenuVisible(prev => ({ ...prev, [menuItem]: !prev[menuItem] }));
		}
	};


  return (
 


    <div className={`sidebar__area ${isSidebarActive ? 'active' : ''}`}>
    <div className="sidebar__close">
        <button className="close-btn" onClick={() => setIsSidebarActive(!isSidebarActive)}>
        <i className="fa-solid fa-xmark"></i>
        </button>
    </div>
    <div className="sidebar__brand">
        <a href="/admin/dashboard">
            <img src="http://127.0.0.1:8000/uploaded_files/logo/6634ef079f9111714745095.png" alt="icon" />
        </a>
    </div>
    <ul id="sidebar-menu" className="sidebar__menu metismenu">
        <li className={`${activeMenu === 'dashboard' ? 'mm-active' : ''}`} onClick={() => handleMenuItemClick('dashboard')}>
            <Link to="/admin/dashboard" aria-expanded="true">
            <i className="fa-solid fa-gauge"></i>
                <span>Dashboard</span>
            </Link>
        </li>


        
                    <li className={`${activeMenu === 'manageadmin' ? 'mm-active' : ''}`} onClick={() => handleMenuItemClick('manageadmin')}>
                <a className="has-arrow" href="#" aria-expanded={`${submenuVisible.manageadmin && 'true'}`}>
                    <i className="fas fa-user"></i>
                    <span>Admin Manage</span>
                </a>
                <ul className={`mm-collapse ${submenuVisible.manageadmin && 'mm-show' }`}>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/admins">
                            <i className="fa fa-circle"></i>
                            <span>Admin List</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/create-admin">
                            <i className="fa fa-circle"></i>
                            <span>Add Admin</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/roles">
                            <i className="fa fa-circle"></i>
                            <span>Roles</span>
                        </a>
                    </li>
                </ul>
            </li>
                            <li className="">
                <a className="has-arrow" href="#">
                    <i className="fas fa-list"></i>
                    <span>Category and Brand</span>
                </a>
                <ul className="mm-collapse">
                                            <li className="">
                            <a href="http://127.0.0.1:8000/admin/category">
                                <i className="fa fa-circle"></i>
                                <span>Category</span>
                            </a>
                        </li>
                                                                <li className="">
                            <a href="http://127.0.0.1:8000/admin/brand">
                                <i className="fa fa-circle"></i>
                                <span>Brand</span>
                            </a>
                        </li>
                    
                </ul>
            </li>
                            <li className={`${activeMenu === 'products' ? 'mm-active' : ''}`} onClick={() => handleMenuItemClick('products')}>
                <a className="has-arrow" href="#" aria-expanded={`${submenuVisible.products && 'true'}`}>
                    <i className="fab fa-product-hunt"></i>
                    <span>Products</span>
                </a>
                <ul className={`mm-collapse ${submenuVisible.products && 'mm-show' }`}>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/product/create">
                            <i className="fa fa-circle"></i>
                            <span>Add Product</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/product">
                            <i className="fa fa-circle"></i>
                            <span>Product List</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/product-color">
                            <i className="fa fa-circle"></i>
                            <span>Product Color</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/product-size">
                            <i className="fa fa-circle"></i>
                            <span>Product Size</span>
                        </a>
                    </li>
                </ul>
            </li>
                            <li className="">
                <a className="has-arrow" href="#">
                    <i className="fas fa-shopping-cart"></i>
                    <span>Order Management</span>
                </a>
                <ul className="mm-collapse">
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/orders/all">
                            <i className="fa fa-circle"></i>
                            <span>All Orders</span>
                            <span className="badge bg-info text-white">1</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/orders/pending">
                            <i className="fa fa-circle"></i>
                            <span>Pending Orders</span>
                            <span className="badge bg-info text-white">0</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/orders/processing">
                            <i className="fa fa-circle"></i>
                            <span>Processing Orders</span>
                            <span className="badge bg-info text-white">0</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/orders/shipped">
                            <i className="fa fa-circle"></i>
                            <span>Shipped Orders</span>
                            <span className="badge bg-info text-white">0</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/orders/delivered">
                            <i className="fa fa-circle"></i>
                            <span>Delivered Orders</span>
                            <span className="badge bg-info text-white">1</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/orders/returned">
                            <i className="fa fa-circle"></i>
                            <span>Returned Orders</span>
                            <span className="badge bg-info text-white">0</span>
                        </a>
                    </li>
                </ul>
            </li>
                            <li className="">
                <a href="http://127.0.0.1:8000/admin/transactions">
                    <i className="fas fa-random"></i>
                    <span>Transactions</span>
                </a>
            </li>
                            <li className="">
                <a href="http://127.0.0.1:8000/admin/country-tax-list">
                    <i className="fas fa-percent"></i>
                    <span>Tax Settings</span>
                </a>
            </li>
                            <li className="">
                <a href="http://127.0.0.1:8000/admin/delivery-charge-list">
                    <i className="fas fa-shipping-fast"></i>
                    <span>Delivery Charge</span>
                </a>
            </li>
                            <li className="">
                <a href="http://127.0.0.1:8000/admin/currency-list">
                    <i className="fa fa-dollar-sign"></i>
                    <span>Currency</span>
                </a>
            </li>
                            <li className="">
                <a href="http://127.0.0.1:8000/admin/coupon">
                    <i className="fas fa-code"></i>
                    <span>Coupon Code</span>
                </a>
            </li>
        


                    <li className="">
                <a href="http://127.0.0.1:8000/admin/advertise">
                    <i className="fas fa-ad"></i>
                    <span>Advertise</span>
                </a>
            </li>
                            <li className="">
                <a href="http://127.0.0.1:8000/admin/blog">
                    <i className="fab fa-blogger-b"></i>
                    <span>Blog</span>
                </a>
            </li>
                            <li className="">
                <a className="has-arrow" href="#">
                    <i className="fas fa-tags"></i>
                    <span>Tags</span>
                </a>
                <ul className="mm-collapse">
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/product-tag">
                            <i className="fa fa-circle"></i>
                            <span>Product Tag</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/item-tag">
                            <i className="fa fa-circle"></i>
                            <span>Item Tag</span>
                        </a>
                    </li>
                </ul>
            </li>
                            <li className="">
                <a className="has-arrow" href="#">
                    <i className="fas fa-blog"></i>
                    <span>CRM</span>
                </a>
                <ul className="mm-collapse">
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/contact-us/index">
                            <i className="fa fa-circle"></i>
                            <span>Contact Us</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/subscribe/list">
                            <i className="fa fa-circle"></i>
                            <span>Subscribers</span>
                        </a>
                    </li>
                </ul>
            </li>
                            <li className="">
                <a className="has-arrow" href="#">
                    <i className="fas fa-users"></i>
                    <span>Users</span>
                </a>
                <ul className="mm-collapse">
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/customers">
                            <i className="fa fa-circle"></i>
                            <span>Customer List</span>
                        </a>
                    </li>
                </ul>
            </li>
                            <li className="">
                <a className="has-arrow" href="#">
                    <i className="fas fa-cube"></i>
                    <span>CMS</span>
                </a>
                <ul className="mm-collapse">
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/general-settings">
                            <i className="fa fa-circle"></i>
                            <span>General Settings</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/site-content/home-page">
                            <i className="fa fa-circle"></i>
                            <span>Home Page</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/site-content/about-page">
                            <i className="fa fa-circle"></i>
                            <span>About Page</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/social-link">
                            <i className="fa fa-circle"></i>
                            <span>Social Link</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/image-gallery">
                            <i className="fa fa-circle"></i>
                            <span>Image Gallery</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/testimonial">
                            <i className="fa fa-circle"></i>
                            <span>Testimonial</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/language-list">
                            <i className="fa fa-circle"></i>
                            <span>Languages</span>
                        </a>
                    </li>
                </ul>
            </li>
                

        <li className="">
            <a className="has-arrow" href="#">
                <i className="fas fa-list-ol"></i>
                <span>Slider &amp; Banner</span>
            </a>
            <ul className="mm-collapse">
                
                                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/slider">Home (Slider)</a>
                    </li>
                                
            </ul>
        </li>
                    <li className="">
                <a className="has-arrow" href="#">
                    <i className="fas fa-cube"></i>
                    <span>SEO Management</span>
                </a>
                <ul className="mm-collapse">
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/manage-seo/home">
                            <i className="fa fa-circle"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/manage-seo/about-us">
                            <i className="fa fa-circle"></i>
                            <span>About Us</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/manage-seo/contact">
                            <i className="fa fa-circle"></i>
                            <span>Contact</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/manage-seo/blog">
                            <i className="fa fa-circle"></i>
                            <span>Blog</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/manage-seo/all-products">
                            <i className="fa fa-circle"></i>
                            <span>Products</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/manage-seo/cart">
                            <i className="fa fa-circle"></i>
                            <span>Cart</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/manage-seo/checkout">
                            <i className="fa fa-circle"></i>
                            <span>Checkout</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/manage-seo/wishlist">
                            <i className="fa fa-circle"></i>
                            <span>Wishlist</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/manage-seo/compare">
                            <i className="fa fa-circle"></i>
                            <span>Compare</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/manage-seo/sign-in">
                            <i className="fa fa-circle"></i>
                            <span>Sign In</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/manage-seo/sign-up">
                            <i className="fa fa-circle"></i>
                            <span>Sign Up</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/manage-seo/forget-password">
                            <i className="fa fa-circle"></i>
                            <span>Forget Password</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/manage-seo/reset-password">
                            <i className="fa fa-circle"></i>
                            <span>Reset Password</span>
                        </a>
                    </li>
                </ul>
            </li>
                            <li className="">
                <a href="http://127.0.0.1:8000/admin/pages">
                    <i className="fas fa-book"></i>
                    <span>Manage Pages</span>
                </a>
            </li>
            <li className="">
                <a className="has-arrow" href="#">
                    <i className="fa fa-bars"></i>
                    <span>Manage Menus</span>
                </a>
                <ul className="mm-collapse">
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/static-menus">
                            <i className="fa fa-circle"></i>
                            <span>Static Menus</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/dynamic-menus">
                            <i className="fa fa-circle"></i>
                            <span>Dynamic Menus</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/submenus">
                            <i className="fa fa-circle"></i>
                            <span>Submenus</span>
                        </a>
                    </li>
                </ul>
            </li>
                            <li className="">
                <a href="http://127.0.0.1:8000/admin/sitemap-list">
                    <i className="fa fa-sitemap"></i>
                    <span>Sitemaps</span>
                </a>
            </li>
                            <li className="">
                <a href="http://127.0.0.1:8000/admin/payment-gateway">
                    <i className="fa fa-money-bill"></i>
                    <span>Payment Gateway</span>
                </a>
            </li>
                            <li className="">
                <a className="has-arrow" href="#">
                    <i className="fas fa-address-book"></i>
                    <span>Company</span>
                </a>
                <ul className="mm-collapse">
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/faq-list">
                            <i className="fa fa-circle"></i>
                            <span>FAQ</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/company/privacy-policy">
                            <i className="fa fa-circle"></i>
                            <span>Privacy Policy</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/company/refund-policy">
                            <i className="fa fa-circle"></i>
                            <span>Refund Policy</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/company/shipping-return">
                            <i className="fa fa-circle"></i>
                            <span>Shipment &amp; Return</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/company/terms-conditions">
                            <i className="fa fa-circle"></i>
                            <span>Terms &amp; Condition</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="http://127.0.0.1:8000/admin/company-story">
                            <i className="fa fa-circle"></i>
                            <span>Company Story</span>
                        </a>
                    </li>
                </ul>
            </li>
            </ul>
</div>





  )
}

export default Sidebar
