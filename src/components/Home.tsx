import React from "react";
import { useMediaQuery } from "react-responsive";
import Sparkle from "./Sparkle";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Portfolio } from "./Portfolio";
import { Profile } from "./Profile";
import { Services } from "./Services";
import { Skills } from "./Skills";
import Footer from "./Footer";

export function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const containerRef = React.useRef(null);

  return (
    <>
      {isDesktopOrLaptop && (
        <>
          <main>
            <header ref={containerRef}>
              <Sparkle
                parentRef={containerRef}
                maxSparkles={20}
                eraseTime={3000}
              ></Sparkle>
              <Image
                src={process.env.PUBLIC_URL + "/images/galaxySky02.webp"}
                alt="Background parallax"
                className="background bg-img"
              ></Image>

              <div className="flex align-items-center justify-center flex-d-col">
                <Image
                  src={process.env.PUBLIC_URL + "/images/moon.webp"}
                  alt="Moon"
                  className="parallax moon-img"
                ></Image>

                <h1 className="parallax-text">
                  Derrick Williams <br></br>
                  Software Development
                  {/* <br></br>
                  <a className="parallax-call-to-action" href="/#contact">
                    Contact Me
                  </a> */}
                </h1>
              </div>

              <Image
                src={process.env.PUBLIC_URL + "/images/mountain.webp"}
                alt="Background parallax"
                className="background bg-img01 mountain"
              ></Image>

              <Image
                src={process.env.PUBLIC_URL + "/images/ParallaxBG.webp"}
                alt="Background parallax"
                className="background bg-img02 "
              ></Image>

              <Image
                src={process.env.PUBLIC_URL + "/images/parallaxFront03.webp"}
                alt="Background parallax"
                className="foreground front-img"
              ></Image>

              <Image
                src={process.env.PUBLIC_URL + "/images/foreground_dirt.webp"}
                alt="Background parallax"
                className="foreground front-img2"
              ></Image>
            </header>

            <Container fluid>
              <Row>
                <Col>
                  <div className="spacer-lg"></div>
                </Col>
              </Row>
              <Row>
                <Col id="services_section">
                  <Services></Services>
                </Col>
              </Row>
              <Row>
                <Col id="portfolio_section">
                  <Portfolio></Portfolio>
                </Col>
              </Row>
              <Row>
                <Col id="skills_section">
                  <Skills></Skills>
                </Col>
              </Row>
              <Row>
                <Col id="profile_section">
                  <Profile></Profile>
                </Col>
              </Row>
              <Row>
                <Col id="footer_section" className="width-100 padding-0">
                  <Footer></Footer>
                </Col>
              </Row>
            </Container>
          </main>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <LazyLoadImage
            src={`${process.env.PUBLIC_URL}/images/fulldesign.webp`}
            alt=""
            className="img-fluid home-img-mobile"
            placeholderSrc={`${process.env.PUBLIC_URL}/images/fulldesignLQIP.webp`}
          ></LazyLoadImage>
          <Container fluid>
            <Row>
              <Col id="services_section">
                <Services></Services>
              </Col>
            </Row>
            <Row>
              <Col id="portfolio_section">
                <Portfolio></Portfolio>
              </Col>
            </Row>
            <Row>
              <Col id="skills_section">
                <Skills></Skills>
              </Col>
            </Row>
            <Row>
              <Col id="profile_section">
                <Profile></Profile>
              </Col>
            </Row>
            <Row>
              <Col id="footer_section" className="width-100 padding-0">
                <Footer></Footer>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
}
