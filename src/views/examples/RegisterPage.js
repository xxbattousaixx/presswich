import React from "react";

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container,
} from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import Footer3 from "components/footers/Footer3.js";


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
      <div className="wrapper">
        <div className="page-header bg-default">
          
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/ill/register_bg.png") + ")",
            }}
          ><br/><br/><br/><br/>
                    <Row><Col md="12"> <a href="https://streetfoodfinder.com/WichPress"> <b style={{fontSize:"2rem"}}className="text-warning">WichPress Food Truck Locations Calendar</b></a>
       </Col>  </Row>
          </div>
         <iframe
              src="https://maps.google.com/maps?q=tampa%20international%20airport&t=&z=13&ie=UTF8&iwloc=&output=embed"
              height="400vh"
              width="100%"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="map"
            ></iframe>
   
        </div>

        <Footer3 />
      </div>
    </>
  );
}

export default RegisterPage;