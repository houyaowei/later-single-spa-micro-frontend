import React from "react";
import ReactDom from "react-dom";
import {Provider, connect} from "react-redux";
import {HashRouter as Router,Route,Switch,Link} from "react-router-dom";
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
        
        <Router>
          <ul>
            <li>
              <Link to="/Index">Index</Link>
            </li>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/manage">manage</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/Index">
              <Home />
            </Route>
            <Route path="/home">
              <About />
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
