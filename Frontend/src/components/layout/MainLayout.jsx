import Footer from '../user/footer/Footer';
import Header from '../user/header/Header'
import './style.css';
export const MainLayout = (props) => {
	return (
		<>
		<div className="mobile-search">
        <div className="container">
            <form method="get" id="searchform" action="" className="search-form">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-11">
                                                    <label>What are you lookking for?</label>
                                                <input type="text" name="s" id="s" placeholder="Search blog.." />
                    </div>
                    <div className="col-1 d-flex justify-content-end align-items-center gap-2">
                        <div className="search-cross-btn">
                            <button type="submit"><i className='bx bx-search-alt-2'></i></button>
                        </div>
                        <div className="search-cross-btn">
                            <i className="bi bi-x"></i>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div className="menu-toggle-btn-full-shape">
    <div className="menu-toggle-wrap bg-white">
        <div className="sidebar-top-area d-flex justify-content-between align-items-center">
            <div className="sidebar-logo px-4 py-3 rounded">
                                    <a href=""><img src="/assets/img/header1-logo.svg" alt="sidebar-image" /></a>
                            </div>
            <div className="cross-icon">
                <i className='bx bx-x'></i>
            </div>
        </div>
        <div className="sidebar-body">
            <div className="address-card mb-5">
                <div className="content">
                                        <div className="header">
                        <div className="location">
                                                            <svg width="18" height="22" viewBox="0 0 18 22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 22C9 22 17.25 14.1818 17.25 8.25C17.25 6.06196 16.3808 3.96354 14.8336 2.41637C13.2865 0.869194 11.188 0 9 0C6.81196 0 4.71354 0.869194 3.16637 2.41637C1.61919 3.96354 0.75 6.06196 0.75 8.25C0.75 14.1818 9 22 9 22ZM9 12.375C7.90598 12.375 6.85677 11.9404 6.08318 11.1668C5.3096 10.3932 4.875 9.34402 4.875 8.25C4.875 7.15598 5.3096 6.10677 6.08318 5.33318C6.85677 4.5596 7.90598 4.125 9 4.125C10.094 4.125 11.1432 4.5596 11.9168 5.33318C12.6904 6.10677 13.125 7.15598 13.125 8.25C13.125 9.34402 12.6904 10.3932 11.9168 11.1668C11.1432 11.9404 10.094 12.375 9 12.375Z"/>
                                </svg>
                                                    </div>
                                                    <h3>New York</h3>
                                            </div>
                                                                <ul className="address-list">
                                                            <li><span>Address:</span> 2972 Westheimer Rd. Santa &amp;, Illinois 85486</li>
                                                                                        <li><span>Phone:</span> <a href="tel:+8801761456456">+8801761456456</a></li>
                                                                                        <li><span>Email:</span> <a href="mailto:">info@example.com</a></li>
                                                    </ul>
                                    </div>
                                    <img src="/assets/img/office1.png" alt="sidebar-image" />
                            </div>
            <div className="blog-widget-item mb-0">
                <div className="follow-area">
                                            <h5 className="blog-widget-title mb-1">Follow Us</h5>
                                                                <p className="para">Follow us on Social Network</p>
                                        <div className="blog-widget-body">
                        <ul className="follow-list d-flex flex-row align-items-start gap-4">
                                                                                                <li><a href="https://facebook.com"><i className='bx bxl-facebook'></i></a></li>
                                                                    <li><a href="https://twitter.com"><i className='bx bxl-twitter'></i></a></li>
                                                                    <li><a href="https://instagram.com"><i className='bx bxl-instagram'></i></a></li>
                                                                    <li><a href="https://pinterest.com"><i className='bx bxl-pinterest'></i></a></li>
                                                                                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>  
    <div className="egns-preloader">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <div className="circle-border">
                        <div className="moving-circle"></div>
                        <div className="moving-circle"></div>
                        <div className="moving-circle"></div>

                        <svg width="180px" height="150px" viewBox="0 0 187.3 93.7" preserveAspectRatio="xMidYMid meet"
                            style={{left: '50%', top: '50%', position: 'absolute', transform: 'translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0)'}}>

                            <path stroke="#D90A2C" id="outline" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" />
                            <path id="outline-bg" opacity="0.05" fill="none" stroke="#959595" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
			<Header />
				{props.children}
			<Footer />


			</>
			
	)
}
