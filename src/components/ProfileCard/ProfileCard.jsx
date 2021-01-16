import React from "react";
import Card from "../Card/Card";
import "./profileCard.css";

const ProfileCard = ({ profiles }) => {
  return (
    <div className="profile-list">
      {profiles.map((profile, i) => {
        return <Card profile={profile} key={i} />;
      })}
    </div>
  );
};

export default ProfileCard;
