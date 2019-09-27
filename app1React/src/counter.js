import React from "react";
import { connect } from "react-redux";
import { Button, Card, Avatar } from "antd";

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  globalIncrement = () => {
    this.props.globalEventDistributor.dispatch({ type: "INCREMENT" });
  };

  globalDecrement = () => {
    this.props.globalEventDistributor.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div style={{ margin: "0px 40%" }}>
        <br />
        <div>
          <div style={{ marginLeft: "30" }}>
            <Avatar style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }} size="large">
              {this.props.count}
            </Avatar>
          </div>
          <br />
          <Card title="本地" style={{ width: 300 }}>
            <Button type="primary" onClick={this.increment}>
              增加
            </Button>
            &nbsp;&nbsp;
            <Button onClick={this.decrement}>减小</Button>
          </Card>
          <br />
          <Card title="全局" style={{ width: 300 }}>
            <Button type="primary" onClick={this.globalIncrement}>
              增加
            </Button>
            <Button onClick={this.globalDecrement}>减少</Button>
          </Card>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
