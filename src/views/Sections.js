import React from "react";

// reactstrap components

import { Container, Button, Link } from "react-floating-action-button";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";

// Section Components
import BlogsSection from "components/sections-page/BlogsSection.js";

function Sections() {
  React.useEffect(() => {
    document.body.classList.add("sections-page");
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
      document.body.classList.remove("sections-page");
    };
  });
  return (
    <>
      <DemoNavbar type="dark" />
      <div className="wrapper">
     
        <BlogsSection />
        <Container>
          <Link
            href="/contact-us"
            tooltip="Book online"
            icon="far fa-sticky-note"
          />
                <Link  href="tel:8137244100" tooltip="Call us" icon="fa fa-phone" />
    <Link href="mailto:shawn@wichpressfoodtruck.com" tooltip="Email us" icon="fa fa-envelope" />
          <Button
            tooltip="We cater!"
            icon="fas fa-plus"
            rotate={true}
            onClick={() => alert("Call us at 813-724-4100")}
          />
        </Container>
        <DemoFooter />
      </div>
    </>
  );
}

export default Sections;
