import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import SymptopsOpen from "./SymptomsOpen";
import HomePage from "./HomePage";
import CheckPage from "./CheckPage";
import Form from "./FormCOmponent";
import SymptomsClose from "./SymptomsClose";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMe: false
    };

    this.handleIsMe = this.handleIsMe.bind(this);
  }

  handleIsMe() {
    this.setState({ isMe: !this.state.isMe });
  }

  render() {
    const CheckPager = () => {
      return <CheckPage onclick={this.handleIsMe} />;
    };

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/check" component={CheckPager} />
          <Route
            path="/sypmtoms1"
            component={() => <SymptopsOpen who={this.state.isMe} />}
          />
          <Route path="/symptoms2" component={SymptomsClose} />
          <Route path="/form" component={Form} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;
