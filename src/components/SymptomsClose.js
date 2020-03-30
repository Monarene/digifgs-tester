import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function SymptomsClose() {
  return (
    <div className="symptomscontainer">
      <h5 className="symptomstext">Which of these symptoms do you have</h5>
      <h6 className="clickall">(Click all that apply)</h6>
      <div className="checkboxcontainer">
        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Sneezing</span>
          </label>
        </div>

        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Coughing</span>
          </label>
        </div>
        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Difficulty in breathing</span>
          </label>
        </div>

        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Dizziness</span>
          </label>
        </div>
      </div>
      <Link to="/form">
        <Button outline color="primary" style={{ marginTop: "20px" }}>
          NEXT
        </Button>
      </Link>
    </div>
  );
}

export default SymptomsClose;
