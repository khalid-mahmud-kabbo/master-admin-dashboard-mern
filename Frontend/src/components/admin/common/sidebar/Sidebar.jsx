import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../../../../store/UserStore";
import API_DATA from "../../../../constants/en";
import MetisMenu from "@metismenu/react";
import "metismenu/dist/metisMenu.min.css";

const Sidebar = () => {
  const { isSidebarActive, setIsSidebarActive } = useUserStore();

  return (
    <div className={`sidebar__area ${isSidebarActive ? "active" : ""}`}>
      <div className="sidebar__close">
        <button
          className="close-btn"
          onClick={() => setIsSidebarActive(!isSidebarActive)}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="sidebar__brand">
        <Link to={`${API_DATA.DOMAIN}/admin/dashboard`}>
          <img
            src={`${API_DATA.DOMAIN}/uploaded_files/logo.png`}
            style={{ width: "80%" }}
            alt="icon"
          />
        </Link>
      </div>
      <ul id="sidebar-menu" className="sidebar__menu metismenu">
        <li>
          <Link to={`${API_DATA.DOMAIN}/admin/dashboard`} aria-expanded="true">
            <i className="fa-solid fa-gauge-high"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <MetisMenu>
          <li>
            <Link className="has-arrow" to="#" aria-expanded="">
              <i className="fa-solid fa-user"></i>
              <span>Manage Staff</span>
            </Link>
            <ul>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/add-staff`}>
                  <i className="fa fa-circle"></i>
                  <span>Add Staff</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/staffs`}>
                  <i className="fa fa-circle"></i>
                  <span>Staff List</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/roles`}>
                  <i className="fa fa-circle"></i>
                  <span>Roles</span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link className="has-arrow" to="#" aria-expanded="">
              <i className="fa-solid fa-blog"></i>
              <span>Blogs</span>
            </Link>
            <ul>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/add-blog`}>
                  <i className="fa fa-circle"></i>
                  <span>Add Blog</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/blogs`}>
                  <i className="fa fa-circle"></i>
                  <span>Blog List</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/category`}>
                  <i className="fa fa-circle"></i>
                  <span>Blog Category</span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link className="has-arrow" to="#" aria-expanded="">
              <i class="fa-solid fa-bullhorn"></i>
              <span>Marketing</span>
            </Link>
            <ul>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/subscribers`}>
                  <i className="fa fa-circle"></i>
                  <span>Subscribers</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/send-promotional-mail`}>
                  <i className="fa fa-circle"></i>
                  <span>Send Offers Mail</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/marketing-records`}>
                  <i className="fa fa-circle"></i>
                  <span>Marketing Records</span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link className="has-arrow" to="#" aria-expanded="">
              <i className="fa-solid fa-headset"></i>
              <span>Support</span>
            </Link>
            <ul>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/tickets`}>
                  <i className="fa fa-circle"></i>
                  <span>Tickets</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/department`}>
                  <i className="fa fa-circle"></i>
                  <span>Department</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/contact-box`}>
                  <i className="fa fa-circle"></i>
                  <span>Contact Box</span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link className="has-arrow" to="#" aria-expanded="">
              <i className="fa-solid fa-sliders"></i>
              <span>CMS</span>
            </Link>
            <ul>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/media-library`}>
                  <i className="fa fa-circle"></i>
                  <span>Media Library</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/manage-theme`}>
                  <i className="fa fa-circle"></i>
                  <span>Manage Theme</span>
                </Link>
              </li>
              <li className="active">
                <Link to={`${API_DATA.DOMAIN}/edit-header`}>
                  <i className="fa fa-circle"></i>
                  <span>Header Section</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/edit-footer`}>
                  <i className="fa fa-circle"></i>
                  <span>Footer Section</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/edit-pages`}>
                  <i className="fa fa-circle"></i>
                  <span>Pages</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/website-popup`}>
                  <i className="fa fa-circle"></i>
                  <span>Website Popup</span>
                </Link>
              </li>

              <li className="">
                <Link to={`${API_DATA.DOMAIN}/languages`}>
                  <i className="fa fa-circle"></i>
                  <span>Languages</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/currency`}>
                  <i className="fa fa-circle"></i>
                  <span>Currency</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/country`}>
                  <i className="fa fa-circle"></i>
                  <span>Country</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/state`}>
                  <i className="fa fa-circle"></i>
                  <span>State</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/city`}>
                  <i className="fa fa-circle"></i>
                  <span>City</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/custom-css`}>
                  <i className="fa fa-circle"></i>
                  <span>Custom Css</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/custom-js`}>
                  <i className="fa fa-circle"></i>
                  <span>Custom Js</span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link className="has-arrow" to="#" aria-expanded="">
              <i className="fa-solid fa-gear"></i>
              <span>Configurations</span>
            </Link>
            <ul>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/email-settings`}>
                  <i className="fa fa-circle"></i>
                  <span>Email Settings</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/email-templates`}>
                  <i className="fa fa-circle"></i>
                  <span>Email Templates</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/otp-settings`}>
                  <i className="fa fa-circle"></i>
                  <span>OTP Settings</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/payment-gateway`}>
                  <i className="fa fa-circle"></i>
                  <span>Payment Gateways</span>
                </Link>
              </li>

              <li className="">
                <Link to={`${API_DATA.DOMAIN}/google-setup`}>
                  <i className="fa fa-circle"></i>
                  <span>Google Setup</span>
                </Link>
              </li>

              <li className="">
                <Link to={`${API_DATA.DOMAIN}/facebook-pixel`}>
                  <i className="fa fa-circle"></i>
                  <span>Facebook Pixel</span>
                </Link>
              </li>

              <li className="">
                <Link to={`${API_DATA.DOMAIN}/firebase`}>
                  <i className="fa fa-circle"></i>
                  <span>Firebase</span>
                </Link>
              </li>

              <li className="">
                <Link to={`${API_DATA.DOMAIN}/chat-manager`}>
                  <i className="fa fa-circle"></i>
                  <span>Chat Manager</span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link className="has-arrow" to="#" aria-expanded="">
              <i className="fa-solid fa-briefcase"></i>
              <span>Utility</span>
            </Link>
            <ul>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/database-backup`}>
                  <i className="fa fa-circle"></i>
                  <span>Database Backup</span>
                </Link>
              </li>
              <li className="">
                <Link to={`${API_DATA.DOMAIN}/export-reports`}>
                  <i className="fa fa-circle"></i>
                  <span>Export Reports</span>
                </Link>
              </li>
            </ul>
          </li>
        </MetisMenu>
      </ul>
    </div>
  );
};

export default Sidebar;
