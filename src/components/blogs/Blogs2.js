import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

function Blogs2() {
  return (
    <>
      <section className="blogs-2" >
        <Container fluid >
          <Row className="mb-md-5">
            <Col className="mx-auto" md="8">
              <h3 className="display-3 text-center">Locations and online orders</h3>
              <p className="lead text-center">
                Through these portals you can make an order online and also book us for your event.<br/>
                Explore the map to find out where we are today!
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/sf.jpg") + ")",
                  }}
                ></div>
                <a href="https://streetfoodfinder.com/wichpress">
                  <CardBody>
                      <h6 className="card-category text-white opacity-8">
                        Street Food Finder
                      </h6>
                      <CardTitle tag="h5">Book us now!</CardTitle>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="6">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/bt.jpg") + ")",
                  }}
                ></div>
                <a href="https://www.bestfoodtrucks.com/truck/wich-press-food-truck">
                  <CardBody>
                      <h6 className="card-category text-white opacity-8">
                        Best Food Trucks
                      </h6>
                      <CardTitle tag="h5">Book us now!</CardTitle>
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

export default Blogs2;
