import React from "react";
import './styles22.css'
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "assets/img/sections/mark-harrison.jpg";
import MyPhoto2 from "assets/img/sections/pawel-nolbert.jpg";
import MyPhoto3 from "assets/img/sections/twk-tt.jpeg";
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';

function Blogs1() {
  return (
    <>
      <section className="blogs-1">
        <Container><center>
          <Row   id="drinks" className="mb-5">
      <Col lg="4"></Col>  <Col lg="4">  <h1 style={{fontFamily:'Arial', color:'red', textShadow:'yellow 2px 5px'}} id="favorites">SIDE ITEMS</h1></Col><Col lg="4"></Col>

           
          </Row>
          <Row className="align-items-center">
            <Col lg="4">
        <div id='zoom'> <LightSpeed left>

            <ReactRoundedImage image={MyPhoto2} />
         

                {/* <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/pawel-nolbert.jpg") + ")",
                  }}
                ></div> */}
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                
                    <div className="content-bottom">
                      <h6 className="card-category text-dark opacity-8">
                        Churros (2)
                      </h6>
                      
                      <h5>Fried dough dusted with sugar or cinnamon.</h5>
                    </div>
                
                </a>
             </LightSpeed></div>
            </Col>
            <Col lg="4">
        <div id='zoom'> <Bounce top>

            <ReactRoundedImage roundedColor="green" image={MyPhoto3} />
           
                {/* <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/twk-tt.jpg") + ")",
                  }}
                ></div> */}
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="content-bottom">
                      <h6 className="card-category text-dark opacity-8">
                      Soda or Water
                      </h6>
                      <h5>Grab a drink</h5>
                    </div>
                </a></Bounce></div>
            </Col>
            <Col lg="4">
        <div id='zoom'> <LightSpeed right>
          
                <ReactRoundedImage image={MyPhoto} />

                {/* <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/mark-harrison.jpg") + ")",
                  }}
                ></div> */}
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="content-bottom">
                    <b>  <h6 className="card-category text-dark opacity-8">
                        Seasoned Fries
                      </h6></b>
                      <h5 className="text-dark">
                        Instant Classic
                      </h5>
                    </div>
                </a></LightSpeed></div>
            </Col>
          </Row>
         </center>
        </Container>
      </section>
    </>
  );
}

export default Blogs1;
