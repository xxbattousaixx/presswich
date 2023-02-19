import React from "react";

// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import { Container, Button, Link } from "react-floating-action-button";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import Footer3 from "components/footers/Footer3.js";
import Locations from "components/Locations.js";


function RegisterPage() {
  const [activeContainer, setActiveContainer] = React.useState("");
  const [signupNameFocus, setSignupNameFocus] = React.useState("");
  const [signupEmailFocus, setSignupEmailFocus] = React.useState("");
  const [signupPasswordFocus, setSignupPasswordFocus] = React.useState("");
  const [signinEmailFocus, setSigninEmailFocus] = React.useState("");
  const [signinPasswordFocus, setSigninPasswordFocus] = React.useState("");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  }, []);
  return (
    <><div style={{backgroundColor:'#D8DCD6'}}>
      <DemoNavbar type="dark" />
      {/* <div className="wrapper">
        <div className="page-header bg-default">
          
          <div
            className="page-header-image"
            style={{
              backgroundColor:
                "yellow",
            }}
          ><br/><br/><br/><br/>
                    <Row><Col md="6"> <a href="https://streetfoodfinder.com/WichPress"> <b style={{fontSize:"2rem"}}className="text-warning">WichPress Food Truck Locations Calendar</b></a>
       </Col> <Col md='6'>PRESS WICH FOOD TRUCK</Col> </Row>
          </div>
     
   
        </div> </div> */}<Col md='12'><Locations/></Col>
         <br/>
       <br/>
       <br/><br/>
       </div>
      
        <Footer3 />
     
    </>
  );
}

export default RegisterPage;
