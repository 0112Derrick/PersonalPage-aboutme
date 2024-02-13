import { Row, Col, Image, Container } from "react-bootstrap";

export function Skills() {
  return (
    <>
      <Container
        className="skills-section padding-md margin-inline-sm rounded"
        fluid
        
      >
        <Row className="grid grid-col-repeat-auto align-items-center justify-center padding-sm">
          <Col className="flex align-items-center justify-center flex-shrink-2">
            <img
              className="img-icon"
              src={`${process.env.PUBLIC_URL}/images/bullseye.svg`}
              alt=""
            />
          </Col>
          <Col className="flex align-items-center justify-center">
            <h1 className="padding-md">Skills</h1>
          </Col>
        </Row>
        <Row className="grid grid-col-repeat-3-auto padding-sm align-items-center justify-center gap">
          <Col className="text-align-center flex flex-d-col align-items-center justify-center">
            <Image
              fluid
              src={`${process.env.PUBLIC_URL}/images/html.svg`}
            ></Image>
            <h3 className="width-max">HTML</h3>
          </Col>
          <Col className="text-align-center flex flex-d-col align-items-center justify-center">
            <Image
              fluid
              src={`${process.env.PUBLIC_URL}/images/css.svg`}
            ></Image>
            <h3>CSS</h3>
          </Col>
          <Col className="text-align-center flex flex-d-col align-items-center justify-center">
            <Image
              fluid
              src={`${process.env.PUBLIC_URL}/images/typescript.svg`}
            ></Image>
            <h3 className="width-max">TYPESCRIPT</h3>
          </Col>
          <Col className="text-align-center flex flex-d-col align-items-center justify-center">
            <Image
              fluid
              src={`${process.env.PUBLIC_URL}/images/react.svg`}
            ></Image>
            <h3 className="width-max">REACT</h3>
          </Col>
          <Col className="text-align-center flex flex-d-col align-items-center justify-center">
            <Image
              fluid
              src={`${process.env.PUBLIC_URL}/images/nodejs.svg`}
            ></Image>
            <h3 className="width-max">NODEJS</h3>
          </Col>
          <Col className="text-align-center flex flex-d-col align-items-center justify-center">
            <Image
              fluid
              src={`${process.env.PUBLIC_URL}/images/mongodb.svg`}
            ></Image>
            <h3 className="width-max">MONGODB</h3>
          </Col>
          <Col className="text-align-center flex flex-d-col align-items-center justify-center">
            <Image
              fluid
              src={`${process.env.PUBLIC_URL}/images/dot-net.svg`}
            ></Image>
            <h3 className="width-max">ASP.NET WEB API</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}
