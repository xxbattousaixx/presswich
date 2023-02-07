import React from "react";
import ReactRoundedImage from "react-rounded-image";
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import MyPhoto from "assets/img/sections/athena.jpg";
import MyPhoto2 from "assets/img/sections/thomas.jpg";
import MyPhoto3 from "assets/img/sections/odin.jpg";
import MyPhoto4 from "assets/img/sections/cuban.jpg";
import MyPhoto5 from "assets/img/sections/dacuban.jpg";
import MyPhoto6 from "assets/img/sections/hamswiss.jpg";
import MyPhoto7 from "assets/img/sections/fajita.jpg";
import MyPhoto8 from "assets/img/sections/ep.jpg";
import './styles22.css'
import MyPhoto9 from "assets/img/sections/buffr.jpg";
import MyPhoto10 from "assets/img/sections/bbq.jpg";
import MyPhoto11 from "assets/img/sections/chicken.jpg";
import MyPhoto12 from "assets/img/sections/cheese.jpg";
import MyPhoto13 from "assets/img/sections/p8.jpg";
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';




function Blogs4() {
  
  return (
    <>
      <section className="blogs-4">
        <Container fluid><center>
        <br/><br/>
          <h2 style={{fontFamily:'Indie Flower', textShadow:"blue 2px 5px", fontSize:"4rem", color:'cobalt'}} className="title mb-4"><a href="/contact-us">Contact Us</a> to order today!</h2> 
          <br/><br/><br/>
          <Row>
      <Col lg="4"></Col>  <Col lg="4">  <h1 style={{fontFamily:'Arial', color:'red', textShadow:'yellow 2px 5px'}} id="favorites">FAVORITES</h1></Col><Col lg="4"></Col>

            <Col lg="4">
        <div id='zoom'> <LightSpeed left>
                {/* <div
                  className="full-background"
                  id="favorites"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/athena.jpg") + ")"
                  }}
                ></div> */}
                <ReactRoundedImage image={MyPhoto} />
                <a  onClick={(e) => e.preventDefault()}>
                    <div className="content-bottom">
                    <b><h5>Empanadas</h5></b>
                    <Col md='3'></Col><Col md='6'>  

                    <h6 className="card-category text-dark opacity-8">
                        Beef / Beef & Cheese
                      </h6><br/><br/><br/>
                      </Col><Col md='3'></Col>

                    </div>
                </a></LightSpeed></div>
            </Col>
            <Col lg="4">
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
  <a class="carousel__skip-link" href="#skip-link">Loaded Fries</a>
  <div class="slides">
    <div class="slides-item slide-1" id="slide-1" aria-label="slide 1 of 5" tabindex="0"><ReactRoundedImage roundedColor="green" image={MyPhoto2} /></div>
    <div class="slides-item slide-2" id="slide-2" aria-label="slide 2 of 5" tabindex="0"><ReactRoundedImage roundedColor="green" image={MyPhoto2} /></div>
    <div class="slides-item slide-3" id="slide-3" aria-label="slide 3 of 5" tabindex="0"><ReactRoundedImage roundedColor="green" image={MyPhoto2} /></div>
  </div>
  <div class="carousel__nav">
    <a class="slider-nav" href="#slide-1" aria-label="Go to slide 1">1</a>
    <a class="slider-nav" href="#slide-2" aria-label="Go to slide 2">2</a>
    <a class="slider-nav" href="#slide-3" aria-label="Go to slide 3">3</a>
  </div>
  <div class="carousel__skip-message" id="skip-link" tabindex="0"></div>
</section>
                <a  onClick={(e) => e.preventDefault()}>
                  
                    <div className="content-bottom">
                   <b> <h5>Loaded Fries</h5></b>
                    <Col md='3'></Col><Col md='6'>  
                     <h6 className="card-category text-dark opacity-8">
                      Choose your protein: Chicken, Chicken Bacon, Chicken Fajita, Shredded Pork, Shredded Pork Fajita</h6><br/><br/><br/>
                      </Col><Col md='3'></Col>
                   
                    </div>
                </a></Bounce></div>
           </Col>
             <Col lg="4">
        <div id='zoom'> <LightSpeed right>

                {/* <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/odin.jpg") + ")"
                  }}
                ></div> */}
                <ReactRoundedImage image={MyPhoto3} />

                <a  onClick={(e) => e.preventDefault()}>
                 
                    <div className="content-bottom">
                 <b>   <h5> Beef Tacos</h5></b>
                 <Col md='3'></Col><Col md='6'>  

                      <h6 className="card-category text-dark opacity-8">
                       2 flour tortillas, ground beef, topped with lettuce and cheese, fries & side salsa
                      </h6><br/><br/><br/>
                      </Col><Col md='3'></Col>
                      
                    </div>
                
                </a>
                </LightSpeed>
            </div>
            </Col>

          </Row>
          <br/><br/><br/>
          <Row className="row-below">
      <Col id="sandwiches" lg="4"></Col>  <Col lg="4">  <h1 style={{fontFamily:'Arial', color:'red', textShadow:'yellow 2px 5px'}}>SANDWICHES</h1></Col><Col lg="4"></Col>

            <Col lg="4">

        <div id='zoom'> <LightSpeed left>

            <ReactRoundedImage image={MyPhoto4} />
{/*            
                <div
                  className="full-background"
                  
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/cuban.jpg") + ")"
                  }}
                ></div> */}
                <a  onClick={(e) => e.preventDefault()}>
                    <div className="content-bottom" >
                 <b>   <h5> Da Cuban </h5></b>
                 <Col md='3'></Col><Col md='6'>  
                   
                      <h6 className="card-category text-dark opacity-8">
                        Pressed Cuban bread with Latin pork, cheese, ham, pickles and mayo/mustard
                      </h6><br/><br/><br/>
                      </Col><Col md='3'></Col>
                     
                    </div>
                </a></LightSpeed></div>
            </Col>
            <Col lg="4">

        <div id='zoom'> <Bounce top>

            <ReactRoundedImage roundedColor="green" image={MyPhoto5} />

{/*              
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/dacuban.jpg") + ")"
                  }}
                ></div> */}
                <a  onClick={(e) => e.preventDefault()}>
                    <div className="content-bottom">
                  <b>  <h5> Pork Sandwich </h5></b>
                 <Col md='3'></Col><Col md='6'>  

                      <h6 className="card-category text-dark opacity-8">
                        Pressed Cuban bread with Latin pork and onions
                      </h6><br/><br/><br/>
                      </Col><Col md='3'></Col>

                    </div>
                </a></Bounce></div>
            </Col>
            <Col lg="4">

        <div id='zoom'> <LightSpeed right>

            <ReactRoundedImage image={MyPhoto6} />
{/*             
                  <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/hamswiss.jpg") + ")"
                  }}
                ></div> */}
                <a  onClick={(e) => e.preventDefault()}>
                    <div className="content-bottom">
               <b>     <h5> Ham and Swiss</h5></b>
               <Col md='3'></Col><Col md='6'>  

                      <h6 className="card-category text-dark opacity-8">
                        Pressed Cuban bread with ham and American/Swiss cheese
                      </h6><br/><br/><br/>
                                            </Col><Col md='3'></Col>


                    </div>
                </a></LightSpeed></div>
            </Col>
            
          </Row>
          <br/><br/><br/>
          <Row  className="row-below">
      <Col id="quesadillas" lg="4"></Col>  <Col lg="4">  <h1 style={{fontFamily:'Arial', color:'red', textShadow:'yellow 2px 5px'}}>QUESADILLAS</h1></Col><Col lg="4"></Col>

            <Col lg="4">
        <div id='zoom'> <LightSpeed left>

            <ReactRoundedImage image={MyPhoto7} />
         
                {/* <div
                  className="full-background"
                  id="quesadillas"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/fajita.jpg") + ")"
                  }}
                ></div> */}
                <a  onClick={(e) => e.preventDefault()}>
                    <div className="content-bottom" >
                  <b>  <h5> Fajita Quesadilla</h5></b>
               <Col md='3'></Col><Col md='6'>  

                      <h6 className="card-category text-dark opacity-8">
                        2 cheese blend, grilled chicken or pork, sauteed peppers and onions
                      </h6><br/><br/><br/>
                                           </Col><Col md='3'></Col>


                    </div>
                </a></LightSpeed></div>
            </Col>
            <Col lg="4">
        <div id='zoom'> <Bounce top>

            <ReactRoundedImage roundedColor="green" image={MyPhoto8} />
             
                {/* <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/ep.jpg") + ")"
                  }}
                ></div> */}
                <a  onClick={(e) => e.preventDefault()}>
                    <div className="content-bottom">
                    
                   <b> <h5> Chicken Bacon Ranch Quesadilla</h5></b>
<Col md='3'></Col><Col md='6'>  
                      <h6 className="card-category text-dark opacity-8">
                        2 cheese blend, grilled chicken, bacon w/ranch
                      </h6><br/><br/><br/>
                       </Col><Col md='3'></Col>

                    </div>
                </a></Bounce></div>
            </Col>
            <Col lg="4">
        <div id='zoom'> <LightSpeed right>

            <ReactRoundedImage image={MyPhoto9} />
            
             {/* <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/buffr.jpg") + ")"
                  }}
                ></div> */}
                <a  onClick={(e) => e.preventDefault()}>
                    <div className="content-bottom">
                      
                   <b> <h5> Honey Hot Chicken Quesadilla</h5></b>
<Col md='3'></Col><Col md='6'>  
                      <h6 className="card-category text-dark opacity-8">
                        2 cheese blend, grilled chicken, honey hot sauce
                      </h6><br/><br/><br/>
                       </Col><Col md='3'></Col>

                    </div>
                </a></LightSpeed></div>
            </Col>
            <Col lg="4">
        <div id='zoom'> <LightSpeed left>

            <ReactRoundedImage image={MyPhoto10} />
            
              {/* <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/bbq.jpg") + ")"
                  }}
                ></div> */}
                <a  onClick={(e) => e.preventDefault()}>
                    <div className="content-bottom">
                      
                 <b>   <h5> Latin Pork Quesadilla</h5></b>
<Col md='3'></Col><Col md='6'>  
                      <h6 className="card-category text-dark opacity-8">
                        2 cheese blend with Latin pork
                      </h6><br/><br/><br/>
                      </Col><Col md='3'></Col>

                    </div>
                </a></LightSpeed></div>
            </Col>
            <Col lg="4">
        <div id='zoom'> <Bounce top>

            <ReactRoundedImage roundedColor="green" image={MyPhoto8} />
            
             {/* <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/ep.jpg") + ")"
                  }}
                ></div> */}
                <a  onClick={(e) => e.preventDefault()}>
                    <div className="content-bottom">
                     
                 <b>   <h5> Chicken Pesto Quesadilla</h5></b>
<Col md='3'></Col><Col md='6'>  
                      <h6 className="card-category text-dark opacity-8">
                        Mozzarella cheese, grilled chicken, onion with basil pesto
                      </h6><br/><br/><br/>
                       </Col><Col md='3'></Col>

                    </div>
                </a></Bounce></div>
            </Col>
            <Col lg="4">
        <div id='zoom'> <LightSpeed right>

            <ReactRoundedImage image={MyPhoto9} />
             
                    {/* <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/buffr.jpg") + ")"
                  }}
                ></div> */}
                <a  onClick={(e) => e.preventDefault()}>
                    <div className="content-bottom">
                     
                  <b>  <h5> Buffalo Chicken Quesadilla</h5> </b>
<Col md='3'></Col><Col md='6'>  
                      <h6 className="card-category text-dark opacity-8">
                        2 cheese blend, grilled chicken, buffalo wing sauce w/ranch
                      </h6><br/><br/><br/>
                      </Col><Col md='3'></Col>
 
                    </div>
                </a></LightSpeed></div>
            </Col>
          </Row>
          <Row className="row-below">
            <Col lg="4">
        <div id='zoom'> <LightSpeed left>

            <ReactRoundedImage image={MyPhoto10} />
           
                {/* <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/bbq.jpg") + ")"
                  }}
                ></div> */}
                <a  onClick={(e) => e.preventDefault()}>
                    <div className="content-bottom">
                     
                 <b>   <h5> Barbeque Quesadilla</h5></b>
<Col md='3'></Col><Col md='6'>  
                      <h6 className="card-category text-dark opacity-8">
                        2 cheese blend, grilled chicken or pork, sauteed onions w/barbeque sauce
                      </h6><br/><br/><br/>
                      </Col><Col md='3'></Col>

                    </div>
                </a></LightSpeed></div>
            </Col>
            <Col lg="4">
        <div id='zoom'> <Bounce top>
              
            <ReactRoundedImage roundedColor="green" image={MyPhoto11} />
           
                {/* <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/chicken.jpg") + ")"
                  }}
                ></div> */}
                <a  onClick={(e) => e.preventDefault()}>
                    <div className="content-bottom">
                    
                  <b>  <h5> Chicken Quesadilla</h5></b>
<Col md='3'></Col><Col md='6'>  
                      <h6 className="card-category text-dark opacity-8">
                        2 cheese blend, grilled chicken
                      </h6><br/><br/><br/>
                      </Col><Col md='3'></Col>

                    </div>
                </a></Bounce></div>
            </Col>
            <Col lg="4">
        <div id='zoom'> <LightSpeed right>

            <ReactRoundedImage image={MyPhoto12} />
           
               {/* <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/cheese.jpg") + ")"
                  }}
                ></div> */}
                <a  onClick={(e) => e.preventDefault()}>
                    <div className="content-bottom">
                      
                 <b>   <h5> Cheese Quesadilla</h5></b>
<Col md='3'></Col><Col md='6'>  
                      <h6 className="card-category text-dark opacity-8">
                        2 cheese blend
                      </h6><br/><br/><br/>
                      </Col><Col md='3'></Col>

                    </div>
                </a></LightSpeed></div>
            </Col><Col lg="4"></Col>
            <Col lg="4">
        <div id='zoom'> <Bounce top>

            <ReactRoundedImage roundedColor="green" image={MyPhoto13} />

               {/* <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/p8.jpg") + ")"
                  }}
                ></div> */}
                <a  onClick={(e) => e.preventDefault()}>
                    <div className="content-bottom">
                     
                  <b>  <h5> Veggin Out Quesadilla </h5></div>
<Col md='3'></Col><Col md='6'>  
                      <h6 className="card-category text-dark opacity-8">
                        2 cheese blend, mushroom, peppers, onions & spinach
                      </h6><br/><br/><br/>
                      </Col><Col md='3'></Col>

                    </div>
                </a></Bounce></div>
            </Col><Col lg="4"></Col>
          </Row></center>
        </Container>
      </section>
    </>
  );
}

export default Blogs4;
