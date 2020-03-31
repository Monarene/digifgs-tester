import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
function Age() {
  return (
    <div className="symptomscontainer">
      <div className="symptomstext">
        <h5>In the last 2 weeks, which of these applies?</h5>
      </div>
      <div className="buttoncontainer">
        <Link to="/terminal">
          <Button
            color="primary"
            style={{
              width: "280px",
              borderRadius: "5px",
              textAlign: "left",
              marginTop: "20px",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "14px",
              padding: "20px",
              backgroundColor: "39f",
              color: "white"
            }}
          >
            I’ve met with someone that has been confirmed to have covid-19
          </Button>
        </Link>
        <Link to="/terminal">
          <Button
            color="secondary"
            style={{
              width: "280px",
              borderRadius: "5px",
              textAlign: "left",
              marginTop: "20px",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "14px",
              padding: "20px",
              backgroundColor: "#E0E0E0",
              color: "#333"
            }}
          >
            I’ve met with someone who has been showing active covid-19 symptoms
            but has not been tested
          </Button>
        </Link>
        <Link to="/terminal">
          <Button
            color="secondary"
            style={{
              width: "280px",
              borderRadius: "5px",
              textAlign: "left",
              marginTop: "20px",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "14px",
              padding: "20px",
              backgroundColor: "#E0E0E0",
              color: "#333"
            }}
          >
            I live with someone who has been confirmed to have Covid-19
          </Button>
        </Link>
        <Link to="/terminal">
          <Button
            color="secondary"
            style={{
              width: "280px",
              borderRadius: "5px",
              textAlign: "left",
              marginTop: "20px",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "14px",
              padding: "20px",
              backgroundColor: "#E0E0E0",
              color: "#333"
            }}
          >
            None
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Age;
