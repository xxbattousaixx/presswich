import React from "react";



// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import Footer3 from "components/footers/Footer3.js";
import HeaderIndex from "components/headers/HeaderIndex.js";
// Demo Sections for this page
// import Buttons from "components/index-page/Buttons.js";
// import Inputs from "components/index-page/Inputs.js";
// import Selects from "components/index-page/Selects.js";
// import Dropdowns from "components/index-page/Dropdowns.js";
// import Textarea from "components/index-page/Textarea.js";
// import Tags from "components/index-page/Tags.js";
// import Spinners from "components/index-page/Spinners.js";
// import CRTS from "components/index-page/CRTS.js";
// import Menus from "components/index-page/Menus.js";
// import Navbars from "components/index-page/Navbars.js";
// import NavigationPills from "components/index-page/NavigationPills.js";
// import ProgressBars from "components/index-page/ProgressBars.js";
// import Paginations from "components/index-page/Paginations.js";
// import Badges from "components/index-page/Badges.js";
// import Alerts from "components/index-page/Alerts.js";
// import Toasts from "components/index-page/Toasts.js";
// import PreFooters from "components/index-page/PreFooters.js";
// import Footers from "components/index-page/Footers.js";
// import Typography from "components/index-page/Typography.js";
// import Images from "components/index-page/Images.js";
// import Tables from "components/index-page/Tables.js";
// import Comments from "components/index-page/Comments.js";
// import Chat from "components/index-page/Chat.js";
// import Cards from "components/index-page/Cards.js";
// import Modals from "components/index-page/Modals.js";
// import DatePickers from "components/index-page/DatePickers.js";
// import TooltipsPopovers from "components/index-page/TooltipsPopovers.js";
// import FileUpload from "components/index-page/FileUpload.js";
// import Carousel from "components/index-page/Carousel.js";
// import NucleoIcons from "components/index-page/NucleoIcons.js";
import { Container, Button, Link } from "react-floating-action-button";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
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
      document.body.classList.remove("index-page");
    };
  });
  return (
    <>
      <DemoNavbar type="dark" />
      <div className="wrapper">
        
        <HeaderIndex />
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
        <Footer3 />
      </div>
    </>
  );
}

export default Index;
