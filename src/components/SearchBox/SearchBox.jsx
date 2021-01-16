import React from "react";
import "./searchBox.css";

const SearchBox = ({
  handleChange,
  handleGender,
  handlePayment,
  gender,
  paymentMethod,
}) => {
  return (
    <div className="search-container">
      <div className="bygender">
        <span>Filter By: </span>
        <select className="option" value={gender} onChange={handleGender}>
          <option value="">--Gender--</option>
          <option value={gender}>Male</option>
          <option value={gender}>Female</option>
          <option value={gender}>Prefer to skip</option>
        </select>
      </div>
      <div className="search">
        <input
          type="search"
          placeholder="Search by first Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <span>Filter By: </span>
        <select
          className="option"
          value={paymentMethod}
          onChange={handlePayment}
        >
          <option value="">--Payment Method--</option>
          <option value={paymentMethod}>paypal</option>
          <option value={paymentMethod}>check</option>
          <option value={paymentMethod}>money order</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBox;
