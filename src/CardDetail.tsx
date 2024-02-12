import { useParams, Link } from "react-router-dom";
import { projectCards } from "./projects";
import { useState, useEffect } from "react";
import {
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Image,
} from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

export function CardDetail() {
  const { id } = useParams();
  const [cardDetails, setCardDetails] = useState<JSX.Element | null>(null);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 480px)" });

  useEffect(() => {
    const foundCard = projectCards.find(
      (card) => card.id === parseInt(id as string, 10)
    );

    if (foundCard) {
      const techUsedList = foundCard.techUsed.map((_tech, _id) => (
        <ListGroupItem as={"li"} key={`techUsed:${_id}`}>
          {_tech}
        </ListGroupItem>
      ));

      setCardDetails(
        <Container className="cardDetail rounded">
          <Row>
            <Col>
              <Link to={"/"}>Back To Home</Link>
              <Image
                src={foundCard.imageUrl}
                fluid
                className="rounded padding-sm"
              />
            </Col>
            <Col
              className={`flex flex-d-col gap padding-md ${
                isTabletOrMobile && "align-items-center"
              }`}
            >
              <h2>{foundCard.cardName}</h2>
              <p className={`${isTabletOrMobile && "text-align-center"}`}>
                {foundCard.description}
              </p>
              <p>
                <b>Release Date:</b> {foundCard.releaseDate}
              </p>
              <p>
                <b>Released:</b> {foundCard.released ? "Yes" : "No"}
              </p>
              {foundCard.siteUrl && (
                <div className="flex gap padding-b-sm">
                  <b>See The Site:</b>
                  <Link to={foundCard.siteUrl}>Click Here</Link>
                </div>
              )}
              <hr></hr>
              <h3>Tech Used:</h3>
              <ListGroup>{techUsedList}</ListGroup>
            </Col>
          </Row>
        </Container>
      );
    } else {
      // Handle case where card is not found
      setCardDetails(null);
    }
  }, [id]);

  return cardDetails;
}
