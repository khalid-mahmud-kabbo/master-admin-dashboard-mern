import React from 'react';
import { useUserStore } from '../../../../store/UserStore';
import API_DATA from '../../../../constants/en';
import { Link } from 'react-router-dom';

const Header = () => {

    const { isSidebarActive, setIsSidebarActive } = useUserStore();

  return (
    <header className="header__area">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <div className="header__navbar">
                    <div className="header__navbar__left">
                        <button className="sidebar-toggler" onClick={() => setIsSidebarActive(!isSidebarActive)}>
                            <img src={`${API_DATA.DOMAIN}/assets/icons/bars.svg`} alt="bars" />
                        </button>
                        <Link to={`${API_DATA.DOMAIN}`} target="_blank" className="btn btn-success text-white">Visit Site</Link>
                    </div>
                    <div className="header__navbar__right">
                        <ul className="header__menu">
                            <li>
                                <Link to={`${API_DATA.DOMAIN}`} className="btn btn-dropdown user-profile" data-bs-toggle="dropdown">
                                    <img src={`${API_DATA.DOMAIN}/uploaded_files/user.png`} alt="icon" />
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to={`${API_DATA.DOMAIN}/profile`}>
                                            <img src={`${API_DATA.DOMAIN}/assets/icons/user.svg`} alt="icon" />
                                            <span>Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={`${API_DATA.DOMAIN}/logout`} data-bs-toggle="modal" data-bs-target="#logoutModal">
                                            <img src={`${API_DATA.DOMAIN}/assets/icons/logout.svg`} alt="icon" />
                                            <span>Logout</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
  )
}

export default Header
