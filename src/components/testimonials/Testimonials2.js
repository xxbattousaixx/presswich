import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
} from "reactstrap";

// Core Components
const items = [
  {
    content: (
      <>
        <div className="info text-left bg-danger shadow-lg">
          <div className="icon icon-shape bg-white text-danger shadow rounded-circle mb-4">
            <i className="fa fa-quote-right"></i>
          </div>
          <p className="description text-white">
            This website is used for bookings...
          </p>
          <div className="author">
            <img
              alt="..."
              className="avatar img-raised"
              src={require("assets/img/brand/blue.png")}
            ></img>
            <span>WHICHPRESS FOOD TRUCK</span>
          </div>
        </div>
        <Card className="card-blog card-background" data-animation={true}>
          <div
            className="full-background"
            style={{
              backgroundImage:
                "url(" + require("assets/img/sections/austin.jpg") + ")",
            }}
          ></div>
          <CardBody>
            <div className="content-bottom ml-auto">
              <Button
                className="btn-round btn-simple btn-neutral"
                color="default"
                href="https://streetfoodfinder.com/wichpress"
              >
                <i className="ni ni-book-bookmark"></i>
                Find us!
              </Button>
            </div>
          </CardBody>
        </Card>
      </>
    ),
    src: "0",
    altText: "",
    caption: "",
  },
  {
    content: (
      <>
        <div className="info text-left bg-info shadow-lg">
          <div className="icon icon-shape bg-white text-info shadow rounded-circle mb-4">
            <i className="fa fa-quote-right"></i>
          </div>
          <p className="description text-white">
            This website is used for locations...
          </p>
          <div className="author">
            <img
              alt="..."
              className="avatar img-raised"
              src={require("assets/img/brand/blue.png")}
            ></img>
            <span>WICHPRESS FOOD TRUCK</span>
          </div>
        </div>
        <Card className="card-blog card-background" data-animation={true}>
          <div
            className="full-background"
            style={{
              backgroundImage:
                "url(" + require("assets/img/sections/unsplashs.jpg") + ")",
            }}
          ></div>
          <CardBody>
            <div className="content-bottom ml-auto">
              <Button
                className="btn-round btn-simple btn-neutral"
                color="default"
                href="https://streetfoodfinder.com/wichpress"
              >
                <i className="ni ni-book-bookmark"></i>
                Find Us!
              </Button>
            </div>
          </CardBody>
        </Card>
      </>
    ),
    src: "1",
    altText: "",
    caption: "",
  },
];

function Testimonials2() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  return (
    <>
      <div className="testimonials-2">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h2 className="title">OUR LOCATIONS THIS WEEK</h2>
            </Col>
          </Row>
          <Row>
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              className="carousel-testimonials"
              id="carouselFade"
            >
              {items.map((item, key) => {
                return (
                  <CarouselItem
                    onExiting={() => setAnimating(true)}
                    onExited={() => setAnimating(false)}
                    key={key}
                  >
                    {item.content}
                  </CarouselItem>
                );
              })}
              <a
                className="carousel-control-prev"
                data-slide="prev"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  previous();
                }}
                role="button"
              >
                <i className="ni ni-bold-left"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                data-slide="next"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  next();
                }}
                role="button"
              >
                <i className="ni ni-bold-right"></i>
                <span className="sr-only">Next</span>
              </a>
            </Carousel>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Testimonials2;
