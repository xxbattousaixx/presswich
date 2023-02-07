import React, { useState, useCallback, useEffect, useRef } from 'react'
import Img1 from 'assets/img/sections/download2.jpeg';
import Img2 from 'assets/img/sections/download3.jpeg';
import Img4 from 'assets/img/sections/download4.jpeg';

import Img3 from 'assets/img/sections/t1.jpeg';

// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";
// Core Components
import Accordion1 from "components/accordions/Accordion1";
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function HeaderIndex() {

  return (
    <>
      <div className="section section-hero section-shaped">
        <div
      style={{
          backgroundImage:
            "url(" + require("assets/img/vector10.jpg") + ")",
        }} 
        className="page-header">
          {/* <img
            alt="..."
            className="bg-image"
            style={{backgroundColor:'#ccf2ff'}}
            src={require("assets/img/ill/index_bg.svg").default}
          /> */}<br/>
          <Container className="shape-container d-flex align-items-center py-lg">
            <div className="col px-0">
              
              <Row className="align-items-center justify-content-center">
                <Col className="text-center" lg="10">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                 <Zoom> <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/brand/blue.png")}
                    style={{ width: "250px" }}
                  /></Zoom>
                 
                  <p style={{fontFamily:'Indie Flower', fontSize:"2rem", color:'cyan'}} className="lead text-primary">
                    <b className="display-3 text-primary">Welcome</b>
                    <br></br>We are here to serve you<br/><br/>
                   <div  className='text-primary'> Our food truck has been in business for over a decade and we are dedicated to serving your every food need.</div>
                  </p>
{/* <RubberBand>
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/sections/ft2.jpg")}
                  />
</RubberBand> */}

<Carousel>
                <div>
                    <img src={Img1} />
                    <p className="legend">Visit Us</p>
                </div>
                <div>
                    <img src={Img2} />
                    <p className="legend">We are mobile</p>
                </div>
                <div>
                    <img src={Img4} />
                    <p className="legend">We Cater</p>
                </div>
                <div>
                    <img src={Img3} />
                    <p className="legend"><a href='/contact-us'> Contact Us</a></p>
                </div>
            </Carousel>
                  <div className="btn-wrapper mt-5">
                   
                  </div>
                </Col>
              </Row>
            
            </div>
          </Container>
        </div>
      </div>
      <Accordion1/>
    </>
  );
}

export default HeaderIndex;
