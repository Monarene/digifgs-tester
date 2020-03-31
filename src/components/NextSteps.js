import React from "react";
import redband from "../images/redband.png";

function NextSteps() {
  return (
    <div>
      <div className="symptomscontainer steps">
        <h4 className="symptomstext">
          These are the next steps you should take!
        </h4>
        <div className="stepstext" style={{ paddingRight: "60px" }}>
          <h4 style={{ color: "#39f" }}>1.</h4>
          <h6>Stop going out,</h6>
          <h6>Dont go out to play</h6>
        </div>
        <div className="stepstext" style={{ paddingRight: "95px" }}>
          <h4 style={{ color: "#39f" }}>2.</h4>
          <h6>Start eating food</h6>
          <h6>Start chiling. </h6>
        </div>
        <div className="stepstext" style={{ paddingRight: "95px" }}>
          <h4 style={{ color: "#39f" }}>3.</h4>
          <h6>Make more calls,</h6>
          <h6>Stay with family</h6>
        </div>
      </div>
      <img src={redband} height="82px" width="100%" alt="" />
      <h4
        style={{
          width: "200px",
          position: "relative",
          bottom: "8vh",
          left: "10%",
          color: "white"
        }}
      >
        #StaySafe
      </h4>
    </div>
  );
}

export default NextSteps;
