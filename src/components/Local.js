import React from "react";
import { Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

function Local() {
  return (
    <div className="symptomscontainer">
      <div className="symptomstext">
        Which local government area do you reside?
      </div>
      <div className="dropdowncontainer">
        <Input type="select" name="localgovt">
          <option>Akinyele</option>
          <option>Afijio</option>
          <option>Atiba</option>
          <option>Atisbo</option>
          <option>Egbeda</option>
          <option>Ibadan North-East</option>
          <option>Ibadan North</option>
          <option>Ibadan North-West</option>
          <option>Ibadan South-East</option>
          <option>Ibadan South-West</option>
          <option>Ibarapa Central</option>
          <option>Ibarapa East</option>
          <option>Ibarapa North</option>
          <option>Ido, Nigeria</option>
          <option>Irepo</option>
          <option>Iseyin</option>
          <option>Itesiwaju</option>
          <option>Iwajowa</option>
          <option>Kajola</option>
          <option>Lagelu, Oyo</option>
          <option>Ogbomosho North</option>
          <option>Ogbomosho South</option>
          <option>Ogo Oluwa</option>
          <option>Olorunsogo</option>
          <option>Oluyole, Nigeria</option>
          <option>Ona Ara</option>
          <option>Orelope</option>
          <option>Ori Ire</option>
          <option>Oyo East</option>
          <option>Oyo West</option>
          <option>Saki East</option>
          <option>Saki West</option>
          <option>Surulere, Oyo State</option>
        </Input>
      </div>
      <Link to="/age">
        <Button
          outline
          color="primary"
          style={{ marginTop: "40px", width: "208px" }}
        >
          NEXT
        </Button>
      </Link>
    </div>
  );
}

export default Local;
