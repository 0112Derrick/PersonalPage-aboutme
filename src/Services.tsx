import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";

export function Services() {
  return (
    <Container
      className="services-section padding-md margin-inline-sm rounded"
      fluid
    >
      <Row className="grid grid-col-repeat-auto align-items-center justify-center padding-sm">
        <Col className="flex align-items-center justify-center flex-shrink-2">
          <Image
            className="img-icon"
            src={`${process.env.PUBLIC_URL}/images/briefcase-svgrepo-com.svg`}
          ></Image>
        </Col>
        <Col className="flex align-items-center justify-center ">
          <h1 className="padding-md">Services</h1>
        </Col>
      </Row>
      <Row className="flex align-items-center justify-center">
        <Col className="padding-inline-sm flex align-items-center justify-center">
          <Card className="servicesCard servicesCard--frontEndDev padding-sm card-colored-bottom-1">
            <Card.Img
              variant="top"
              className="servicesCardImage rounded"
              src={`${process.env.PUBLIC_URL}/images/monitor02.jpg`}
            />
            <Card.Body className="rounded">
              <h3 className="servicesCard-title padding-sm">
                Frontend <br></br> Development
              </h3>
              <Card.Text className="servicesCard-text">
                Skilled in frontend development, I am enthusiastic about
                constructing interactive and mobile-responsive user interfaces
                that captivate and delight.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="padding-inline-sm flex align-items-center justify-center">
          <Card className="servicesCard servicesCard--fullStackDev padding-sm card-colored-bottom-2">
            <Card.Img
              variant="top"
              className="servicesCardImage rounded"
              src={`${process.env.PUBLIC_URL}/images/fullstack.jpg`}
            />
            <Card.Body className="rounded">
              <h3 className="servicesCard-title padding-sm">
                Fullstack <br></br> Development
              </h3>
              <Card.Text className="servicesCard-text">
                I'm proficient in full-stack development, I am driven by the
                challenge of creating robust, data-powered web applications
                designed to grow seamlessly.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
