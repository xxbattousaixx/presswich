import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Accordion1() {
  const [openedCollapse, setOpenedCollapse] = React.useState("collapse-1");
  return (
    <>
      <div className="accordion-1">
        <Container>
        <br/><br/><br/>
          <Row>
            <Col className="mx-auto text-center" md="6">
              <h2 className="title mb-3 mt-5">Frequently asked questions</h2>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto" md="12">
              <div className="accordion" id="accordionExample">
                <Card>
                  <CardHeader id="headingOne">
                    <h5 className="mb-0">
                      <Button
                        aria-expanded={openedCollapse === "collapse-1"}
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapse-1" ? "" : "collapse-1"
                          )
                        }
                        className="w-100 text-primary text-left"
                        color="link"
                        type="button"
                      >
                        How do I order?{" "}
                        <i className="ni ni-bold-down float-right pt-1"></i>
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={openedCollapse === "collapse-1"}>
                    <CardBody className="opacity-8">
                      Call us now at 
+1 (813) 724 4100 to place an order for pickup or catering. You can also leave us a detailed message in the <a href="/contact-us">contact us</a> section.
                    </CardBody>
                  </Collapse>
                </Card>
               
              
                {/* <Card>
                  <CardHeader id="headingFour">
                    <h5 className="mb-0">
                      <Button
                        aria-expanded={openedCollapse === "collapse-4"}
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapse-4" ? "" : "collapse-4"
                          )
                        }
                        className="w-100 text-primary text-left"
                        color="link"
                        type="button"
                      >
                        Can I resell the products?{" "}
                        <i className="ni ni-bold-down float-right pt-1"></i>
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={openedCollapse === "collapse-4"}>
                    <CardBody className="opacity-8">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </CardBody>
                  </Collapse>
                </Card> */}
                <Card>
                  <CardHeader id="headingFifth">
                    <h5 className="mb-0">
                      <Button
                        aria-expanded={openedCollapse === "collapse-5"}
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapse-5" ? "" : "collapse-5"
                          )
                        }
                        className="w-100 text-primary text-left"
                        color="link"
                        type="button"
                      >
                        Where do I find the food truck today?{" "}
                        <i className="ni ni-bold-down float-right pt-1"></i>
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={openedCollapse === "collapse-5"}>
                    <CardBody className="opacity-8">
                     Please visit the <a href="https://streetfoodfinder.com/WichPress" target="_blank">locations page</a> to find our whereabouts today.
                    </CardBody>
                  </Collapse>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Accordion1;
