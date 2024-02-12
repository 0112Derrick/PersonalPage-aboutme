import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Col, Container, Image, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

function NavMenu() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [playOpenAnimation, setPlayOpenAnimation] = useState(false);

  return (
    <>
      {isDesktopOrLaptop && (
        <Nav
          activeKey="/home"
          // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <div className="grid width-100 grid-col-40-repeat-auto align-items-center justify-start">
            <Nav.Item>
              <Nav.Link href="/">
                <img
                  id="homeLogo"
                  src={process.env.PUBLIC_URL + "/logoEditedWhite.png"}
                  alt="Home"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" href="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" href="#profile_section">
                Profile
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-5">Skills</Nav.Link>
            </Nav.Item>
          </div>
        </Nav>
      )}
      {isTabletOrMobile && (
        <Nav className="grid grid-mobile-nav padding-sm width-100 align-items-center">
          <Nav.Item>
            <Nav.Link href="/">
              <img
                id="homeLogo"
                src={process.env.PUBLIC_URL + "/logoEditedWhite.png"}
                alt="Home"
              />
            </Nav.Link>
          </Nav.Item>
          {isNavMenuOpen ? (
            <>
              <Nav.Item>
                <div className="rounded-circle nav-mobile-menu-icon-background">
                  <Image
                    className="nav-mobile-menu-icon"
                    src={`${process.env.PUBLIC_URL}/images/navMenuClosed.svg`}
                    onClick={() => {
                      setPlayOpenAnimation(false);
                      setTimeout(() => {
                        setIsNavMenuOpen(false);
                      }, 1000);
                    }}
                  ></Image>
                </div>
                <Container
                  className={`nav-mobile-menu ${
                    playOpenAnimation
                      ? "slideInToLeftAnimation"
                      : "slideOutToRightAnimation"
                  }`}
                >
                  <Row className="flex-d-col align-items-start">
                    <Nav.Item>
                      <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/">Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/">Skills</Nav.Link>
                    </Nav.Item>
                  </Row>
                </Container>
              </Nav.Item>
            </>
          ) : (
            <Nav.Item
              onClick={() => {
                setIsNavMenuOpen(true);
                setPlayOpenAnimation(true);
              }}
            >
              <div className="rounded-circle nav-mobile-menu-icon-background">
                <Image
                  className="nav-mobile-menu-icon"
                  src={`${process.env.PUBLIC_URL}/images/navMenuOpen.svg`}
                ></Image>
              </div>
            </Nav.Item>
          )}
        </Nav>
      )}
    </>
  );
}

export default NavMenu;
