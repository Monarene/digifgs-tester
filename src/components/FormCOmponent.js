import React, { Component } from "react";
import { Button } from "reactstrap";

class FormComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h5>Please Give Your contact details</h5>
        <h5>SO that NCDC can call you in case we need to test you</h5>
        <div className="form"></div>
        <form></form>
      </div>
    );
  }
}

export default FormComponent;
