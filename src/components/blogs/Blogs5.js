import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

function Blogs5() {
  return (
    <>
      <section className="blogs-5">
        <Container>
          <Row>
            <Col className="mx-auto" md="10">
              <h2 className="title mb-5">Accompaniments:</h2>
              <Row>
                <Col lg="4" md="6">
                  <Card className="card-blog card-plain">
                    <div className="card-image shadow" id="drinks">
                      <a  onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded"
                          style={{ height: "200px" }}

                          src={require("assets/img/sections/mark-harrison.jpg")}
                        ></img>
                      </a>
                    </div>
                    <CardBody>
                      <CardTitle tag="h4">
                        <a  onClick={(e) => e.preventDefault()}>
                          Seasoned Fries $6.00
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Enjoy our classic fries
                      </p>
                     
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4" md="6">
                  <Card className="card-blog card-plain">
                    <div className="card-image shadow">
                      <a  onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded"
                          style={{ height: "200px" }}

                          src={require("assets/img/sections/twk-tt.jpg")}
                        ></img>
                      </a>
                    </div>
                    <CardBody>
                      <CardTitle tag="h4">
                        <a  onClick={(e) => e.preventDefault()}>
                          Soda or Water $2.00
                        </a>
                      </CardTitle>
                      <p className="card-description">
                      Grab a drink
                      </p>
                    
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4" xs="12">
                  <Card className="card-blog card-plain">
                    <div className="card-image shadow">
                      <a  onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded"
                          style={{ height: "200px" }}

                          src={require("assets/img/sections/pawel-nolbert.jpg")}
                        ></img>
                      </a>
                    </div>
                    <CardBody>
                      <CardTitle tag="h4">
                        <a  onClick={(e) => e.preventDefault()}>
                          Churros (2) $6.00
                        </a>
                      </CardTitle>
                      <p className="card-description">
                      Sweet snack consisting of a strip of fried dough dusted with sugar or cinnamon.
                      </p>
                   
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Blogs5;
