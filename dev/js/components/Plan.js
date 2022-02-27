import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { actions } from "../actions/index";

class Plan extends Component {
  constructor(props) {
    super(props);

    this.actions = props.actions;
  }

  handleChange(plan) {
    this.actions.setPlanData(plan);
  }

  render() {
    return (
      <div className="rt-plan">
        <span>Choose Plans and check the redux store</span>
        <input
          type="radio"
          id="planA"
          name="plans"
          onClick={this.handleChange.bind(this, "Plan A")}
        />
        <label htmlFor="planA">Plan A</label>
        <input
          type="radio"
          id="planB"
          name="plans"
          onClick={this.handleChange.bind(this, "Plan B")}
        />
        <label htmlFor="planB">Plan B</label>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(Plan);
