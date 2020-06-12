import React from "react";

const ProfileCard = ({ profile }) => {
  return (
    <div className="conmL">
      <div className="profileCard">
        <div className="divImg">
          {/* imgg */}
          <img src={profile.photo} alt="img" className="imgProf" />
          <p> {profile.name}</p>
          <p>
            <i className="fas fa-map-marker-alt" /> {profile.address}
          </p>
          {/* <button className="profEdit">Edit Your Profile</button> */}
        </div>

        <div className="profInfo">
          <h3>Description:</h3>
          <p>
            <span>Name: </span> {profile.name}
          </p>
          <p>
            <span>Email: </span>
            {profile.email}
          </p>
          <hr />
          <p>
            <i className="fas fa-home" />
            <span> address: </span>
            {profile.address}
          </p>
          <p>
            <i className="fas fa-phone-volume" />
            <span> Phone Number: </span>+972592126403
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
