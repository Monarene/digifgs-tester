import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
function Age() {
  return (
    <div className="symptomscontainer">
      <div className="symptomstext">
        <h5>How Old are you?</h5>
      </div>
      <div className="buttoncontainer">
        <Link to="/condition">
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
            Between 10 - 21 years old
          </Button>
        </Link>
        <Link to="/condition">
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
            Between 22 to 59 years old
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Age;
