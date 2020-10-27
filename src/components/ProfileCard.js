import React from 'react'

const ProfileCard = (props) => (
    <div>
        <div
            className="card shadow rounded"
            style={{ maxWidth: "20rem" }}
          >
            <div className="card-header bg-dark">
              <img
                className="card-image-top rounded-circle"
                src={`data:image/jpeg;base64,${props.profile_image}`}
                alt="profile"
                width="80px"
                height="80px"
              />
            </div>

            <div className="card-body">
              <h2 className="card-title">Profile</h2>
              <p>First Name : {props.firstName}</p>
              <p>Last Name : {props.lastName}</p>
              <p>Age : {props.age}</p>
            </div>
          </div>
    </div>
);

export default ProfileCard