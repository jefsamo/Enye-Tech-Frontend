import React from "react";
import "./card.css";

const Card = ({ profile }) => {
  return (
    <div className="card">
      <p className="fullName">{`${profile.FirstName} ${profile.LastName}`}</p>
      <p className="email">Email: {profile.Email}</p>
      <p className="phoneNumber">Phone No: {profile.PhoneNumber}</p>
      <p className="gender">Gender: {profile.Gender}</p>
      <p className="paymentMethod">Payment: {profile.PaymentMethod}</p>
    </div>
  );
};

export default Card;
