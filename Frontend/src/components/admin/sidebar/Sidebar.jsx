import React from 'react'
import './style.css'

const Sidebar = () => {
  return (
    <div className="vertical-menu">
   <div data-simplebar="true" className="h-100">
      <div data-simplebar="init" className="simplebar-scrollable-y" style={{maxHeight: '100%'}}>
         <div className="simplebar-wrapper" style={{margin: '0px'}}>
            <div className="simplebar-height-auto-observer-wrapper">
               <div className="simplebar-height-auto-observer"></div>
            </div>
            <div className="simplebar-mask">
               <div className="simplebar-offset" style={{right: '0px', bottom: '0px'}}>
                  <div className="simplebar-content-wrapper mm-show" tabindex="0" role="region" aria-label="scrollable content" style={{height: 'auto', overflow: 'hidden scroll'}}>
                     <div className="simplebar-content mm-show mm-active" style={{padding: '0px'}}>
                        <div id="sidebar-menu" className="mm-active">
                           <ul className="metismenu list-unstyled mm-show mm-active" id="side-menu">
                              <li className="menu-title">Menu </li>
                              <li className="mm-active">
                                 <a className="active" href="/admin/dashboard">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home ">
                                       <g>
                                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                       </g>
                                    </svg>
                                    <span>Dashboard</span>
                                 </a>
                              </li>
                              <li className="">
                                 <a className="has-arrow mm-collapsed" href="/" aria-expanded="false">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-grid ">
                                       <g>
                                          <rect x="3" y="3" width="7" height="7"></rect>
                                          <rect x="14" y="3" width="7" height="7"></rect>
                                          <rect x="14" y="14" width="7" height="7"></rect>
                                          <rect x="3" y="14" width="7" height="7"></rect>
                                       </g>
                                    </svg>
                                    <span>Apps</span>
                                 </a>
                                 <ul className="sub-menu mm-collapse">
                                    <li className=""><a href="/admin/dashboard" className="">Calendar</a></li>
                                    <li><a href="/admin/dashboard">Chat</a></li>
                                    
                                 </ul>
                              </li>
                              <li className="">
                                 <a className="has-arrow mm-collapsed" href="/" aria-expanded="false">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users ">
                                       <g>
                                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                          <circle cx="9" cy="7" r="4"></circle>
                                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                       </g>
                                    </svg>
                                    <span>Authentication</span>
                                 </a>
                                 <ul className="sub-menu mm-collapse">
                                    <li><a href="/page-login">Login</a></li>
                                    <li><a href="/page-register">Register</a></li>
                                    <li><a href="/page-recoverpw">Recover Password</a></li>
                                    <li><a href="/page-lock-screen">Lock Screen</a></li>
                                    <li><a href="/page-logout">Log Out</a></li>
                                    <li><a href="/page-confirm-mail">Confirm Mail</a></li>
                                    <li><a href="/page-email-verification">Email Verification</a></li>
                                    <li><a href="/page-two-step-verification">Two Step Verification</a></li>
                                 </ul>
                              </li>
                              <li>
                                 <a className="has-arrow" href="/" aria-expanded="false">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text ">
                                       <g>
                                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                          <polyline points="14 2 14 8 20 8"></polyline>
                                          <line x1="16" y1="13" x2="8" y2="13"></line>
                                          <line x1="16" y1="17" x2="8" y2="17"></line>
                                          <polyline points="10 9 9 9 8 9"></polyline>
                                       </g>
                                    </svg>
                                    <span>Pages</span>
                                 </a>
                                 <ul className="sub-menu mm-collapse">
                                    <li><a href="/pages-starter">Starter Page</a></li>
                                    <li><a href="/pages-maintenance">Maintenance</a></li>
                                    <li><a href="/pages-comingsoon">Coming Soon</a></li>
                                    <li><a href="/pages-timeline">Timeline</a></li>
                                    <li><a href="/pages-faqs">FAQs</a></li>
                                    <li><a href="/pages-pricing">Pricing</a></li>
                                    <li><a href="/pages-404">Error 404</a></li>
                                    <li><a href="/pages-500">Error 500</a></li>
                                 </ul>
                              </li>
                              <li className="menu-title">Elements</li>
                              <li>
                                 <a className="has-arrow" href="/" aria-expanded="false">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-briefcase ">
                                       <g>
                                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                       </g>
                                    </svg>
                                    <span>Components</span>
                                 </a>
                                 <ul className="sub-menu mm-collapse">
                                    <li><a href="/ui-alerts">Alerts</a></li>
                                    <li><a href="/ui-buttons">Buttons</a></li>
                                    <li><a href="/ui-cards">Cards</a></li>
                                    <li><a href="/ui-carousel">Carousel</a></li>
                                    <li><a href="/ui-dropdowns">Dropdowns</a></li>
                                    <li><a href="/ui-grid">Grid</a></li>
                                    <li><a href="/ui-images">Images</a></li>
                                    <li><a href="/ui-modals">Modals</a></li>
                                    <li><a href="/ui-offcanvas">Offcanvas</a></li>
                                    <li><a href="/ui-progressbars">Progress Bars</a></li>
                                    <li><a href="/ui-placeholders">Placeholders</a></li>
                                    <li><a href="/ui-tabs-accordions">Tabs &amp; Accordions</a></li>
                                    <li><a href="/ui-typography">Typography</a></li>
                                    <li><a href="/ui-toasts">Toasts</a></li>
                                    <li><a href="/ui-video">Video</a></li>
                                    <li><a href="/ui-general">General</a></li>
                                    <li><a href="/ui-colors">Colors</a></li>
                                    <li><a href="/ui-utilities">Utilities</a></li>
                                 </ul>
                              </li>
                              <li>
                                 <a className="has-arrow" href="/" aria-expanded="false">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-gift ">
                                       <g>
                                          <polyline points="20 12 20 22 4 22 4 12"></polyline>
                                          <rect x="2" y="7" width="20" height="5"></rect>
                                          <line x1="12" y1="22" x2="12" y2="7"></line>
                                          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                                          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                                       </g>
                                    </svg>
                                    <span>Extended</span>
                                 </a>
                                 <ul className="sub-menu mm-collapse">
                                    <li><a href="/extended-lightbox">Lightbox</a></li>
                                    <li><a href="/extended-rangeslider">Range Slider</a></li>
                                    <li><a href="/extended-session-timeout">Session Timeout</a></li>
                                    <li><a href="/extended-rating">Rating</a></li>
                                    <li><a href="/extended-notifications">Notifications</a></li>
                                 </ul>
                              </li>
                              <li className="">
                                 <a className="mm-collapsed" href="/" aria-expanded="false">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-box ">
                                       <g>
                                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                          <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                       </g>
                                    </svg>
                                    <span className="badge rounded-pill badge-soft-danger text-danger float-end">7</span><span>Forms</span>
                                 </a>
                                 <ul className="sub-menu mm-collapse">
                                    <li className=""><a href="/form-elements" className="">Basic Elements</a></li>
                                    <li className=""><a href="/form-validation" className="">Validation</a></li>
                                    <li className=""><a href="/form-advanced" className="">Advanced Plugins</a></li>
                                    <li className=""><a href="/form-editors" className="">Editors</a></li>
                                    <li><a href="/form-uploads">File Upload </a></li>
                                    <li><a href="/form-wizard">Form Wizard</a></li>
                                    <li className=""><a href="/form-mask" className="">Form Mask</a></li>
                                 </ul>
                              </li>
                              <li>
                                 <a className="has-arrow" href="/" aria-expanded="false">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sliders ">
                                       <g>
                                          <line x1="4" y1="21" x2="4" y2="14"></line>
                                          <line x1="4" y1="10" x2="4" y2="3"></line>
                                          <line x1="12" y1="21" x2="12" y2="12"></line>
                                          <line x1="12" y1="8" x2="12" y2="3"></line>
                                          <line x1="20" y1="21" x2="20" y2="16"></line>
                                          <line x1="20" y1="12" x2="20" y2="3"></line>
                                          <line x1="1" y1="14" x2="7" y2="14"></line>
                                          <line x1="9" y1="8" x2="15" y2="8"></line>
                                          <line x1="17" y1="16" x2="23" y2="16"></line>
                                       </g>
                                    </svg>
                                    <span>Tables</span>
                                 </a>
                                 <ul className="sub-menu mm-collapse">
                                    <li><a href="/tables-basic">Bootstrap Basic</a></li>
                                    <li><a href="/tables-datatable">DataTables</a></li>
                                    <li><a href="/tables-responsive">Responsive</a></li>
                                    <li><a href="/tables-editable">Editable</a></li>
                                 </ul>
                              </li>
                              <li>
                                 <a className="has-arrow" href="/" aria-expanded="false">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-pie-chart ">
                                       <g>
                                          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                                          <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                                       </g>
                                    </svg>
                                    <span>Charts</span>
                                 </a>
                                 <ul className="sub-menu mm-collapse">
                                    <li><a href="/charts-apex">Apexcharts</a></li>
                                    <li><a href="/charts-echart">Echarts</a></li>
                                    <li><a href="/charts-chartjs">Chartjs</a></li>
                                 </ul>
                              </li>
                              <li>
                                 <a className="has-arrow" href="/" aria-expanded="false">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-cpu ">
                                       <g>
                                          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                                          <rect x="9" y="9" width="6" height="6"></rect>
                                          <line x1="9" y1="1" x2="9" y2="4"></line>
                                          <line x1="15" y1="1" x2="15" y2="4"></line>
                                          <line x1="9" y1="20" x2="9" y2="23"></line>
                                          <line x1="15" y1="20" x2="15" y2="23"></line>
                                          <line x1="20" y1="9" x2="23" y2="9"></line>
                                          <line x1="20" y1="14" x2="23" y2="14"></line>
                                          <line x1="1" y1="9" x2="4" y2="9"></line>
                                          <line x1="1" y1="14" x2="4" y2="14"></line>
                                       </g>
                                    </svg>
                                    <span>Icons</span>
                                 </a>
                                 <ul className="sub-menu mm-collapse">
                                    <li><a href="/icons-boxicons">Boxicons</a></li>
                                    <li><a href="/icons-materialdesign">Material Design</a></li>
                                    <li><a href="/icons-dripicons">Dripicons</a></li>
                                    <li><a href="/icons-fontawesome">Font awesome</a></li>
                                 </ul>
                              </li>
                              <li>
                                 <a className="has-arrow" href="/" aria-expanded="false">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map ">
                                       <g>
                                          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                                          <line x1="8" y1="2" x2="8" y2="18"></line>
                                          <line x1="16" y1="6" x2="16" y2="22"></line>
                                       </g>
                                    </svg>
                                    <span>Maps</span>
                                 </a>
                                 <ul className="sub-menu mm-collapse">
                                    <li><a href="/maps-google">Google</a></li>
                                    <li><a href="/maps-vector">Vector</a></li>
                                    <li><a href="/maps-leaflet">Leaflet</a></li>
                                 </ul>
                              </li>
                             
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="simplebar-placeholder" style={{width: '249px', height: '945px'}}></div>
         </div>
         <div className="simplebar-track simplebar-horizontal" style={{visibility: 'hidden'}}>
            <div className="simplebar-scrollbar" style={{width: '0px', display: 'none'}}></div>
         </div>
         <div className="simplebar-track simplebar-vertical" style={{visibility: 'visible'}}>
            <div className="simplebar-scrollbar" style={{height: '103px', transform: 'translate3d(0px, 0px, 0px)', display: 'block'}}></div>
         </div>
      </div>
   </div>
</div>
  )
}

export default Sidebar
