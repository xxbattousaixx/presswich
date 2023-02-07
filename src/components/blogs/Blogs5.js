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
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "assets/img/sections/mark-harrison.jpg";
import MyPhoto2 from "assets/img/sections/thomas.jpg";
import MyPhoto3 from "assets/img/sections/odin.jpg";
function Blogs5() {
  return (
    <>
      <section className="blogs-5">
        <Container>
          <Row>
            <Col id="drinks" className="mx-auto" md="10">
              <h2 className="title mb-5">Accompaniments:</h2>
              <Row>
                <Col lg="4" md="6">
                 
                    <div className="card-image shadow" >
                      <a  onClick={(e) => e.preventDefault()}>
                        {/* <img
                          alt="..."
                          className="img rounded"
                          style={{ height: "200px" }}

                          src={require("assets/img/sections/mark-harrison.jpg")}
                        ></img> */}

                <ReactRoundedImage roundedColor="lightblue" image={MyPhoto} />

                      </a>
                    </div>
                      <h4>
                        <a  onClick={(e) => e.preventDefault()}>
                          Seasoned Fries
                        </a>
                      </h4><Col md='3'></Col><Col md='6'>
                      <p className="card-description">
                        Enjoy our classic fries
                      </p></Col>
                      <Col md='3'></Col>
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
                          Soda or Water
                        </a>
                      </CardTitle><Col md='3'></Col><Col md='6'>
                      <p className="card-description">
                      Grab a drink
                      </p></Col>
                      <Col md='3'></Col>
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
                          Churros (2)
                        </a>
                      </CardTitle><Col md='3'></Col><Col md='6'>
                      <p className="card-description">
                      Sweet snack consisting of a strip of fried dough dusted with sugar or cinnamon.
                      </p></Col><Col md='3'></Col>
                   
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
