import React, { Component } from "react";
import GrandChildComponent1 from "./GrandChildComponent1";

export class ChildComponent1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGrandChild: true,
    };
    console.log("Child: Inside constructor");
  }
  componentDidMount() {
    console.log("Child: Inside componentDidMount");
  }
  componentDidUpdate() {
    console.log("Child: Inside ComponentDidUpdate");
  }
  componentWillUnmount() {
    console.log("Child: Inside componentWillUnmount");
  }
  render() {
    console.log("Child: Inside Render");
    return (
      <div>
        <h1> Hello this is Child Component 1</h1>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              showGrandChild: !prevState.showGrandChild,
            }))
          }
        >
          Show/Hide GrandChild
        </button>
        {this.state.showGrandChild && <GrandChildComponent1 />}
      </div>
    );
  }
}

export default ChildComponent1;
