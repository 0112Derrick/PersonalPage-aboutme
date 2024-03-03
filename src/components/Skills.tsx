import { Row, Col, Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useMediaQuery } from "react-responsive";

export function Skills() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <>
      <Container
        className="skills-section padding-md margin-inline-sm rounded"
        fluid
      >
        <Row className="grid grid-col-repeat-auto align-items-center justify-center padding-sm">
          <Col className="flex align-items-center justify-center flex-shrink-2">
            <LazyLoadImage
              src={`${process.env.PUBLIC_URL}/images/bullseye.svg`}
              alt=""
              className="img-icon"
            ></LazyLoadImage>
          </Col>
          <Col className="flex align-items-center justify-center">
            <h1 className="padding-md section-title">Skills</h1>
          </Col>
        </Row>
        <hr></hr>
        <Row className="grid grid-col-repeat-3-auto padding-sm align-items-center justify-center gap">
          <Col
            className={`text-align-center flex flex-d-col align-items-center justify-center padding-md ${
              isTabletOrMobile ? "mobileScrollInSideLeft z-mobileFadeIn" : ""
            }`}
          >
            <LazyLoadImage
              src={`${process.env.PUBLIC_URL}/images/html.svg`}
              alt=""
              className="img-fluid"
            ></LazyLoadImage>
            <h3 className="width-max">HTML</h3>
          </Col>
          <Col
            className={`text-align-center flex flex-d-col align-items-center justify-center ${
              isTabletOrMobile ? "mobileScrollInSideLeft z-mobileFadeIn" : ""
            }`}
          >
            <LazyLoadImage
              src={`${process.env.PUBLIC_URL}/images/css.svg`}
              alt=""
              className="img-fluid"
            ></LazyLoadImage>
            <h3>CSS</h3>
          </Col>
          <Col
            className={`text-align-center flex flex-d-col align-items-center justify-center ${
              isTabletOrMobile ? "mobileScrollInSideLeft z-mobileFadeIn" : ""
            }`}
          >
            <LazyLoadImage
              src={`${process.env.PUBLIC_URL}/images/typescript.svg`}
              alt=""
              className="img-fluid"
            ></LazyLoadImage>

            <h3 className="width-max">TYPESCRIPT</h3>
          </Col>
          <Col
            className={`text-align-center flex flex-d-col align-items-center justify-center ${
              isTabletOrMobile ? "mobileScrollInSideLeft z-mobileFadeIn" : ""
            }`}
          >
            <LazyLoadImage
              src={`${process.env.PUBLIC_URL}/images/react.svg`}
              alt=""
              className="img-fluid"
            ></LazyLoadImage>
            <h3 className="width-max">REACT</h3>
          </Col>
          <Col
            className={`text-align-center flex flex-d-col align-items-center justify-center ${
              isTabletOrMobile ? "mobileScrollInSideLeft z-mobileFadeIn" : ""
            }`}
          >
            <LazyLoadImage
              src={`${process.env.PUBLIC_URL}/images/nodejs.svg`}
              alt=""
              className="img-fluid"
            ></LazyLoadImage>
            <h3 className="width-max">NODEJS</h3>
          </Col>
          <Col
            className={`text-align-center flex flex-d-col align-items-center justify-center ${
              isTabletOrMobile ? "mobileScrollInSideLeft z-mobileFadeIn" : ""
            }`}
          >
            <LazyLoadImage
              src={`${process.env.PUBLIC_URL}/images/mongodb.svg`}
              alt=""
              className="img-fluid"
            ></LazyLoadImage>
            <h3 className="width-max">MONGODB</h3>
          </Col>
          <Col
            className={`text-align-center flex flex-d-col align-items-center justify-center ${
              isTabletOrMobile ? "mobileScrollInSideLeft z-mobileFadeIn" : ""
            }`}
          >
            <LazyLoadImage
              src={`${process.env.PUBLIC_URL}/images/dot-net.svg`}
              alt=""
              className="img-fluid"
            ></LazyLoadImage>
            <h3 className="width-max">ASP.NET WEB API</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}
