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
    <>
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
     
   
        </div> </div> */}<Locations/>
         <Container>
          <Link
            href="/contact-us"
            tooltip="Book online"
            icon="far fa-sticky-note"
          />
          <Link  href="mailto:shawn@wichpressfoodtruck.com" tooltip="Call us" icon="fa fa-phone" />
    <Link href="tel:8137244100" tooltip="Call us" icon="fa fa-envelope" />
          <Button
            tooltip="We cater!"
            icon="fas fa-plus"
            rotate={true}
            onClick={() => alert("Call us at 813-724-4100")}
          />
        </Container>
        <Footer3 />
     
    </>
  );
}

export default RegisterPage;
