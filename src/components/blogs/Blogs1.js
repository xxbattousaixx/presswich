import React from "react";

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

function Blogs1() {
  return (
    <>
      <section className="blogs-1">
        <Container>
          <Row   id="drinks" className="mb-5">
            <Col md="8">
              <h3 className="display-3">Our side items</h3>
              <p className="lead mt-1">
                Enjoy !
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg="3">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/pawel-nolbert.jpg") + ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                        Churros (2) $6.00
                      </h6>
                      
                      <CardTitle tag="h5">Fried dough dusted with sugar or cinnamon.</CardTitle>
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
                      "url(" + require("assets/img/sections/twk-tt.jpg") + ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                      Soda or Water $2.00
                      </h6>
                      <CardTitle tag="h5">Grab a drink</CardTitle>
                    </div>
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
                      "url(" + require("assets/img/sections/mark-harrison.jpg") + ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                        Seasoned Fries $6.00
                      </h6>
                      <CardTitle tag="h5">
                        Instant Classic
                      </CardTitle>
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

export default Blogs1;
