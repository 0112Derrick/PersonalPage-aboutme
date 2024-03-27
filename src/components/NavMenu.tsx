import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Container, Image, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

function scrollIntoView(ele: any) {
  const targetElement = document.querySelector(ele) as HTMLElement;
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

enum WindowLocations {
  Service_Section = "services_section",
  Portfolio_Section = "portfolio_section",
  Skills_Section = "skills_section",
  Profile_Section = "profile_section",
}

interface NavMenuI {
  onDetailsPage?: boolean | undefined;
}

function NavMenu({ onDetailsPage }: NavMenuI) {
  const navigate = useNavigate();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const pageUrl = "/";
  const closeMobileNavMenu = () => {
    setPlayOpenAnimation(false);
    setTimeout(() => {
      setIsNavMenuOpen(false);
    }, 1000);
  };

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
          <div className="grid width-100 grid-col-30-repeat-auto align-items-center justify-start">
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  if (
                    !onDetailsPage &&
                    window.location.href.includes(window.location.origin)
                  ) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    document
                      .querySelector("main")
                      ?.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    navigate(pageUrl);
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
                  console.log();
                  if (
                    !onDetailsPage &&
                    window.location.href.includes(window.location.origin)
                  ) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    document
                      .querySelector("main")
                      ?.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    navigate(pageUrl);
                  }
                }}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-3"
                onClick={() => {
                  onDetailsPage
                    ? navigate(pageUrl, {
                        state: { scrollTo: WindowLocations.Service_Section },
                        replace: true,
                      })
                    : scrollIntoView(`#${WindowLocations.Service_Section}`);
                  // window.location.href = `${pageUrl}?scrollTo=services_section`;
                }}
              >
                Services
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-4"
                onClick={() => {
                  onDetailsPage
                    ? navigate(pageUrl, {
                        state: { scrollTo: WindowLocations.Portfolio_Section },
                        replace: true,
                      })
                    : scrollIntoView(`#${WindowLocations.Portfolio_Section}`);
                  // window.location.href = `${pageUrl}?scrollTo=portfolio_section`;
                }}
              >
                Portfolio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-5"
                onClick={() => {
                  onDetailsPage
                    ? navigate(pageUrl, {
                        state: { scrollTo: WindowLocations.Skills_Section },
                        replace: true,
                      })
                    : scrollIntoView(`#${WindowLocations.Skills_Section}`);
                  // window.location.href = `${pageUrl}?scrollTo=skills_section`;
                }}
              >
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-2"
                onClick={() => {
                  onDetailsPage
                    ? navigate(pageUrl, {
                        state: { scrollTo: WindowLocations.Profile_Section },
                        replace: true,
                      })
                    : scrollIntoView(`#${WindowLocations.Profile_Section}`);
                  //  window.location.href = `${pageUrl}?scrollTo=profile_section`;
                }}
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-6" href="/#contact">
                Contact Me
              </Nav.Link>
            </Nav.Item>
          </div>
        </Nav>
      )}
      {isTabletOrMobile && (
        <Nav
          className="grid grid-mobile-nav padding-sm width-100 align-items-center"
          activeKey="/home"
        >
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                console.log();

                !onDetailsPage &&
                window.location.href.includes(window.location.origin)
                  ? window.scrollTo({ top: 0, behavior: "smooth" })
                  : // window.location.href = pageUrl;
                    navigate(pageUrl);

                if (isNavMenuOpen) closeMobileNavMenu();
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
                      closeMobileNavMenu();
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
                          !onDetailsPage &&
                          window.location.href.includes(window.location.origin)
                            ? window.scrollTo({ top: 0, behavior: "smooth" })
                            : navigate(pageUrl);

                          closeMobileNavMenu();
                        }}
                      >
                        Home
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link
                        onClick={() => {
                          //window.location.href = `${pageUrl}?scrollTo=services_section`;
                          onDetailsPage
                            ? navigate(pageUrl, {
                                state: {
                                  scrollTo: WindowLocations.Service_Section,
                                },
                                replace: true,
                              })
                            : scrollIntoView(
                                `#${WindowLocations.Service_Section}`
                              );
                          closeMobileNavMenu();
                        }}
                      >
                        Services
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => {
                          //window.location.href = `${pageUrl}?scrollTo=portfolio_section`;
                          onDetailsPage
                            ? navigate(pageUrl, {
                                state: {
                                  scrollTo: WindowLocations.Portfolio_Section,
                                },
                                replace: true,
                              })
                            : scrollIntoView(
                                `#${WindowLocations.Portfolio_Section}`
                              );
                          closeMobileNavMenu();
                        }}
                      >
                        Portfolio
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => {
                          //window.location.href = `${pageUrl}?scrollTo=skills_section`;
                          onDetailsPage
                            ? navigate(pageUrl, {
                                state: {
                                  scrollTo: WindowLocations.Skills_Section,
                                },
                                replace: true,
                              })
                            : scrollIntoView(
                                `#${WindowLocations.Skills_Section}`
                              );
                          closeMobileNavMenu();
                        }}
                      >
                        Skills
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => {
                          //window.location.href = `${pageUrl}?scrollTo=profile_section`;
                          onDetailsPage
                            ? navigate(pageUrl, {
                                state: {
                                  scrollTo: WindowLocations.Profile_Section,
                                },
                                replace: true,
                              })
                            : scrollIntoView(
                                `#${WindowLocations.Profile_Section}`
                              );
                          closeMobileNavMenu();
                        }}
                      >
                        About
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="link-6"
                        href="/#contact"
                        onClick={() => {
                          closeMobileNavMenu();
                        }}
                      >
                        Contact Me
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
