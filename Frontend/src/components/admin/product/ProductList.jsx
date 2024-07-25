import React from 'react'

const ProductList = () => {
  return (
    <div className="page-content">
                <div className="container-fluid">
                        <div id="table-url" data-url="http://127.0.0.1:8000/admin/product"></div>

    <div className="row">
        <div className="col-md-12">
            <div className="breadcrumb__content">
                <div className="breadcrumb__content__left">
                    <div className="breadcrumb__title">
                        <h2>Product</h2>
                    </div>
                </div>
                <div className="breadcrumb__content__right">
                    <nav aria-label="breadcrumb">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="http://127.0.0.1:8000/admin/dashboard">Home</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Product</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-md-12">
            <div className="customers__area bg-style mb-30">
                <div className="customers__table">
                    <div id="ProductTable_wrapper" className="dataTables_wrapper no-footer">
                        <div className="dataTables_length" id="ProductTable_length">
                            <label>Show <select name="ProductTable_length" aria-controls="ProductTable" className="">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                </select> entries</label>
                                </div>
                                <div id="ProductTable_filter" className="dataTables_filter">
                                    <label>Search:<input type="search" className="" placeholder="" aria-controls="ProductTable" />
                                    </label>
                                    </div>
                                    <div id="ProductTable_processing" className="dataTables_processing" style={{display: 'none'}}>Processing...</div>
                                    
                                    <table id="ProductTable" className="row-border data-table-filter table-style dataTable no-footer" role="grid" aria-describedby="ProductTable_info" style={{width: '1427px'}}>
                        <thead>
                            <tr role="row">
                                <th className="sorting_asc" rowspan="1" colspan="1" aria-label="#" style={{width: '50px'}}>#</th>
                                
                                <th className="sorting" tabindex="0" aria-controls="ProductTable" rowspan="1" colspan="1" aria-label="Image: activate to sort column ascending" style={{width: '200px'}}>Image</th>
                                
                                <th className="sorting" tabindex="0" aria-controls="ProductTable" rowspan="1" colspan="1" aria-label="Product Name: activate to sort column ascending" style={{width: '180px'}}>Product Name</th>
                                
                                <th className="sorting" tabindex="0" aria-controls="ProductTable" rowspan="1" colspan="1" aria-label="Category: activate to sort column ascending" style={{width: '200px'}}>Category</th>
                                
                                <th className="sorting" tabindex="0" aria-controls="ProductTable" rowspan="1" colspan="1" aria-label="Brand: activate to sort column ascending" style={{width: '100px'}}>Brand</th>
                                
                                <th className="sorting" tabindex="0" aria-controls="ProductTable" rowspan="1" colspan="1" aria-label="Price: activate to sort column ascending" style={{width: '100px'}}>Price</th>
                                
                                <th className="sorting" tabindex="0" aria-controls="ProductTable" rowspan="1" colspan="1" aria-label="Type: activate to sort column ascending" style={{width: '100px'}}>Type</th>
                                
                                <th className="sorting" tabindex="0" aria-controls="ProductTable" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style={{width: '53px'}}>Status</th>
                                
                                <th className="sorting_disabled" rowspan="1" colspan="1" aria-label="Action" style={{width: '84px'}}>Action</th></tr>
                        </thead>

                        <tbody>
                        <tr role="row" className="odd">
                            <td className="sorting_1">1</td>
                            <td>
                                <img src="http://127.0.0.1:8000/uploaded_files/product_image/669a82d5d4a841721402069.jpg" border="0" width="50" className="img-rounded" align="center" />
                                </td>
                                
                                <td>Samsung A50s</td>
                                <td>Electronic</td>
                                <td>Samsung</td>
                                <td>
                                    <span className="badge admin-new-price text-success">120000.00</span>
                                    
                                    <span className="badge admin-old-price text-danger">120000.00</span>
                                    
                                    </td>
                                    
                                    <td>Physical</td>
                                    
                                    <td>
                                        
                                        <span className="status active">Active</span>
                                        </td>
                                        
                                        <td>
                                            
                                            <div className="action__buttons">
                                                
                                                <a href="http://127.0.0.1:8000/admin/product/edit/physical/13" className="btn-action">
                                                
                                                <i className="fa-solid fa-pen-to-square"></i>
                                                
                                                </a>
                                                
                                                <a href="http://127.0.0.1:8000/admin/product/inactive/13" className="btn-action">
                                                
                                                <i className="fas fa-toggle-on"></i>

                                                </a>
                                                
                                                <a href="http://127.0.0.1:8000/admin/product/delete/13" className="btn-action delete">
                                                
                                                <i className="fas fa-trash-alt"></i>
                                                
                                                </a>
                                                
                                                </div>
                                                
                                                </td>
                                                
                                                </tr>
                                                
                                                </tbody>

                    </table>
                    
                    <div className="dataTables_info" id="ProductTable_info" role="status" aria-live="polite">Showing 1 to 1 of 1 entries</div>
                    
                    <div className="dataTables_paginate paging_simple_numbers" id="ProductTable_paginate">
                        <a className="paginate_button previous disabled" aria-controls="ProductTable" data-dt-idx="0" tabindex="-1" id="ProductTable_previous">Previous</a>
                        
                        <span>
                            
                            <a className="paginate_button current" aria-controls="ProductTable" data-dt-idx="1" tabindex="0">1</a>
                            
                            </span>
                            
                            <a className="paginate_button next disabled" aria-controls="ProductTable" data-dt-idx="2" tabindex="-1" id="ProductTable_next">Next</a>
                            
                            </div>
                            
                            </div>
                </div>
            </div>
        </div>
    </div>
                    </div>
            </div>
  )
}

export default ProductList
