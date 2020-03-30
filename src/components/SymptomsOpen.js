import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function SymptomsOpen(props) {
  return (
    <>
      <div>
        {props.who ? (
          <div className="symptomscontainer">
            <div className="questioncontainer">
              <h5 className="symptomstext">
                Do you have any of these symptoms
              </h5>
              <div>
                <ul style={{ paddingRight: "30px" }}>
                  <li>Coughing</li>
                  <li>Breathing issues</li>
                  <li>Constant Chest pain</li>
                  <li>Fatigue or Dizziness</li>
                  <li>Slurred speech</li>
                </ul>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link to="/symptoms2">
                <Button
                  outline
                  color="primary"
                  style={{
                    width: "280px",
                    borderRadius: "5px",
                    textAlign: "left",
                    marginTop: "15px",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "14px",
                    padding: "20px"
                  }}
                >
                  I have one of these symptoms
                </Button>
              </Link>
              <Link to="/symptoms2">
                <Button
                  outline
                  color="primary"
                  style={{
                    width: "280px",
                    borderRadius: "5px",
                    textAlign: "left",
                    marginTop: "15px",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "14px",
                    padding: "20px"
                  }}
                >
                  I have none of these symptoms
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="symptomscontainer">
            <div className="questioncontainer">
              <h5 className="symptomstext">
                Does your friend have any of these symptoms
              </h5>
              <div>
                <ul style={{ paddingRight: "30px" }}>
                  <li>Coughing</li>
                  <li>Breathing issues</li>
                  <li>Constant Chest pain</li>
                  <li>Fatigue or Dizziness</li>
                  <li>Slurred speech</li>
                </ul>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link to="/symptoms2">
                <Button
                  outline
                  color="primary"
                  style={{
                    width: "280px",
                    borderRadius: "5px",
                    textAlign: "left",
                    marginTop: "15px",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "14px",
                    padding: "20px"
                  }}
                >
                  I have one of these symptoms
                </Button>
              </Link>
              <Link to="/symptoms2">
                <Button
                  outline
                  color="primary"
                  style={{
                    width: "280px",
                    borderRadius: "5px",
                    textAlign: "left",
                    marginTop: "15px",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "14px",
                    padding: "20px"
                  }}
                >
                  I have none of these symptoms
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SymptomsOpen;
