import React, { useState, useCallback, useEffect, useRef } from 'react'
import Img1 from 'assets/img/sections/download2.jpeg';
import Img2 from 'assets/img/sections/download3.jpeg';
import Img4 from 'assets/img/sections/download4.jpeg';
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';
import Img3 from 'assets/img/sections/t1.jpeg';
import Particles from "components/Particles.js";
import { Helmet } from 'react-helmet';
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
          backgroundColor:'#cceeff'
        }} 
        className="page-header">
          <Particles />
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
                <br/><br/><br/><br/><br/><br/>
                 <Zoom> <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/brand/blue.png")}
                    style={{ width: "15vw" }}
                  /></Zoom>
                 <Helmet>
                  <p style={{fontFamily:'Indie Flower', fontSize:"1.1rem", color:'cyan'}} className="lead text-primary">
                    {/* <b className="display-3 text-primary">Welcome</b> */}
                    {/* <br/><br/> <b className="display-3 text-primary">
We are here to serve you</b><br/><br/> */}
                   <b  className='text-primary'> Shawn and Kim Easter always dreamed of owning a sandwich shop on the beach. So, instead of being stuck on one beach they decided to become a mobile sandwich shop on the many tropical beaches along the Florida coastline and became Wich Press Food Truck.
<br/>
Originally from Arizona, Shawn and Kim were the chefs for all of their family and friends. After constantly being told they should take their food to a restaurant; they decided to make their dream a reality. Shawn sold his landscaping company of 17 years and together they gathered all their possessions that would fit in a car and moved to Tampa Bay.
<br/>

Since 2018, Wich Press Food Truck has been selling award winning Cubans, quesadillas, empanadas, and tacos throughout the bay area. Wich Press is obsessed with high quality ingredients, locally sourced and a commitment to exemplary service and freshness.
<br/>

We are available for all types of events ranging from birthdays, weddings, parties, corporate events, festivals, graduations, reunions and more. We can cater to any occasion from Latin Cuisine, American and Mexican. Come to our next stop or bring us to you, either way you will leave happy, full, and impressed by Wich Press.</b>
<br/>
<br/>
              <br/>
              
                  </p>
<meta name="description" content="Sandwich shop on the beach dreamed by Shawn and Kim Easter now food truck serving Tampa Bay area available for events and catering. Food choices include quesadillas, tacos, Cuban sandwiches, empanadas -- Latin cuisine, American and Mexican " />
</Helmet>
<p style={{fontFamily:'Indie Flower', fontSize:"1.1rem", color:'cyan'}} className="lead text-primary">
                    {/* <b className="display-3 text-primary">Welcome</b> */}
                    {/* <br/><br/> <b className="display-3 text-primary">
We are here to serve you</b><br/><br/> */}
                   <b  className='text-primary'> Shawn and Kim Easter always dreamed of owning a sandwich shop on the beach. So, instead of being stuck on one beach they decided to become a mobile sandwich shop on the many tropical beaches along the Florida coastline and became Wich Press Food Truck.
<br/>
Originally from Arizona, Shawn and Kim were the chefs for all of their family and friends. After constantly being told they should take their food to a restaurant; they decided to make their dream a reality. Shawn sold his landscaping company of 17 years and together they gathered all their possessions that would fit in a car and moved to Tampa Bay.
<br/>

Since 2018, Wich Press Food Truck has been selling award winning Cubans, quesadillas, empanadas, and tacos throughout the bay area. Wich Press is obsessed with high quality ingredients, locally sourced and a commitment to exemplary service and freshness.
<br/>

We are available for all types of events ranging from birthdays, weddings, parties, corporate events, festivals, graduations, reunions and more. We can cater to any occasion from Latin Cuisine, American and Mexican. Come to our next stop or bring us to you, either way you will leave happy, full, and impressed by Wich Press.</b>
<br/>
<br/>
              <br/>
              
                  </p>
{/* <RubberBand>
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/sections/ft2.jpg")}
                  />
</RubberBand> */}

<LazyLoad> <Carousel>
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
            </LazyLoad> 
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
