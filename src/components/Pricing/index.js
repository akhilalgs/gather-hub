import React from "react";
import "./index.css";
import Navbar from "../Navbar";

const Price = () => {
  return (
    <>
    <Navbar/>
    <div className="price-main-container">
      <div className="price-names-container">
        <h1 className="price-names-heading">Ad Free</h1>
        <h1 className="price-names-heading">Unlimited Views</h1>
        <h1 className="price-names-heading">Fuel Surcharge Calculator</h1>
        <h1 className="price-names-heading">Driving Time</h1>
        <h1 className="price-names-heading">Backhaul</h1>
        <h1 className="price-names-heading">Days to pay $ Credit Score</h1>
        <h1 className="price-names-heading">30-Day Rate Check</h1>
        <h1 className="price-names-heading">1,7,15-Day rate check</h1>
        <h1 className="price-names-heading">Load Density Report</h1>
        <h1 className="price-names-heading">Capacity indicator</h1>
        <h1 className="price-names-heading">Historical Trend</h1>
        <h1 className="price-names-heading">Toll Charge Estimate</h1>
      </div>
      <div className="price-tags-container">
        <div className="price-tag">
          <div className="tag-name-container">
            <div className="price-details">
              <h1 className="tag-heading">Basic</h1>
              <h1 className="tag-price">₹ 2,999 1,499/Year </h1>
              <h1 className="tag-price">₹ 399 199/Month </h1>
            </div>
            <div className="img-container">
              {/* <img src={card} className="card-img" alt="price-img" /> */}
              <h1 className="discount-name">50% Discount</h1>
            </div>
          </div>
          <div className="button-container">
            <button className="buy-button">Buy now</button>
          </div>
        </div>
        <div className="price-tag">
          <div className="tag-name-container">
            <div className="price-details">
              <h1 className="tag-heading">Standard</h1>
              <h1 className="tag-price">₹ 4,999 2,499/Year </h1>
              <h1 className="tag-price">₹ 599 399/Month </h1>
            </div>
            <div className="img-container">
              {/* <img src={card} className="card-img" alt="price-img" /> */}
              <h1 className="discount-name">50% Discount</h1>
            </div>
          </div>
          <div className="button-container">
            <button className="buy-button">Buy now</button>
          </div>
        </div>
        <div className="price-tag">
          <div className="tag-name-container">
            <div className="price-details">
              <h1 className="tag-heading">Professional</h1>
              <h1 className="tag-price">₹ 6,999 3,999/Year </h1>
              <h1 className="tag-price">₹ 799 599/Month </h1>
            </div>
            <div className="img-container">
              {/* <img src={card} className="card-img" alt="price-img" /> */}
              <h1 className="discount-name">50% Discount</h1>
            </div>
          </div>
          <div className="button-container">
            <button className="buy-button">Buy now</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
 
export default Price;