import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class FormComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="symptomscontainer">
        <h5 className="contactdetails">Please Give Your contact details!</h5>
        <h5 className="ncdcreach">
          So that NCDC can call you in case we need to test you
        </h5>
        <div className="form"></div>
        <form className="contactform">
          <label for="firstname" className="formlabel">
            First Name
          </label>
          <input type="text" id="firstname" placeholder="John"></input>

          <label for="firstname" className="formlabel">
            Phone Number
          </label>
          <input type="text" id="number" placeholder="0800 123 4567"></input>
        </form>
        <Link to="/nextsteps">
          <Button
            outline
            color="primary"
            style={{ marginTop: "30px", width: "208px" }}
          >
            NEXT
          </Button>
        </Link>
      </div>
    );
  }
}

export default FormComponent;
