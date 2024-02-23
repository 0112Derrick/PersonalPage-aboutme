import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import ServiceCard from "./ServiceCard";

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
          <h1 className="padding-md section-title">Services</h1>
        </Col>
      </Row>
      <hr></hr>
      <Row className="flex align-items-center justify-center padding-md gap">
        <Col className="padding-inline-sm flex align-items-center justify-center">
          <ServiceCard
            className="servicesCard--frontEndDev"
            hrefLink="/#contact"
            cardImg={`${process.env.PUBLIC_URL}/images/monitor02.jpg`}
            cardBodyText={`Skilled in frontend development, I am enthusiastic about
                constructing interactive and mobile-responsive user interfaces
                that captivate and delight.`}
            cardTitleText={`Frontend\n Development`}
          ></ServiceCard>
        </Col>

        <Col className="padding-inline-sm flex align-items-center justify-center">
          <ServiceCard
            className="servicesCard--backEndDev"
            hrefLink="/#contact"
            cardImg={`${process.env.PUBLIC_URL}/images/backEndDev.jpg`}
            cardBodyText={` I love to design APIs that integrate the frontend and the
                backend in a data driven architecture.`}
            cardTitleText={` Backend \nDevelopment`}
          ></ServiceCard>
        </Col>

        <Col className="padding-inline-sm flex align-items-center justify-center">
          <ServiceCard
            className="servicesCard--fullStackDev"
            hrefLink="/#contact"
            cardImg={`${process.env.PUBLIC_URL}/images/fullstack.jpg`}
            cardBodyText="I'm proficient in full-stack development, I am driven by the
                challenge of creating robust, data-powered web applications
                designed to grow seamlessly."
            cardTitleText={`Fullstack \n Development`}
          ></ServiceCard>
        </Col>
      </Row>
    </Container>
  );
}
