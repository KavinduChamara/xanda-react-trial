import React from "react";
import "../sass/header.scss";
import Telephone from "../../public/assets/telephone.png";
import Flag from "../../public/assets/flag.png";

const Header = (props) => {
  return (
      <div className="header">
          <div className="header-item">
              <img className="header-icon" src={Telephone} /> 1337 1337 1337
          </div>
          <div className="header-item">
              <img className="header-icon" src={Flag} />Try another Castle
          </div> 
      </div>
  );
};
  
export default Header;