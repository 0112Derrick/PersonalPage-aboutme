import React, { useState } from "react";
import { Card, Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import { PortfolioCard } from "./PortfolioCard";
import { projectCards } from "./projects";

interface PortfolioI {
  projects: JSX.Element[] | null;
}

export function Portfolio() {
  const [filterSetting, setFilterSetting] = useState("");
  const [playAnimation, setPlayAnimation] = useState(false);

  const listProjectCards =
    projectCards && Array.isArray(projectCards)
      ? projectCards.map((projectCard) => {
          if (
            filterSetting == "" ||
            projectCard.filters.find(
              (tech) => tech.toLowerCase() == filterSetting.toLowerCase()
            )
          )
            return (
              <Col
                className="padding-inline-sm flex align-items-center justify-center"
                key={projectCard.id}
              >
                <PortfolioCard
                  id={projectCard.id}
                  cardName={projectCard.cardName}
                  techStack={projectCard.techStack}
                  imgUrl={projectCard.imageUrl}
                  siteUrl={projectCard.siteUrl}
                  className={`${playAnimation ? "dropDownAnimation" : ""}`}
                ></PortfolioCard>
              </Col>
            );
        })
      : null;

  return (
    <Container
      className="portfolio-section padding-md margin-inline-sm rounded"
      fluid
    >
      <Row className="grid grid-col-repeat-auto align-items-center justify-center padding-sm">
        <Col className="flex align-items-center justify-center flex-shrink-2">
          <img
            className="img-icon"
            src={`${process.env.PUBLIC_URL}/images/art-palette.svg`}
            alt=""
          />
        </Col>
        <Col className="flex align-items-center justify-center">
          <h1 className="padding-md">Portfolio</h1>
        </Col>
      </Row>
      <Row className="flex align-items-center justify-center fluid gap padding-b-md">
        <div className="portfolio-button-container">
          <Button
            onClick={() => {
              setFilterSetting("");
              setPlayAnimation(true);
              setTimeout(() => {
                setPlayAnimation(false);
              }, 1000);
            }}
          >
            All
          </Button>
          <Button
            onClick={() => {
              setFilterSetting("fullstack");
              setPlayAnimation(true);
              setTimeout(() => {
                setPlayAnimation(false);
              }, 1000);
            }}
          >
            FullStack
          </Button>
          <Button
            onClick={() => {
              setFilterSetting("nodejs");
              setPlayAnimation(true);
              setTimeout(() => {
                setPlayAnimation(false);
              }, 1000);
            }}
          >
            NodeJS
          </Button>
          <Button
            onClick={() => {
              setFilterSetting("asp.net");
              setPlayAnimation(true);
              setTimeout(() => {
                setPlayAnimation(false);
              }, 1000);
            }}
          >
            Asp.Net
          </Button>
          <Button
            onClick={() => {
              setFilterSetting("express");
              setPlayAnimation(true);
              setTimeout(() => {
                setPlayAnimation(false);
              }, 1000);
            }}
          >
            Express
          </Button>
          <Button
            onClick={() => {
              setFilterSetting("wordpress");
              setPlayAnimation(true);
              setTimeout(() => {
                setPlayAnimation(false);
              }, 1000);
            }}
          >
            Wordpress
          </Button>
          <Button
            onClick={() => {
              setFilterSetting("frontend");
              setPlayAnimation(true);
              setTimeout(() => {
                setPlayAnimation(false);
              }, 1000);
            }}
          >
            Front-End
          </Button>
          <Button
            onClick={() => {
              setFilterSetting("typescript");
              setPlayAnimation(true);
              setTimeout(() => {
                setPlayAnimation(false);
              }, 1000);
            }}
          >
            TypeScript
          </Button>
        </div>
      </Row>
      <Row className={`${playAnimation ? "dropDownFadeAwayAnimation" : ""}`}>
        {listProjectCards}
      </Row>
    </Container>
  );
}
