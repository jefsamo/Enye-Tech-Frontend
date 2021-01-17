import React from "react";
import { BoxLoading } from "react-loadingg";

import Card from "../Card/Card";
import "./profileCard.css";

const ProfileCard = ({ profiles, loading }) => {
  if (loading === true) {
    return <BoxLoading color="#2A6AA0" />;
  } else {
    return (
      <div className="profile-list">
        {profiles.map((profile, i) => {
          return <Card profile={profile} key={i} />;
        })}
      </div>
    );
  }
};

export default ProfileCard;
