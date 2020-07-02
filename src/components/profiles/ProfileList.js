import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProfiles } from "../../actions";

class ProfileList extends React.Component {
  componentDidMount() {
    this.props.fetchProfiles();
  }

  renderList() {
    return this.props.profiles.map((profile) => {
      return (
        <div className="item" key={profile.id}>
          <div className="right floated content">
            <Link
              to={`/profiles/edit/${profile.id}`}
              className="ui button primary "
            >
              Edit
            </Link>
            <Link
              to={`/profiles/delete/${profile.id}`}
              className="ui button negative"
            >
              Delete
            </Link>
          </div>
          <i className="large middle aligned icon user" />
          <div className="content">
            {profile.name}
            <div className="description">{profile.age}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Profiles</h2>
        <div className="ui celled list">{this.renderList()}</div>
        <div style={{ textAlign: "right" }}>
          <Link to="/profiles/new" className="ui button primary">
            Create Profile
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { profiles: Object.values(state.profiles) };
};

export default connect(mapStateToProps, { fetchProfiles })(ProfileList);
