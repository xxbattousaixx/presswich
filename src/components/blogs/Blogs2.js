import React from "react";
import Lottie from 'react-lottie';
import animationData from 'assets/lotties/waves.json';
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';

function Blogs2() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
      <section className="blogs-2" >
        <Container fluid >
          <Row className="mb-md-5">
            <Col className="mx-auto" md="8">
              <h3 className="display-3 text-center">Locations and online orders</h3>
              <p className="lead text-center">
                Through these portals you can make an order online for your event.<br/>
                Explore the map to find out where we are today!
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="5">
            <LazyLoad>  <Card
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
                      <CardTitle tag="h5">Find us now!</CardTitle>
                  </CardBody>
                </a>
              </Card></LazyLoad>
            </Col>
            <Col lg="2"><Lottie 
	    options={defaultOptions}
     height='55px'
     width='55px'
      /></Col>
            <Col lg="5">
            <LazyLoad> <Card
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
                      <CardTitle tag="h5">Find us now!</CardTitle>
                  </CardBody>
                </a>
              </Card></LazyLoad> 
            </Col>
            
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Blogs2;
