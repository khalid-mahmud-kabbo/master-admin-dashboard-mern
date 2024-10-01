import React from "react";
import { Link } from "react-router-dom";
import API_DATA from "../../../constants/en";

const Dashboard = () => {
  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="breadcrumb__content">
              <div className="breadcrumb__content__left">
                <div className="breadcrumb__title">
                  <h2 className="text-white">Dashboard</h2>
                </div>
              </div>
              <div className="breadcrumb__content__right">
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-white" to={`${API_DATA.DOMAIN}/admin/dashboard`}>Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active text-white" aria-current="page">
                      Admin
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
              <div className="item__left">
                <h2>Total Sale</h2>
                <div className="status__box__data">
                  <h2 className="heading2">2</h2>
                </div>
              </div>
              <div className="item__right">
                <div className="status__box__img">
                  <i className="fas fa-chart-bar fa-2x"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
              <div className="item__left">
                <h2>Today Order</h2>
                <div className="status__box__data">
                  <h2 className="heading2">0</h2>
                </div>
              </div>
              <div className="item__right">
                <div className="status__box__img">
                  <i className="fas fa-chart-bar fa-2x text-success"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
              <div className="item__left">
                <h2>July Sale</h2>
                <div className="status__box__data">
                  <h2 className="heading2">2</h2>
                </div>
              </div>
              <div className="item__right">
                <div className="status__box__img">
                  <i className="fas fa-chart-bar fa-2x text-info"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
              <div className="item__left">
                <h2>July Sale</h2>
                <div className="status__box__data">
                  <h2 className="heading2">2</h2>
                </div>
              </div>
              <div className="item__right">
                <div className="status__box__img">
                  <i className="fas fa-chart-bar fa-2x text-info"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
