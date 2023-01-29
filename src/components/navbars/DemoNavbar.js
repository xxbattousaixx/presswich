import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
          <NavbarBrand className="mr-lg-5" to="/Presentation" tag={Link}>
            HOME
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
                <Col className="collapse-brand" xs="6">
                  <Link to="/index">
                    <img
                      alt="..."
                      src={require("assets/img/brand/blue.png")}
                    ></img>
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
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
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                  tag={NavLink}
                >
                  <i className="ni ni-ui-04 d-lg-none"></i>
                  <span className="nav-link-inner--text">About Us</span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-xl">
                  <div className="dropdown-menu-inner">
                    <Media
                      className="d-flex align-items-center"
                      to="/index"
                      tag={Link}
                    >
                      <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                        <i className="ni ni-spaceship"></i>
                      </div>
                      <Media body className="ml-3">
                        <h6 className="heading text-primary mb-md-1">
                          About Us
                        </h6>
                        <p className="description d-none d-md-inline-block mb-0">
                          Our mission and story
                        </p>
                      </Media>
                    </Media>
                    <Media
                      className="d-flex align-items-center"
                      to="/presentation"
                      tag={Link}
                    >
                      <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                        <i className="ni ni-palette"></i>
                      </div>
                      <Media body className="ml-3">
                        <h6 className="heading text-primary mb-md-1">
                          Food gallery
                        </h6>
                        <p className="description d-none d-md-inline-block mb-0">
                          Check out some fresh food
                        </p>
                      </Media>
                    </Media>
                  </div>
                  <div className="dropdown-menu-footer">
                    <DropdownItem href="https://www.creative-tim.com/learning-lab/reactstrap/overview/argon-design-system">
                      <i className="ni ni-atom"></i> Locations
                    </DropdownItem>
                    <DropdownItem href="https://www.creative-tim.com/learning-lab/reactstrap/colors/argon-design-system">
                      <i className="ni ni-ui-04"></i> Events
                    </DropdownItem>

                  </div>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  tag={NavLink}
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  <i className="ni ni-app d-lg-none"></i>
                  <span className="nav-link-inner--text">Menu</span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem tag={Link} to="/sections#headers">
                    <i className="ni ni-album-2 text-info"></i>
                    Appetizers
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sections#features">
                    <i className="ni ni-settings text-danger"></i>
                    Features
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sections#blogs">
                    <i className="ni ni-align-left-2 text-primary"></i>
                    Entrees
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sections#teams">
                    <i className="ni ni-user-run text-danger"></i>
                    Combos
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sections#projects">
                    <i className="ni ni-paper-diploma text-purple"></i>
                    Desserts
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sections#pricing">
                    <i className="ni ni-money-coins text-pink"></i>
                    Drinks
                  </DropdownItem>
                  
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
              <DropdownToggle
                  tag={NavLink}
                  data-toggle="dropdown"
                  href="/contact-us"
                  role="button"
                >
                   <DropdownItem tag={Link} to="/contact-us">
                  <p className="text-white" href="/contact-us">CONTACT US</p>
                  </DropdownItem>
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
