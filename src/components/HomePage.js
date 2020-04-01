import React from "react";
import "../App.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="screening" style={{ marginTop: "100px" }}>
        <h4 className="homepagetext">COVID-19</h4>
        <h4 className="homepagetext">Screening Platform</h4>
      </div>
      <div className="homebutton">
        <Link to="/check">
          <Button outline color="primary">
            TEST NOW
          </Button>{" "}
        </Link>
      </div>
      <div className="hometext">
        <h5 style={{ paddingTop: "30px" }}>
          How to prevent against Covid-19{" "}
          <a href="https://covid19.digifigs.com/">Visit now</a>
        </h5>
      </div>
      <div className="hometext">
        <h5 style={{ paddingTop: "10px" }}>
          Updates on Covid-19 in Oyo state{" "}
          <a href="https://covid19.digifigs.com/">Visit now</a>
        </h5>
      </div>

      <div>
        <h5 className="homepagetext" style={{ paddingTop: "30px" }}>
          Oyo state statistics
        </h5>
        <div style={{ paddingTop: "15px" }}>
          <h6
            className="homepagetext"
            style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
          >
            Confirmed: 8
          </h6>
          <h6
            className="homepagetext"
            style={{ fontSize: "20px", fontWeight: "bold", color: "orange" }}
          >
            Active: 8
          </h6>
          <h6
            className="homepagetext"
            style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
          >
            Deaths: 0
          </h6>
          <h6
            className="homepagetext"
            style={{ fontSize: "20px", fontWeight: "bold", color: "green" }}
          >
            Recovered: 0
          </h6>
        </div>
      </div>
    </>
  );
}

export default HomePage;
