import React from "react";
import "../App.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="screening" style={{ marginTop: "292px" }}>
        <h4 className="homepagetext">COVID-19</h4>
        <h4 className="homepagetext">Screening Platform</h4>
      </div>
      <div className="homebutton">
        <Link to="/check">
          <Button color="primary">TEST NOW</Button>{" "}
        </Link>
      </div>
    </>
  );
}

export default HomePage;
