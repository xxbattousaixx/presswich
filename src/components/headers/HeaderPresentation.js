import React from "react";
import './styles33.css'
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';
// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";
import Wobble from 'react-reveal/Wobble';
import Zoom from 'react-reveal/Zoom';
// Core Components
function HeaderPresentation() {
  return (
    <>
      <div className="section-hero section-shaped">
        <LazyLoad>
        <div className="page-header">
        <Zoom>  <div
            className="page-header-image "
            style={{backgroundColor:"red",
              backgroundImage:
                "url(" + require("assets/img/sections/truck99.jpg") + ")",
            }}
          ></div></Zoom>
          <Container
            className="shape-container d-flex align-items-center py-lg"
            fluid
          >
            <div className="col px-0">
              <Row>
                <Col className="ml-5" lg="4">
                 {/* <Wobble> <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/brand/blue.png")}
                    style={{ width: "200px" }}
                  ></img>{" "}
                 </Wobble> */}
                  <h className="lead text-center">
                   <br></br>
                 <div> <b style={{fontFamily:'Indie Flower', textShadow:"orange 2px 5px", fontSize:"4rem", color:'yellow'}}>WichPress Food Truck</b> </div>
                  </h>
                  <div className="btn-wrapper mt-5">
                    <Button
                      className="btn2 btn-white btn-icon mb-3 mb-sm-0"
                      color="default"
                      href="/menu"
                    >
                      <span className="btn-inner--icon">
                        <i className="fas fa-shopping-cart"></i>
                      </span>
                      <span className="btn-inner--text">Full Menu</span>
                    </Button>

                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div></LazyLoad>
      </div>
    </>
  );
}

export default HeaderPresentation;
