import React from "react";

import {
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
    Container
  } from "reactstrap";
// Core Components
import Blogs2 from "components/blogs/Blogs2.js";
function Locations() {
  
  return (
    <> 
    <div style={{
                    backgroundImage:
                      "url(" + require("assets/img/boi.gif") + ")",
                  }} >
      <br/><br/><br/>
      <br/><br/><br/>
                   <Blogs2/>
                   </div>
    </>
  );
}

export default Locations;
