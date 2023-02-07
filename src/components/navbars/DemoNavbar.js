import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Lottie from 'react-lottie';
import animationData from 'assets/lotties/food-truck.json';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

function DemoNavbar(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const [collapseOpen, toggleCollapse] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("dark-navbar-main"));
    // initialise
    headroom.init();
  });
  let navbarType = "";
  switch (props.type) {
    case "dark":
      navbarType = "bg-default navbar-dark";
      break;
    case "transparent":
      navbarType = "navbar-transparent";
      break;
    case "primary":
      navbarType = "bg-primary navbar-dark";
      break;
    case "white":
      navbarType = "bg-white";
      break;
    default:
      navbarType = "bg-default navbar-dark";
      break;
  }
  return (
    <>
      <Navbar
        className={"navbar-main headroom " + navbarType}
        expand="lg"
        id="dark-navbar-main"
      >
         

        <Container>
          <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
            HOME
          </NavbarBrand>
          <NavbarBrand className="mr-lg-5" to="/menu" tag={Link}><Lottie 
	    options={defaultOptions}
     height='55px'
     width='55px'
      />
          </NavbarBrand>
     
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => toggleCollapse(!collapseOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Collapse
            id="navbar_global"
            navbar
            toggler="#navbar_global"
            isOpen={collapseOpen}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="4">
                  <Link to="/">
                  <img
                      alt="..."
                      src={require("assets/img/brand/blue.png")}
                    ></img>
          
                  </Link>
          </Col>

                  <Col className="collapse-brand" xs="4">
                  <Link to="/menu">
                  <Lottie 
	    options={defaultOptions}
    height='30px'
    width='30px'
      /></Link>
              </Col>
           
                <Col className="collapse-close" xs="4">
                  <button
                    className="navbar-toggler"
                    onClick={() => toggleCollapse(!collapseOpen)}
                  >
                    <span></span>
                    <span></span>
                  </button>
                </Col>
              </Row>
            </div>
            <Nav
              className="navbar-nav-hover align-items-lg-center ml-lg-auto"
              navbar
            >
              <UncontrolledDropdown nav>
                <DropdownToggle
                  data-toggle="dropdown"
                  
                  onClick={(e) => e.preventDefault()}
                  role="button"
                  tag={NavLink}
                >
                  <i className="ni ni-ui-04 d-lg-none"></i>
                  <span className="ml-3 nav-link-inner--text">About Us</span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-xl">
                  <div className="dropdown-menu-inner">
                    <Media
                      className="d-flex align-items-center"
                      to="/about"
                      tag={Link}
                    >
                      <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                        <i className="ni ni-delivery-fast"></i>
                      </div>
                      <Media body className="ml-3">
                        <h6 className="heading text-primary mb-md-1">
                          WichPress Food Truck
                        </h6>
                        <p className="description d-none d-md-inline-block mb-0">
                          Our mission and story
                        </p>
                      </Media>
                    </Media>
                   
                  </div>
                  <div className="dropdown-menu-footer">
                    <DropdownItem href="/locations"
                    target="_blank">
                      <i className="ni ni-map-big"></i> Locations
                    </DropdownItem>
                

                  </div>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  tag={Link}
                  className="text-warning"
                  to="/menu"
                  role="button"
                >
                  <i className="ni ni-bullet-list-67 d-lg-none"></i>
                  
                  <span className="ml-3 nav-link-inner--text">Menu</span>
                </DropdownToggle>
                {/* <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem tag={Link} to="/menu#favorites">
                    <i className="ni ni-satisfied text-info"></i>
                    Favorites
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/menu#sandwiches">
                    <i className="ni ni-tie-bow text-primary"></i>
                    Sandwiches
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/menu#quesadillas">
                    <i className="ni ni-scissors text-warning"></i>
                    Quesadillas
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/menu#drinks">
                    <i className="ni ni-basket text-purple"></i>
                    Sweet Treats & Drinks
                  </DropdownItem>
                  
                </DropdownMenu> */}
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
              <DropdownToggle
                  tag={Link}
                  className="text-danger"
                  to="/contact-us"
                  role="button"
                > 
                  <i className="ni ni-bullet-list-67 d-lg-none"></i>

                  <span className="ml-3 nav-link-inner--text">Contact Us</span>
                </DropdownToggle>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

DemoNavbar.defaultProps = {
  type: "dark",
};

DemoNavbar.propTypes = {
  type: PropTypes.oneOf(["dark", "transparent", "primary", "white"]),
};

export default DemoNavbar;
