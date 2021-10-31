import React, { Component } from "react";
import Profileimg from "./Profileimg.png";

class ProfilePhoto extends Component {
  render() {
    return (
      <div>
        <img src={Profileimg} />
      </div>
    );
  }
}

export default ProfilePhoto;
