import { Component } from "react";
import "./index.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  handleIncrement() {
    this.setState({ counter: this.state.counter + 1 });
  }
  handleDecrement() {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <h1 className="heading">Counter</h1>
          <div className="counter">
            <button
              disabled={this.state.counter < 1}
              className="button"
              onClick={this.handleDecrement}
            >
              -
            </button>
            <span className="counter-value">{this.state.counter}</span>
            <button className="button" onClick={this.handleIncrement}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}
