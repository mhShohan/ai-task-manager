import React from 'react';
import './singleProduct.css';
import { Link } from 'react-router-dom';
import Chart from '../../../charts/Chart';
import { productData } from '../../../data/productData';

export default function SingleProduct() {
    return (
        <div className="singleProduct">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/product/add">
                    <button className="addUserBtn">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart
                        data={productData}
                        dataKey="Sales"
                        title="Sales Performance"
                    />
                </div>
                <div className="productTopRight">
                    <div className="productInfo">
                        <div className="productInfoTop">
                            <img
                                src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg"
                                alt="MAC book pro"
                            />
                            <h1>MAC book pro</h1>
                        </div>
                        <div className="productInfoBottom">
                            <div className="productInfoItem">
                                <span>Id:</span>
                                <span>1234</span>
                            </div>
                            <div className="productInfoItem">
                                <span>Sales:</span>
                                <span>134</span>
                            </div>
                            <div className="productInfoItem">
                                <span>Active:</span>
                                <span>yes</span>
                            </div>
                            <div className="productInfoItem">
                                <span>In stock:</span>
                                <span>487</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom"></div>
        </div>
    );
}
