import React, { useRef, useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

export function Profile() {
  const [textMinimized, setTextMinimized] = useState(true);
  const rowRef = useRef<HTMLDivElement | null>(null);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 480px)" });

  const toggleTextExpansion = () => {
    setTextMinimized(!textMinimized);
    if (!textMinimized) {
      if (rowRef.current) {
        rowRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div >
      <Container className="padding-sm margin-inline-sm rounded" fluid>
        <Row
          className="grid grid-col-repeat-auto align-items-center justify-center padding-sm"
          ref={rowRef}
        >
          <Col className="flex align-items-center justify-center flex-shrink-2">
            <Image
              className="img-icon"
              src={`${process.env.PUBLIC_URL}/images/gamecontroller-svgrepo-com.svg`}
            ></Image>
          </Col>
          <Col className="flex align-items-center justify-center">
            <h1 className="padding-md">Profile</h1>
          </Col>
        </Row>
        <Row
          className={`${!isTabletOrMobile && "overflow-y-hidden"} padding-md ${
            textMinimized
              ? "profile_section_minimized"
              : "profile_section_expanded"
          }`}
          id="profileTextRow"
        >
          {!isTabletOrMobile ? (
            <>
              <Col className="flex justify-start align-items-center flex-d-col width-100">
                <Button id="expandAboutMe" onClick={toggleTextExpansion}>
                  See More
                </Button>
                <p
                  id="aboutMe_text"
                  className={`text text-dark-background ${
                    textMinimized ? "minimized" : "expanded"
                  }`}
                >
                  I’m a full-stack developer with a passion for creating
                  software that makes a positive impact. My love for technology
                  started with playing RuneScape and Adventure Quest as a kid,
                  and since then I’ve built computers, games, websites, and
                  applications using various tools and languages.
                  <br></br> <br></br>
                  Some of my recent projects include:<br></br> • A multiplayer
                  video game built from scratch using TypeScript, HTML, and CSS,
                  featuring a custom game engine and network connections via
                  sockets and HTTP requests.<br></br>
                  <br></br> • A laundromat application that enhances
                  accessibility and convenience through online payment
                  transactions built using React, and .NET for the server.
                  <br></br>
                  <br></br> • A website for Gee’s Clippers, a local barber shop,
                  to spotlight the amazing things they bring to the community
                  with their barbershop/ medical clinic combination. This
                  project included building an authentication system, a Spanish
                  translation toggle, and C.M.S abilities. All while being built
                  from scratch in HTML, CSS, TypeScript.<br></br> <br></br> As a
                  resident at i.c. stars, I also mentored a team of aspiring
                  developers in Kansas City, helping them launch their own web
                  application and secure job placements.
                  <br></br> <br></br>I’m a self-taught programmer who learned
                  the ropes through online courses, hands-on projects, all while
                  working full-time at Amazon. I don’t have a college degree,
                  but I have a lot of enthusiasm, curiosity, and creativity. I’m
                  always eager to learn new skills, explore new challenges, and
                  collaborate with others.<br></br> <br></br> If you’re looking
                  for a versatile, innovative, and driven developer to join your
                  team, let’s chat and see how we can work together!
                </p>
              </Col>
            </>
          ) : (
            <Col className="flex justify-start align-items-center flex-d-col width-100">
              <p
                id="aboutMe_text"
                className={`text text-dark-background  "minimized" `}
              >
                I’m a self-taught programmer who learned the ropes through
                online courses, hands-on projects, all while working full-time
                at Amazon. I don’t have a college degree, but I have a lot of
                enthusiasm, curiosity, and creativity. I’m always eager to learn
                new skills, explore new challenges, and collaborate with others.
                <br></br> <br></br> If you’re looking for a versatile,
                innovative, and driven developer to join your team, let’s chat
                and see how we can work together!
              </p>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}
