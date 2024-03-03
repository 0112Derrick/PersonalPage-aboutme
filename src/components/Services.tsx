import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./ServiceCard";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useMediaQuery } from "react-responsive";

export function Services() {
  const services = [
    {
      imageSrc: `${process.env.PUBLIC_URL}/images/frontend.webp`,
      href: "/#contact",
      className: "servicesCard--frontEndDev",
      cardTitle: "Frontend\n Development",
      cardBody: `Skilled in frontend development, I am enthusiastic about
                constructing interactive and mobile-responsive user interfaces
                that captivate and delight.`,
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/images/backEndDev.webp`,
      href: "/#contact",
      className: "servicesCard--backEndDev",
      cardTitle: "Backend\n Development",
      cardBody: `I love to design APIs that integrate the frontend and the
                backend in a data driven architecture.`,
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/images/fullstack.webp`,
      href: "/#contact",
      className: "servicesCard--fullStackDev",
      cardTitle: `Fullstack\n Development`,
      cardBody: `I'm proficient in full-stack development, I am driven by the
                challenge of creating robust, data-powered web applications
                designed to grow seamlessly.`,
    },
  ];
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [hoverActive, setHovereActive] = useState<boolean>(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const serviceCards =
    Array.isArray(services) &&
    services.map((service, index) => {
      return (
        <Col
          key={index}
          className={`padding-inline-sm flex align-items-center justify-center ${
            isTabletOrMobile ? "mobileFadeIn z-mobileFadeIn" : ""
          }`}
          onMouseEnter={() => {
            setIsHovered(index);
            setHovereActive(true);
          }}
          onMouseLeave={() => {
            setIsHovered(null);
            setHovereActive(false);
          }}
        >
          <ServiceCard
            className={`${service.className}`}
            hrefLink={service.href}
            cardImg={service.imageSrc}
            cardTitleText={service.cardTitle}
            cardBodyText={service.cardBody}
            isHovered={isHovered === index}
            hoverActive={hoverActive}
          ></ServiceCard>
        </Col>
      );
    });

  return (
    <Container
      className="services-section padding-md margin-inline-sm rounded"
      fluid
    >
      <Row className="grid grid-col-repeat-auto align-items-center justify-center padding-sm">
        <Col className="flex align-items-center justify-center flex-shrink-2">
          <LazyLoadImage
            src={`${process.env.PUBLIC_URL}/images/briefcase-svgrepo-com.svg`}
            alt=""
            className="img-icon"
          ></LazyLoadImage>
        </Col>
        <Col className="flex align-items-center justify-center ">
          <h1 className="padding-md section-title">Services</h1>
        </Col>
      </Row>
      <hr></hr>
      <Row className="flex align-items-center justify-center padding-md gap">
        {serviceCards}
      </Row>
    </Container>
  );
}
