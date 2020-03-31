import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function Terminal() {
  return (
    <div className="symptomscontainer">
      <h5 className="symptomstext">Do you have any of these illnesses</h5>
      <h6 className="clickall">(Click all that apply)</h6>
      <div className="checkboxcontainer">
        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Diabetes</span>
          </label>
        </div>

        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Chronic Kidney Disease</span>
          </label>
        </div>
        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Asthma</span>
          </label>
        </div>

        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Cirrhosis of the liver</span>
          </label>
        </div>
        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Obesity</span>
          </label>
        </div>
        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>
              Congestive Heart failure
            </span>
          </label>
        </div>
        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Cancer</span>
          </label>
        </div>
        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px", fontSize: "14px" }}>
              Chronic Obstructive pulmonary Disease
            </span>
          </label>
        </div>
        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Cardiovascular Disease</span>
          </label>
        </div>
      </div>
      <Link to="/form">
        <Button
          outline
          color="primary"
          style={{ marginTop: "20px", width: "208px" }}
        >
          NEXT
        </Button>
      </Link>
    </div>
  );
}

export default Terminal;
