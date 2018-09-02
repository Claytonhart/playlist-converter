import React, { Component } from "react";
import { connect } from "react-redux";
import "./Uploaded.css";

class Uploaded extends Component {
  render() {
    return (
      <div className="uploaded-container">
        <h1>Link to new playlist: </h1>
        <a target="_blank" href={this.props.finalPlaylistUrl}>
          link
        </a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    finalPlaylistUrl: state.finalPlaylistUrl
  };
}

export default connect(
  mapStateToProps,
  null
)(Uploaded);
