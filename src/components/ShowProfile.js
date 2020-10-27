import React from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";

class ShowProfile extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    age: "",
    imageName: "",
    profile_image: null,
  };

  onImageName = (e) => {
    this.setState({ imageName: e.target.value });
  };

  onSearchImage = (e) => {
    const imageName = this.state.imageName;

    axios
      .get("http://localhost:8080/api/v1/clients/" + imageName)
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            profile_image: res.data.picByte,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            age: res.data.age,
          });
        } else {
          console.log("failed");
        }
      });
  };

  render() {
    return (
      <div className="container jumbotron shadow bg-white rounded">
        <h4 className="text-center">Profile</h4>

        <h6>Search by First Name</h6>
        <input
          type="text"
          placeholder="First Name"
          onChange={this.onImageName}
        />
        <button className="btn btn-success" onClick={this.onSearchImage}>
          Search
        </button>

        {this.state.firstName && (
          <ProfileCard
            profile_image={this.state.profile_image}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            age={this.state.age}
          />
        )}
      </div>
    );
  }
}

export default ShowProfile;
