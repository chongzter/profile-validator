import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchProfile, editProfile } from "../../actions";
import ProfileForm from "./ProfileForm";

class ProfileEdit extends React.Component {
  componentDidMount() {
    this.props.fetchProfile(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editProfile(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.profile) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Profile</h3>
        <ProfileForm
          initialValues={_.pick(
            this.props.profile,
            "name",
            "age",
            "start",
            "end",
            "current",
            "job",
            "company",
            "description"
          )}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { profile: state.profiles[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchProfile, editProfile })(
  ProfileEdit
);
