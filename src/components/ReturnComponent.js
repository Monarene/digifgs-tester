import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
function ReturnPage() {
  return (
    <div className="symptomscontainer">
      <div className="symptomstext">
        <h5>Have you recently returned to Nigeria in last 4 weeks?</h5>
      </div>
      <div className="buttoncontainer">
        <Link to="/local">
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
            YES, I’ve recently returned to Nigeria in the last 4 weeks.
          </Button>
        </Link>
        <Link to="/local">
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
            NO, I’ve not recently returned into Nigeria.{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ReturnPage;
