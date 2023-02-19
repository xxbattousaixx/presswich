import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components
const MapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#444444",
              },
            ],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [
              {
                color: "#f2f2f2",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [
              {
                saturation: -100,
              },
              {
                lightness: 45,
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [
              {
                visibility: "simplified",
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [
              {
                color: "#C5CBF5",
              },
              {
                visibility: "on",
              },
            ],
          },
        ],
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

function ContactUs4() {
  const [firstNameFocus, setFirstNameFocus] = React.useState("");
  const [emailFocus, setEmailFocus] = React.useState("");
  return (
    <>
        <MapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBspp4zh1cbU7jKihTkhFjo4rPkTYNlxAM"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div className="map" id="map-contactus-2" />}
          mapElement={<div />}
        />
        <Container>
        <br/><br/><br/><br/><br/>
          <Row>
            <Col md="5">
              <h1 className="title text-info"><b style={{fontFamily:'Indie Flower', fontSize:"4rem", color:'cyan'}}>Get in Touch</b></h1>
              <h4 className="description text-info">
              </h4><br/><br/>
            </Col>
            
            <Col className="m-auto" md="12">
              <Card className="card-contact card-raised">
                <Row>
                  <Col className="pr-md-0" lg="8" md="7">
                    <Form
                      className="p-3"
                      action="https://postmail.invotes.com/send"
                      method="post"
                      id="contact_form"
                      role="form"
                    >
                       <input
                      type="hidden"
                      name="access_token"
                      value="63yiwt3vt3p7kwh8m7zcdmd0"
                    />
                    <input
                      type="hidden"
                      name="success_url"
                      value=".?message=Email+Successfully+Sent%21&isError=0"
                    />
                    <input
                      type="hidden"
                      name="error_url"
                      value=".?message=Email+could+not+be+sent.&isError=1"
                    />

                      <CardHeader>
                        <CardTitle tag="h4">Send us a message</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col md="12">
                            <FormGroup className={firstNameFocus}>
                              <label>Full name</label>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-circle-08"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  aria-label="Full Name..."
                                  placeholder="Full Name..."
                                  type="text"
                                  name="subject"
                                  onFocus={() => setFirstNameFocus("focused")}
                                  onBlur={() => setFirstNameFocus("")}
                                ></Input>
                              </InputGroup>
                            </FormGroup>
                          </Col>
                          {/* <Col md="6">
                            <FormGroup className={emailFocus}>
                              <label>Last name</label>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-collection"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  aria-label="Last Name..."
                                  placeholder="Last Name..."
                                  type="text"
                                  name="extra_text"
                                  onFocus={() => setEmailFocus("focused")}
                                  onBlur={() => setEmailFocus("")}
                                ></Input>
                              </InputGroup>
                            </FormGroup>
                          </Col> */}
                        </Row>
                        <FormGroup>
                          <label>Email address</label>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email Here..."
                              type="text"
                              name="text"
                            ></Input>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <label>Phone Number</label>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-mobile-button"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Phone Here..."
                              type="text"
                              name="extra_subject"
                            ></Input>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <label>Your message</label>
                          <Input
                            id="contact-us-message-4"
                            name="extra_Message"
                            rows="6"
                            type="textarea"
                          ></Input>
                        </FormGroup>
                        <Row>
                          <Col md="6">
                            <div className="custom-control custom-checkbox mb-3">
                              <input
                                className="custom-control-input"
                                id="customCheck2"
                                type="checkbox"
                              ></input>
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck2"
                              >
                                <span>I'm not a robot</span>
                              </label>
                            </div>
                          </Col>
                          <Col md="6">
                          <input
                        type="hidden"
                        name="access_token"
                        value="63yiwt3vt3p7kwh8m7zcdmd0"
                      />
                            <Button
                              className="pull-right"
                              color="info"
                              type="submit"
                              id="submit_form"
                              value="Contact Us"
                            >
                              Send Message
                            </Button>
                          </Col>
                        </Row>
                      </CardBody>
                    </Form>
                  </Col>
                  <Col className="pl-md-0" lg="4" md="5">
                    <div className="info text-left bg-info">
                    <center>  <CardTitle className="text-white" tag="h4">
                        Contact information
                      </CardTitle></center>
                      <div className="info info-horizontal mt-lg-5">
                      <a href="/locations">     <div className="icon icon-shape bg-white rounded-circle text-info">
                          <i className="ni ni-square-pin"></i>
                        </div>
                        <div className="description">
                          <p className="info-title text-white mt-2">
                          <center>Click Here<br/>for<br/>
    Our locations</center>
                          </p>
                        </div></a>
                      </div><hr/>
                      <div className="info info-horizontal">
                      <a href="tel:8137244100">    <div className="icon icon-shape bg-white rounded-circle text-info">
                          <i className="ni ni-mobile-button"></i>
                        </div>
                        <div className="description">
                          <p className="info-title text-white mt-2"><center>
                            +1 (813) 724 4100</center>
                          </p>
                        </div></a>
                      </div><hr/>
                      <div className="info info-horizontal">
                <a href="mailto:shawn@wichpressfoodtruck.com">        <div className="icon icon-shape bg-white rounded-circle text-info">
                          <i className="ni ni-email-83"></i>
                        </div>
                        <div className="description">
                          <p style={{fontSize:'11px'}} className="info-title text-white mt-2">
                           <center> shawn@wichpressfoodtruck.com</center>
                          </p>
                        </div></a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
    </>
  );
}

export default ContactUs4;
