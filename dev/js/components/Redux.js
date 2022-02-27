import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { actions } from "../actions/index";
import Plan from "./Plan";

class Redux extends Component {
  constructor(props) {
    super(props);

    this.actions = props.actions;
  }

  componentDidMount() {
    this.actions.getUserData(); // onload getting data
  }

  renderUsers(item, index) {
    return (
      <li key={index}>
        <span>{item.name}</span>
        &nbsp;
        <span>{item.phone}</span>
      </li>
    );
  }

  get list() {
    const { userInfo } = this.props;

    if (!userInfo.loaded) {
      return <div>Loading...</div>;
    }

    return (
      userInfo.data &&
      userInfo.data.map((item, index) => {
        return this.renderUsers(item, index);
      })
    );
  }

  render() {
    const { userInfo } = this.props;

    if (!userInfo) {
      return null;
    }

    return (
      <div className="rt-home">
        <h1 className="rt-header">Redux Example</h1>
        <div className="rt-content">
          <span>Sample User Lists from API</span>
          <ul>{this.list}</ul>
          <Plan />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userInfo: state.users };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
