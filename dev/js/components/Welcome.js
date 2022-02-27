import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
  }

  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  handleClick(eventName) {
    const { counter } = this.state;
    if (eventName == "plus") {
      if (counter < 5) {
        this.setState({
          counter: counter + 1,
        });
      }
    } else {
      this.setState({
        counter: counter - 1,
      });
    }
  }

  render() {
    return (
      <div className="rt-content">
        <p>
          <span>{this.props.name1}</span>
          &nbsp;
          <span>{this.props.name2}</span>
          &nbsp;
        </p>
        <span className="rt-counter-field">{this.state.counter}</span>
        <button
          className="rt-btn"
          onClick={this.handleClick.bind(this, "plus")}
        >
          Click to Increament
        </button>
        <button
          className="rt-btn"
          onClick={this.handleClick.bind(this, "minus")}
        >
          Click to Decreament
        </button>
        <Link to="/reduxdemo">Go to next</Link>
      </div>
    );
  }
}
