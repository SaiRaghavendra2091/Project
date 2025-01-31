import React, { Component } from "react";
import lifecycle from "./LifeCycle.png";
import "./App.css";
import ChildComponent1 from "./components/ChildComponent1";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showChild: true,
    };
    console.log("Parent: Inside Constructor");
  }

  componentDidMount() {
    console.log("Parent: Inside componentDidMount");
  }
  componentDidUpdate() {
    console.log("Parent: Inside componentDidUpdate");
  }
  render() {
    console.log("Parent: Inside render");
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <u>Life Cycle of React</u>
          </h1>
          <img src={lifecycle} className="App-logo" alt="logo" />
          <h1>Change in Count which will move to update Phase</h1>
          <h2>{this.state.count}</h2>
          <button
            onClick={() =>
              this.setState((prevState) => ({ count: prevState.count + 1 }))
            }
          >
            {" "}
            Increment{" "}
          </button>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
        <button
            onClick={() =>
              this.setState((prevState) => ({ showChild: !prevState.showChild }))
            }
          >
            {" "}
            Show/Hide{" "}
          </button>
        {this.state.showChild && <ChildComponent1 />}
      </div>
    );
  }
}

export default App;
