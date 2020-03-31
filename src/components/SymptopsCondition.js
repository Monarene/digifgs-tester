import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function SymptomsCondtion() {
  return (
    <div className="symptomscontainer">
      <h5 className="symptomstext">
        Are you experiencing any of these symptoms?
      </h5>
      <h6 className="clickall">(Click all that apply)</h6>
      <div className="checkboxcontainer">
        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Fatigue or Tiredness</span>
          </label>
        </div>

        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Body aches</span>
          </label>
        </div>
        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Vomiting or Diarrhoea </span>
          </label>
        </div>

        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Dizziness</span>
          </label>
        </div>
        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Persistent Cough</span>
          </label>
        </div>
        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Sore Throat</span>
          </label>
        </div>
        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>
              Moderate Difficulty in breathing{" "}
            </span>
          </label>
        </div>
        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Fever or Sweating</span>
          </label>
        </div>
        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Catarrh</span>
          </label>
        </div>
        <div className="checkboxdiv">
          <label style={{ marginTop: "20px", marginLeft: "30px" }}>
            <input type="checkbox" className="thischeckbox" />
            <span style={{ paddingLeft: "10px" }}>Headache</span>
          </label>
        </div>
      </div>
      <Link to="/meeting">
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

export default SymptomsCondtion;
