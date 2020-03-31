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
      <div>
        <h5 className="homepagetext" style={{ paddingTop: "30px" }}>
          How to prevent against Covid-19
        </h5>
      </div>
      <div className="homebutton">
        <Button aria-label="radio" outline color="primary">
          <a href="https://covid19.digifigs.com/">VISIT NOW</a>
        </Button>{" "}
      </div>
      <div>
        <h5 className="homepagetext" style={{ paddingTop: "30px" }}>
          Oyo state statistics
        </h5>
        <div style={{ paddingTop: "15px" }}>
          <h6
            className="homepagetext"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Confirmed: 8
          </h6>
          <h6
            className="homepagetext"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Active: 8
          </h6>
          <h6
            className="homepagetext"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Deaths: 0
          </h6>
          <h6
            className="homepagetext"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Recovered: 0
          </h6>
        </div>
        <div>
          <h5 className="homepagetext">Updates on Covid-19 in Oyo state</h5>
        </div>
        <div className="homebutton" style={{ paddingBottom: "30px" }}>
          <Button outline color="primary">
            <a href="https://covid19.digifigs.com/">VISIT NOW</a>
          </Button>{" "}
        </div>
      </div>
    </>
  );
}

export default HomePage;
