import React from "react";
import ReactDom from "react-dom";
import {Provider, connect} from "react-redux";

import Counter from "./counter";
import reactLogo from "../assets/react-logo.png";

export default class Root extends React.Component {
  state = {
    store: this.props.store,
    globalEventDistributor: this.props.globalEventDistributor
  };

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    // let ret = <div />; if (this.state.store && this.state.globalEventDistributor)
    // {   ret = (     <Provider store={this.state.store}>       {" "}       <div
    //      style={{           marginTop: 100         }}       >         {" "}
    //   <img src={reactLogo} style={{ width: 100 }} />         React project
    // </div>     </Provider>   ); } return ret;

    return (
      <div style={{
        marginTop: 60
      }}>
        <ul>
        <li><a href="#/name">name</a></li>
        <li><a href="#/age">age</a></li>
        <li>address</li>
        </ul>

      </div>
    );
  }
}
