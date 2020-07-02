import React from "react";
import { connect } from "react-redux";
import { createProfile } from "../../actions";
import ProfileForm from "./ProfileForm";

class ProfileCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createProfile(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Profile</h3>
        <ProfileForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createProfile })(ProfileCreate);
