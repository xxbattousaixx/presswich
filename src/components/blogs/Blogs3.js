import React from "react";
import ReactRoundedImage from "react-rounded-image";
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import MyPhoto from "assets/img/sections/empanada1.jpg";
import './styles22.css'
import MyPhoto14 from "assets/img/bbqmeat.jpeg";
import MyPhoto15 from "assets/img/honeyhotm.jpeg";
import MyPhoto2 from "assets/img/sections/pawel-nolbert.jpg";
import MyPhoto4 from "assets/img/sections/cuban.jpeg";
import MyPhoto3 from "assets/img/sections/odin.jpg";
import MyPhoto11 from "assets/img/chickent.jpeg";
import MyPhoto12 from "assets/img/shrimpt.jpeg";






import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';
import {Helmet} from "react-helmet";


import LazyLoad from 'react-lazyload';

function Blogs3() {
  
  return (
    <>
      <section className="blogs-7">
        <Container fluid><center>
        <br/><br/>
          
        <br/><br/>
          <h style={{fontFamily:'Indie Flower', textShadow:"limegreen 3px 5px", fontSize:"2.2rem", color:'darkgreen'}} className="title mb-4"><u>Catering menu for events in Tampa Bay.</u></h> 
          <br/><br/>
      
          <br/><br/>
          <Row>
      <Col lg="4"></Col>  <Col lg="4">  <h1 style={{fontFamily:'Arial', color:'red', textShadow:'yellow 2px 5px'}} id="favorites">ENTREES</h1></Col><Col lg="4"></Col>

            <Col lg="6">
        <div id='zoom'> <LightSpeed left>
                {/* <div
                  className="full-background"
                  id="favorites"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/athena.jpg") + ")"
                  }}
                ></div> */}
          <LazyLoad>      <ReactRoundedImage image={MyPhoto4} /></LazyLoad>
                <a  onClick={(e) => e.preventDefault()}>

                    <div className="content-bottom">
                  <Helmet>

                    <b><h5>Cuban Sandwich</h5></b>
                    <Col md='3'></Col><Col md='6'>  

                    <h6 className="card-category text-dark opacity-8">
                    Sides Garlic white rice, infused Latin Black Beans

                      </h6><br/><br/><br/>
                      </Col><Col md='3'></Col>
                      <meta name="description" content="empanadas" />
                      </Helmet>
                      <b><h5>Cuban Sandwich</h5></b>
                    <Col md='3'></Col><Col md='6'>  

                    <h6 className="card-category text-dark opacity-8">
                    Sides Garlic white rice, infused Latin Black Beans

                      </h6><br/><br/><br/>
                      </Col><Col md='3'></Col>

                    </div>
                </a></LightSpeed></div>
            </Col>
            <Col lg="6">
        <div id='zoom'> <LightSpeed left>
                {/* <div
                  className="full-background"
                  id="favorites"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/athena.jpg") + ")"
                  }}
                ></div> */}
          <LazyLoad>      <ReactRoundedImage image={MyPhoto12} /></LazyLoad>
                <a  onClick={(e) => e.preventDefault()}>

                    <div className="content-bottom">
                  <Helmet>

                    <b><h5>Shrimp Tostadas</h5></b>
                    <Col md='3'></Col><Col md='6'>  

                    <h6 className="card-category text-dark opacity-8">
                   Sides Garlic white rice, infused Latin Black Beans

                      </h6><br/><br/><br/>
                      </Col><Col md='3'></Col>
                      <meta name="description" content="empanadas" />
                      </Helmet>
                      <b><h5>Shrimp Tostadas</h5></b>
                    <Col md='3'></Col><Col md='6'>  

                    <h6 className="card-category text-dark opacity-8">
                    Sides Garlic white rice, infused Latin Black Beans

                      </h6><br/><br/><br/>
                      </Col><Col md='3'></Col>

                    </div>
                </a></LightSpeed></div>
            </Col>
           
            
          </Row>
          <br/><br/><br/>
       <Row>
       <Col lg="5">
            <div id='zoom'> <Bounce bottom>
                {/* <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/thomas.jpg") + ")"
                  }}
                ></div> */}
                {/* <ReactRoundedImage roundedColor="green" image={MyPhoto2} /> */}
                <section class="carousel" aria-label="carousel" Tabindex="0">
  <a class="carousel__skip-link" href="#skip-link">Street Tacos</a>
  <div class="slides">
    <div class="slides-item slide-1" id="slide-1" aria-label="slide 1 of 5" tabindex="0"><LazyLoad><ReactRoundedImage roundedColor="green" image={MyPhoto11} /></LazyLoad></div>
    <div class="slides-item slide-2" id="slide-2" aria-label="slide 2 of 5" tabindex="0"><LazyLoad><ReactRoundedImage roundedColor="green" image={MyPhoto3} /></LazyLoad></div>
  </div>
  <div class="carousel__nav">
    <a class="slider-nav" href="#slide-1" aria-label="Go to slide 1">1</a>
    <a class="slider-nav" href="#slide-2" aria-label="Go to slide 2">2</a>
  </div>
  <div class="carousel__skip-message" id="skip-link" tabindex="0"></div>
</section>
                <a  onClick={(e) => e.preventDefault()}>
                  
                    <div className="content-bottom">
                  <Helmet>

                   <b> <h5>Street Tacos</h5></b>
                    <Col md='3'></Col><Col md='6'>  
                     <h6 className="card-category text-dark opacity-8">
                      Sides Garlic white rice, infused Latin Black Beans<br/>
                     Choose your protein: 1. Chicken or 2. Beef</h6><br/><br/><br/>

                      </Col><Col md='3'></Col>
<meta name="description" content="Street Tacos" />
                   </Helmet>
                   <b> <h5>Street Tacos</h5></b>
                    <Col md='3'></Col><Col md='6'>  
                     <h6 className="card-category text-dark opacity-8">
                      Sides Garlic white rice, infused Latin Black Beans<br/>
                      Choose your protein: 1. Chicken or 2. Beef</h6><br/>
                      </Col><Col md='3'></Col>
                    </div>
                </a></Bounce></div>
           </Col>
           <Col lg="5">
            <div id='zoom'> <Bounce bottom>
                {/* <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/thomas.jpg") + ")"
                  }}
                ></div> */}
                {/* <ReactRoundedImage roundedColor="green" image={MyPhoto2} /> */}
                <section class="carousel" aria-label="carousel" Tabindex="0">
  <a class="carousel__skip-link" href="#skip-link">Meatballs</a>
  <div class="slides">
    <div class="slides-item slide-3" id="slide-3" aria-label="slide 3 of 5" tabindex="0"><LazyLoad><ReactRoundedImage roundedColor="green" image={MyPhoto15} /></LazyLoad></div>
    <div class="slides-item slide-4" id="slide-4" aria-label="slide 4 of 5" tabindex="0"><LazyLoad><ReactRoundedImage roundedColor="green" image={MyPhoto14} /></LazyLoad></div>
  </div>
  <div class="carousel__nav">
    <a class="slider-nav" href="#slide-3" aria-label="Go to slide 1">1</a>
    <a class="slider-nav" href="#slide-4" aria-label="Go to slide 2">2</a>
  </div>
  <div class="carousel__skip-message" id="skip-link" tabindex="0"></div>
</section>
                <a  onClick={(e) => e.preventDefault()}>
                  
                    <div className="content-bottom">
                  <Helmet>

                   <b> <h5>Meatballs</h5></b>
                    <Col md='3'></Col><Col md='6'>  
                     <h6 className="card-category text-dark opacity-8">
                      Sides- antipasto salad, potato salad, baked beans<br/>
                      Choose your style: 1. BBQ or 2. Honey Hot</h6><br/><br/><br/>
                      </Col><Col md='3'></Col>
<meta name="description" content="Meatballs" />
                   </Helmet>
                   <b> <h5>Meatballs</h5></b>
                    <Col md='3'></Col><Col md='6'>  
                    <h6 className="card-category text-dark opacity-8">
                      Sides- antipasto salad, potato salad, baked beans<br/>
                      Choose your style: 1. BBQ or 2. Honey Hot</h6><br/><br/><br/>
                      </Col><Col md='3'></Col>
                    </div>
                </a></Bounce></div>
           </Col>
       </Row>
       <Row className="mb-md-5">
            
          </Row>
          <Row>
            <Col lg="3">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                     "url(" + require('assets/img/chickens.jpeg') + ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                        Chicken Skewer
                      </h6>
                      <CardTitle tag="h5">Chicken, mushroom, onion, peppers</CardTitle>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="3">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                       "url(" + require('assets/img/beefs.jpeg') + ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                        Beef Skewer
                      </h6>
                      <CardTitle tag="h5">Beef, mushroom, onion, peppers</CardTitle>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="3">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                       "url(" + require('assets/img/veggies.jpeg') + ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                        Veggie Skewer
                      </h6>
                      <CardTitle tag="h5">Veggie, peppers, onions, mushrooms, zucchini, squash</CardTitle>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="3">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                       "url(" + require('assets/img/fruits.jpeg') + ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                        Fruit Skewer
                      </h6>
                      <CardTitle tag="h5">Fruit, seasonal fruits</CardTitle>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
          </Row>
       <br/><br/><br/><br/>

       <Row>
      <Col lg="4"></Col>  <Col lg="4">  <h1 style={{fontFamily:'Arial', color:'red', textShadow:'yellow 2px 5px'}} id="favorites">DESSERTS</h1></Col><Col lg="4"></Col>

            <Col lg="3">
                   </Col>
            <Col lg="6">
        <div id='zoom'> <LightSpeed left>
                {/* <div
                  className="full-background"
                  id="favorites"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/athena.jpg") + ")"
                  }}
                ></div> */}
          <LazyLoad>      <img style={{width:'200px', border: '5px solid yellow'}} src={MyPhoto2}/> </LazyLoad>
                <a  onClick={(e) => e.preventDefault()}>

                    <div className="content-bottom">
                  <Helmet>

                    <b><h5>Churros</h5></b>
                    <Col md='3'></Col><Col md='6'>  

                    <h6 className="card-category text-dark opacity-8">
                        Churro with caramel inside topped cinnamon and sugar. Topped with whip cream, drizzled with chocolate and rainbow sprinkles.
                      </h6><br/><br/><br/>
                      </Col><Col md='3'></Col>
                      <meta name="description" content="empanadas" />
                      </Helmet>
                      <b><h5>Churros</h5></b>
                    <Col md='3'></Col><Col md='6'>  

                    <h6 className="card-category text-dark opacity-8">
                    Churro with caramel inside topped cinnamon and sugar. Topped with whip cream, drizzled with chocolate and rainbow sprinkles. 

                      </h6><br/><br/><br/>
                      </Col><Col md='3'></Col>

                    </div>
                </a></LightSpeed></div>
            </Col>
            <Col lg="3">
       
            </Col>
           
            
          </Row>
    </center>
        </Container>
      </section>
    </>
  );
}

export default Blogs3;
