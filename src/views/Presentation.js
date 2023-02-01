import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import Footer3 from "components/footers/Footer3.js";
import HeaderPresentation from "components/headers/HeaderPresentation.js";
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
      <DemoNavbar type="primary" />
      <div className="wrapper">
        <HeaderPresentation />
        
        <Footer3 />
      </div>
    </>
  );
}

export default Presentation;
