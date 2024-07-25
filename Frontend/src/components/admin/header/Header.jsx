import React from 'react';
import { useUserStore } from '../../../store/UserStore';
import API_DATA from '../../../constants/en';

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
                        <a href="http://127.0.0.1:8000" target="_blank" className="btn btn-primary text-white">Visit Site</a>
                    </div>
                    <div className="header__navbar__right">
                        <ul className="header__menu">
                            <li>
                                <a href="#" className="btn btn-dropdown user-profile" data-bs-toggle="dropdown">
                                    <img src="http://127.0.0.1:8000/uploaded_files/admin_profile/6693e25d6e1b91720967773.png" alt="icon" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="http://127.0.0.1:8000/admin/profile">
                                            <img src="http://127.0.0.1:8000/admin/images/icons/user.svg" alt="icon" />
                                            <span>Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#logoutModal">
                                            <img src="http://127.0.0.1:8000/admin/images/icons/logout.svg" alt="icon" />
                                            <span>Logout</span>
                                        </a>
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
