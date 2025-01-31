import React, { Component } from "react";

export class GrandChildComponent1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("GrandChild: Inside Constructor");
  }
  componentDidMount() {
    console.log("GrandChild: Inside componentDidMount");
  }
  componentDidUpdate() {
    console.log("GrandChild: Inside componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("GrandChild: Inside componentWillUnmount");
  }
  render() {
    console.log("GrandChild: Inside Render");
    return (
      <div>
        <h3>Hello Welcome to GrandChildComponent1</h3>
      </div>
    );
  }
}

export default GrandChildComponent1;
