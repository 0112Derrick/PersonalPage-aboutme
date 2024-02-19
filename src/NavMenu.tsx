import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Col, Container, Image, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

function scrollIntoView(ele: any) {
  const targetElement = document.querySelector(ele) as HTMLElement;
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

interface NavMenuI {
  onDetailsPage?: boolean | undefined;
}

function NavMenu({ onDetailsPage }: NavMenuI) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const pageUrl = "/";
  if (onDetailsPage) {
  }
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
              <Nav.Link
                onClick={() => {
                  console.log(
                    `window:\n origin: ${window.location.origin}\n href:${window.location.href} `
                  );

                  console.log();
                  if (
                    !onDetailsPage &&
                    window.location.href.includes(window.location.origin)
                  ) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    window.location.href = pageUrl;
                  }
                }}
              >
                <img
                  id="homeLogo"
                  src={process.env.PUBLIC_URL + "/logoEditedWhite.png"}
                  alt="Home"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-1"
                onClick={() => {
                  console.log(
                    `window:\n origin: ${window.location.origin}\n href:${window.location.href} `
                  );

                  console.log();
                  if (
                    !onDetailsPage &&
                    window.location.href.includes(window.location.origin)
                  ) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    window.location.href = pageUrl;
                  }
                }}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-2"
                onClick={() => {
                  if (onDetailsPage) {
                    window.location.href = `${pageUrl}?scrollTo=profile_section`;
                  } else {
                    scrollIntoView("#profile_section");
                  }
                }}
              >
                Profile
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-3"
                onClick={() => {
                  if (onDetailsPage) {
                    window.location.href = `${pageUrl}?scrollTo=services_section`;
                  } else {
                    scrollIntoView("#services_section");
                  }
                }}
              >
                Services
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-4"
                onClick={() => {
                  if (onDetailsPage) {
                    window.location.href = `${pageUrl}?scrollTo=portfolio_section`;
                  } else {
                    scrollIntoView("#portfolio_section");
                  }
                }}
              >
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-5"
                onClick={() => {
                  if (onDetailsPage) {
                    window.location.href = `${pageUrl}?scrollTo=skills_section`;
                  } else {
                    scrollIntoView("#skills_section");
                  }
                }}
              >
                Skills
              </Nav.Link>
            </Nav.Item>
          </div>
        </Nav>
      )}
      {isTabletOrMobile && (
        <Nav className="grid grid-mobile-nav padding-sm width-100 align-items-center">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                console.log(
                  `window:\n origin: ${window.location.origin}\n href:${window.location.href} `
                );

                console.log();
                if (
                  !onDetailsPage &&
                  window.location.href.includes(window.location.origin)
                ) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  window.location.href = pageUrl;
                }
              }}
            >
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
                      <Nav.Link
                        onClick={() => {
                          console.log(
                            `window:\n origin: ${window.location.origin}\n href:${window.location.href} `
                          );

                          console.log();
                          if (
                            !onDetailsPage &&
                            window.location.href.includes(
                              window.location.origin
                            )
                          ) {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          } else {
                            window.location.href = pageUrl;
                          }
                        }}
                      >
                        Home
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => {
                          if (onDetailsPage) {
                            window.location.href = `${pageUrl}?scrollTo=profile_section`;
                          } else {
                            scrollIntoView("#profile_section");
                          }
                        }}
                      >
                        Profile
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => {
                          if (onDetailsPage) {
                            window.location.href = `${pageUrl}?scrollTo=services_section`;
                          } else {
                            scrollIntoView("#services_section");
                          }
                        }}
                      >
                        Services
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => {
                          if (onDetailsPage) {
                            window.location.href = `${pageUrl}?scrollTo=portfolio_section`;
                          } else {
                            scrollIntoView("#portfolio_section");
                          }
                        }}
                      >
                        Portfolio
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => {
                          if (onDetailsPage) {
                            window.location.href = `${pageUrl}?scrollTo=skills_section`;
                          } else {
                            scrollIntoView("#skills_section");
                          }
                        }}
                      >
                        Skills
                      </Nav.Link>
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
