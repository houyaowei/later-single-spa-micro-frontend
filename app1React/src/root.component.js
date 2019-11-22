import React from "react";
import ReactDom from "react-dom";
import {Provider, connect} from "react-redux";
import {HashRouter as Router,Route,Switch,Link} from "react-router-dom";
import Counter from "./counter";
import reactLogo from "../assets/react-logo.png";
import {ConfigProvider} from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import RenderRoute from "./router/RenderRouter"

const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/index",
    component: SecondRouter,
    children: [
      {
        path: "/index/sec",
        component: Home
      }
    ]
  }
];

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
      <ConfigProvider locale={zh_CN}>
      <div style={{
        marginTop: 60
      }}>
        <Router>
          <ul>
            <li>
              <Link to="/index">Index</Link>
            </li>
            <li>
              <Link to="/home">home</Link>
            </li>
          </ul>
          <Switch>
            {routes.map((route, i) => (
              <RenderRoute key={i} {...route} />
            ))}
          </Switch>
        </Router>
        </div>
        </ConfigProvider>
    );
  }
}
function Index() {
  return (
    <div>
      <h2>Index</h2>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>index二级路由</h2>
    </div>
  );
}
function SecondRouter({ routes }) {
  return (
    <div>
      <ul>    
        <li>
          <Link to="/index/sec">二级路由</Link>
        </li>
      </ul>
      <Switch>
        {routes.map((route, i) => (
          <RenderRoute key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}
