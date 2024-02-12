import React, { Component, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface portfolioCard {
  id: number;
  cardName: string;
  techStack: string;
  imgUrl: string;
  siteUrl: string;
  className: string | undefined;
}

export function PortfolioCard({
  id,
  cardName,
  techStack,
  imgUrl,
  siteUrl,
  className,
}: portfolioCard) {
  const [isHovering, setIsHovering] = useState(false);
  const [iconName, setIconName] = useState("");
  const cardNameArr = cardName.split(" ");
  const [modifiedClassName, setModifiedClassName] = useState("");

  useEffect(() => {
    if (cardNameArr.length > 1) {
      let name = "";
      name += cardNameArr[0].toLowerCase();
      for (let i = 1; i < cardNameArr.length; i++) {
        name += cardNameArr[i].slice(0, 1).toUpperCase();
        name += cardNameArr[i].slice(1);
      }
      setModifiedClassName(name);
    } else {
      setModifiedClassName(cardName.toLowerCase());
    }
  }, [cardName]);

  return (
    <Card
      className={`portfolioCard portfolioCard--${modifiedClassName} padding-sm ${
        className ? className : ""
      }`}
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      <Card.Img
        variant="top"
        className="portfolioCardImage"
        src={`${imgUrl}`}
      />
      <div className={`${isHovering ? "visible-grid" : "hidden"} hoverCard`}>
        <p
          className={`text-dark-background portfolioCard-img-icon-text ${
            iconName ? "appearAnimation" : ""
          } `}
        >
          {iconName}
        </p>

        <Link to={`/card/${id}`} className="portfolioCard-img-link">
          <img
            src={`${process.env.PUBLIC_URL}/images/info-circle-svgrepo-com.svg`}
            className="portfolioCard-img-icon rounded-circle padding-sm"
            alt="More Info"
            onMouseEnter={() => setIconName("More Info")}
            onMouseLeave={() => setIconName("")}
          />
        </Link>

        <Link
          to={siteUrl ? siteUrl : `/card/${id}`}
          target="_blank"
          className="portfolioCard-img-link"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/eye-svgrepo-com.svg`}
            className="portfolioCard-img-icon rounded-circle padding-sm"
            alt="See The App"
            onMouseEnter={() => setIconName("See The App")}
            onMouseLeave={() => setIconName("")}
          />
        </Link>
      </div>
      <div className="portfolioCardDevStack">{techStack}</div>
      <Card.Body className="rounded portfolioCard-body">
        <Card.Text className="portfolioCard-text">
          {cardName.toUpperCase()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
