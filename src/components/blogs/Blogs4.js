import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

function Blogs4() {
  return (
    <>
      <section className="blogs-4">
        <Container fluid>
        <br/><br/>
          <h2 className="title mb-4"><a href="/contact-us">Contact Us</a> to order today!</h2> 
          All your favorites.
          <br></br>
          <Row>
            <Col lg="4">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  id="favorites"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/athena.jpg") + ")"
                  }}
                ></div>
                <a  onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                    <CardTitle tag="h5">Empanadas $6.00</CardTitle>

                      <h6 className="card-category text-white opacity-8">
                        Beef / Beef & Cheese
                      </h6>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="4">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/thomas.jpg") + ")"
                  }}
                ></div>
                <a  onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                    <CardTitle tag="h5">Loaded Fries $13.00</CardTitle>
                      <h6 className="card-category text-white opacity-8">
                        Fries topped with queso blanco, drizzled with buffalo, barbeque or honey hot sauce
                      </h6>
                      <CardTitle tag="h5">Choose your protein: Chicken, Chicken Bacon, Chicken Fajita, Shredded Pork, Shredded Pork Fajita</CardTitle>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="4">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/odin.jpg") + ")"
                  }}
                ></div>
                <a  onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                    <CardTitle tag="h5"> Beef Tacos $11.00</CardTitle>

                      <h6 className="card-category text-white opacity-8">
                       2 flour tortillas, ground beef, topped with lettuce and cheese, fries & side salsa
                      </h6>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
           
          </Row>
          <Row className="row-below">
            <Col lg="4">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  id="sandwiches"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/cuban.jpg") + ")"
                  }}
                ></div>
                <a  onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom" >
                    <CardTitle tag="h5"> Da Cuban $13.00</CardTitle>
                      <h6 className="card-category text-white opacity-8">
                        Pressed Cuban bread with Latin pork, cheese, ham, pickles and mayo/mustard
                      </h6>
                     
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="4">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/dacuban.jpg") + ")"
                  }}
                ></div>
                <a  onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                    <CardTitle tag="h5"> Pork Sandwich $13.00</CardTitle>
                      <h6 className="card-category text-white opacity-8">
                        Pressed Cuban bread with Latin pork and onions
                      </h6>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="4">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                  <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/hamswiss.jpg") + ")"
                  }}
                ></div>
                <a  onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                    <CardTitle tag="h5"> Ham and Swiss $13.00</CardTitle>
                      <h6 className="card-category text-white opacity-8">
                        Pressed Cuban bread with ham and American/Swiss cheese
                      </h6>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            
          </Row>
          <Row className="row-below">
            <Col lg="2">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  id="quesadillas"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/fajita.jpg") + ")"
                  }}
                ></div>
                <a  onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom" >
                    <CardTitle tag="h5"> Fajita Quesadilla $13.00</CardTitle>
                      <h6 className="card-category text-white opacity-8">
                        2 cheese blend, grilled chicken or pork, sauteed peppers and onions
                      </h6>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="2">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/ep.jpg") + ")"
                  }}
                ></div>
                <a  onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                    
                    <CardTitle tag="h5"> Chicken Bacon Ranch Quesadilla $13.00</CardTitle>
                      <h6 className="card-category text-white opacity-8">
                        2 cheese blend, grilled chicken, bacon w/ranch
                      </h6>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="2">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
             <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/buffr.jpg") + ")"
                  }}
                ></div>
                <a  onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      
                    <CardTitle tag="h5"> Honey Hot Chicken Quesadilla $13.00</CardTitle>
                      <h6 className="card-category text-white opacity-8">
                        2 cheese blend, grilled chicken, honey hot sauce
                      </h6>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="2">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
              <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/bbq.jpg") + ")"
                  }}
                ></div>
                <a  onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      
                    <CardTitle tag="h5"> LatinPork Quesadilla $13.00</CardTitle>
                      <h6 className="card-category text-white opacity-8">
                        2 cheese blend with Latin pork
                      </h6>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="2">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
             <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/ep.jpg") + ")"
                  }}
                ></div>
                <a  onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                     
                    <CardTitle tag="h5"> Chicken Pesto Quesadilla $13.00</CardTitle>
                      <h6 className="card-category text-white opacity-8">
                        Mozzarella cheese, grilled chicken, onion with basil pesto
                      </h6>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="2">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                    <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/buffr.jpg") + ")"
                  }}
                ></div>
                <a  onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                     
                    <CardTitle tag="h5"> Buffalo Chicken Quesadilla $13.00</CardTitle>
                      <h6 className="card-category text-white opacity-8">
                        2 cheese blend, grilled chicken, buffalo wing sauce w/ranch
                      </h6>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
          </Row>
          <Row className="row-below">
            <Col lg="3">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/bbq.jpg") + ")"
                  }}
                ></div>
                <a  onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                     
                    <CardTitle tag="h5"> Barbeque Quesadilla $13.00</CardTitle>
                      <h6 className="card-category text-white opacity-8">
                        2 cheese blend, grilled chicken or pork, sauteed onions w/barbeque sauce
                      </h6>
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
                      "url(" + require("assets/img/sections/chicken.jpg") + ")"
                  }}
                ></div>
                <a  onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                    
                    <CardTitle tag="h5"> Chicken Quesadilla $13.00</CardTitle>
                      <h6 className="card-category text-white opacity-8">
                        2 cheese blend, grilled chicken
                      </h6>
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
                      "url(" + require("assets/img/sections/cheese.jpg") + ")"
                  }}
                ></div>
                <a  onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      
                    <CardTitle tag="h5"> Cheese Quesadilla $13.00</CardTitle>
                      <h6 className="card-category text-white opacity-8">
                        2 cheese blend
                      </h6>
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
                      "url(" + require("assets/img/sections/p8.jpg") + ")"
                  }}
                ></div>
                <a  onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                     
                    <CardTitle tag="h5"> Veggin Out Quesadilla $13.00</CardTitle>
                      <h6 className="card-category text-white opacity-8">
                        2 cheese blend, mushroom, peppers, onions & spinach
                      </h6>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Blogs4;
