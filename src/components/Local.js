import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

function Local() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <div className="symptomscontainer">
      <div className="symptomstext">
        Which local government area do you reside?
      </div>
      <div className="dropdowncontainer">
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret color="primary">
            Local Government
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem divider />
            <DropdownItem>Akinyele</DropdownItem>
            <DropdownItem>Afijio</DropdownItem>
            <DropdownItem>Atiba</DropdownItem>
            <DropdownItem>Atisbo</DropdownItem>
            <DropdownItem>Egbeda</DropdownItem>
            <DropdownItem>Ibadan North-East</DropdownItem>
            <DropdownItem>Ibadan North</DropdownItem>
            <DropdownItem>Ibadan North-West</DropdownItem>
            <DropdownItem>Ibadan South-East</DropdownItem>
            <DropdownItem>Ibadan South-West</DropdownItem>
            <DropdownItem>Ibarapa Central</DropdownItem>
            <DropdownItem>Ibarapa East</DropdownItem>
            <DropdownItem>Ibarapa North</DropdownItem>
            <DropdownItem>Ido, Nigeria</DropdownItem>
            <DropdownItem>Irepo</DropdownItem>
            <DropdownItem>Iseyin</DropdownItem>
            <DropdownItem>Itesiwaju</DropdownItem>
            <DropdownItem>Iwajowa</DropdownItem>
            <DropdownItem>Kajola</DropdownItem>
            <DropdownItem>Lagelu, Oyo</DropdownItem>
            <DropdownItem>Ogbomosho North</DropdownItem>
            <DropdownItem>Ogbomosho South</DropdownItem>
            <DropdownItem>Ogo Oluwa</DropdownItem>
            <DropdownItem>Olorunsogo</DropdownItem>
            <DropdownItem>Oluyole, Nigeria</DropdownItem>
            <DropdownItem>Ona Ara</DropdownItem>
            <DropdownItem>Orelope</DropdownItem>
            <DropdownItem>Ori Ire</DropdownItem>
            <DropdownItem>Oyo East</DropdownItem>
            <DropdownItem>Oyo West</DropdownItem>
            <DropdownItem>Saki East</DropdownItem>
            <DropdownItem>Saki West</DropdownItem>
            <DropdownItem>Surulere, Oyo State</DropdownItem>
          </DropdownMenu>
        </Dropdown>
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
