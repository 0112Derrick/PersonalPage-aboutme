import { useState } from "react";
import { Card } from "react-bootstrap";

function ServiceCard({
  className,
  hrefLink,
  cardImg,
  cardTitleText,
  cardBodyText,
}: {
  className: string;
  hrefLink: string;
  cardImg: string;
  cardTitleText: string;
  cardBodyText: string;
}) {
  const [playHoverAnimation, setPlayHoverAnimation] = useState(false);
  return (
    <Card
      className={`servicesCard ${className} padding-sm card-colored-bottom-2 ${
        playHoverAnimation
          ? "growServiceCardAnimation"
          : "shrinkServiceCardAnimation"
      }`}
      onClick={() => {
        window.location.href = hrefLink;
      }}
      onMouseEnter={() => {
        setPlayHoverAnimation(true);
      }}
      onMouseLeave={() => {
        setPlayHoverAnimation(false);
      }}
    >
      <Card.Img
        variant="top"
        className="servicesCardImage rounded"
        src={`${cardImg}`}
      />
      <Card.Body className="rounded">
        <h3 className="servicesCard-title padding-sm">{cardTitleText}</h3>
        <Card.Text className="servicesCard-text">{cardBodyText}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
