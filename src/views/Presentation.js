import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";
import { Container, Button, Link } from "react-floating-action-button";
// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import Footer3 from "components/footers/Footer3.js";
import HeaderPresentation from "components/headers/HeaderPresentation.js";
import BasicComponents from "components/presentation-page/BasicComponents";


// Sections for this page

function Presentation() {
  React.useEffect(() => {
    document.body.classList.add("presentation-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (
      window.location.href.lastIndexOf("#") > 0 &&
      document.getElementById(href)
    ) {
      document.getElementById(href).scrollIntoView();
    }
    return function cleanup() {
      document.body.classList.remove("presentation-page");
    };
  });
  return (
    <>
      <DemoNavbar type="dark" />
      <div className="wrapper">
        
        <HeaderPresentation />
        <BasicComponents/>
       <Container>
          <Link
            href="/contact-us"
            tooltip="Book online"
            icon="far fa-sticky-note"
          />
          <Link  href="mailto:shawn@wichpressfoodtruck.com" tooltip="Call us" icon="fa fa-phone" />
    <Link href="tel:8137244100" tooltip="Email us" icon="fa fa-envelope" />
          <Button
            tooltip="We cater!"
            icon="fas fa-plus"
            rotate={true}
            onClick={() => alert("Call us at 813-724-4100")}
          />
        </Container>
        <Footer3 />
      </div>
    </>
  );
}

export default Presentation;
