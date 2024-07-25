import React from 'react';

const Dashboard = () => {
  return (
        
            <div className="page-content">
                <div className="container-fluid">
                        <div className="row">
        <div className="col-md-12">
            <div className="breadcrumb__content">
                <div className="breadcrumb__content__left">
                    <div className="breadcrumb__title">
                        <h2 className='text-white'>Dashboard</h2>
                    </div>
                </div>
                <div className="breadcrumb__content__right">
                    <nav aria-label="breadcrumb">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="http://127.0.0.1:8000/admin/dashboard">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
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
                        <h2 className='heading2'>2</h2>
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
                        <h2 className='heading2'>0</h2>
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
                        <h2 className='heading2'>2</h2>
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
                    <h2>Yearly Sale</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>2</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-chart-bar fa-2x text-warning"></i>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2>Orders</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>1</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-shopping-cart fa-2x"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2>Pending Orders</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>0</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-shopping-cart fa-2x text-success"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2> Delivered Orders</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>1</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-shopping-cart fa-2x text-info"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2>Returned Orders</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>0</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-shopping-cart fa-2x text-warning"></i>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2>Total Earning</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>৳240,000.00</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-money-bill-wave fa-2x"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2>Today Earning</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>৳0.00</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-money-bill-wave fa-2x text-success"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2>July Earning</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>৳240,000.00</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-money-bill-wave fa-2x text-info"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2>Yearly Earning</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>৳240,000.00</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-shopping-cart fa-2x text-warning"></i>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2>Products</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>1</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-check-circle fa-2x"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2>Customers</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>5</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-check-circle fa-2x text-success"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2>Categories</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>2</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-check-circle fa-2x text-info"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2>Brands</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>4</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-check-circle fa-2x text-warning"></i>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2>Online Transactions</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>৳0.00</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-dollar-sign fa-2x"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2>Paypal Transactions</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>৳0.00</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-dollar-sign fa-2x text-success"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2>Stripe Transactions</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>৳0.00</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-dollar-sign fa-2x text-info"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2>Razorpay Transactions</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>৳0.00</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-dollar-sign fa-2x text-warning"></i>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2>Bank Transactions</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>৳0.00</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-dollar-sign fa-2x"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2>Reviews</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>1</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-comment-alt fa-2x text-success"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2>Blogs</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>6</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-blog fa-2x text-info"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="status__box-3 bg-style">
                <div className="item__left">
                    <h2>Subscribers</h2>
                    <div className="status__box__data">
                        <h2 className='heading2'>1</h2>
                    </div>
                </div>
                <div className="item__right">
                    <div className="status__box__img">
                        <i className="fas fa-users fa-2x text-warning"></i>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div className="row">
        <div className="col-md-6 mb-3">
            <div className="card transactions-chart-card">
                <div className="item-top card-header mb-30">
                    <h2 className="card-title">Transactions</h2>
                </div>
                <div className="card-body">
                    <div className="chart-container">
                        <canvas id="earnSource" width="731" height="375" style={{display: 'block', boxSizing: 'border-box', height: '300px', width: '584.8px'}}></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6 mb-3">
            <div className="card sales-ratio-chart-card">
                <div className="item-top card-header mb-30">
                    <h2 className="card-title">Sales Ratio</h2>
                </div>
                <div className="card-body">
                    <div className="chart-container">
                        <canvas id="salesRatio" width="731" height="375" style={{display: 'block', boxSizing: 'border-box', height: '300px', width: '584.8px'}}></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6 mb-3">
            <div className="card">
                <div className="item-top card-header mb-30">
                    <h2 className="card-title">July Sales</h2>
                </div>
                <div className="card-body">
                    <div className="chart-container">
                        <canvas id="multipleLineChart" width="731" height="187" style={{display: 'block', boxSizing: 'border-box', height: '149.6px', width: '584.8px'}}></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6 mb-3">
            <div className="card">
                <div className="item-top card-header mb-30">
                    <h2 className="card-title">July Earnings</h2>
                </div>
                <div className="card-body">
                    <div className="chart-container">
                        <canvas id="multipleLineChart2" width="731" height="187" style={{display: 'block', boxSizing: 'border-box', height: '149.6px', width: '584.8px'}}></canvas>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div id="transaction_pie" data-dt="[100,0,0,0,0]"></div>
    <div id="sales_ratio" data-dt="[100,0]"></div>

                    </div>
            </div>


        

   
  )
}

export default Dashboard
