import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchProfile, deleteProfile } from "../../actions/index";

class ProfileDelete extends React.Component {
  componentDidMount() {
    this.props.fetchProfile(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteProfile(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.profile) {
      return "Are you sure you want to delete this profile?";
    }

    return `Are you sure you want to delete the profile of user: ${this.props.profile.name}`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { profile: state.profiles[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchProfile, deleteProfile })(
  ProfileDelete
);
