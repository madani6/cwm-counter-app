import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    // count: 0
    value: this.props.value
  };

  //   constructor() {
  //     super();
  //     //   console.log("Constructor", this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = () => {
    // console.log("Increment Clicked", this);
    //obj.method();
    //function();
    // this.state.count++;
    // console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1});
  // };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // onClick={this.doHandleIncrement}
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : this.state.value;
  }
}
