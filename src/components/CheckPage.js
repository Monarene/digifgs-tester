import React from "react";
import { Button } from "reactstrap";
import "../App.css";
import { Link } from "react-router-dom";

function CheckPage(props) {
  return (
    <div>
      <div className="checktextcontainer">
        <h4>COVID-19</h4>
        <h4>Testing Process</h4>
      </div>
      <h6 className="specify">Please Kindly specify below Who needs this</h6>
      <div className="buttoncontainer">
        <Link to="/sypmtoms1">
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
              padding: "20px"
            }}
            onClick={props.onclick}
          >
            Use for myself
          </Button>
        </Link>
        <Link to="/sypmtoms1">
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
            Use for someone else
          </Button>
        </Link>
      </div>
      <h6
        className="specify"
        style={{ color: "red", paddingTop: "5px", textAlign: "jutify" }}
      >
        Please note that this test doesn’t confirm whether you have the virus or
        not. This test is done independently by the Oyo State government and
        your details will not be shared with any third party other than NCDC.
      </h6>
    </div>
  );
}

export default CheckPage;
