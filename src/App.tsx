import React, { useEffect } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavMenu from "./NavMenu";
import { Profile } from "./Profile";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Home } from "./Home";
import { Services } from "./Services";
import { Portfolio } from "./Portfolio";

import { CardDetail } from "./CardDetail";

import { Skills } from "./Skills";
import Footer from "./Footer";

export function ScrollIntoView() {
  const location = window.location.search;

  console.log("Search: " + window.location.search);

  useEffect(() => {
    const params = new URLSearchParams(location);
    console.log(params.toString());
    console.log(params.has("scrollTo"));

    const sectionToScroll = params.get("scrollTo");
    if (sectionToScroll) {
      console.log(sectionToScroll);
      const targetElement = document.querySelector("#" + sectionToScroll);
      if (targetElement) {
        targetElement?.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error("Element does not exist.");
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollIntoView></ScrollIntoView>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavMenu></NavMenu>

              <Home></Home>

              <Container fluid>
                <Row>
                  <Col id="profile_section">
                    <Profile></Profile>
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
                  <Col id="footer_section" className="width-100 padding-0">
                    <Footer></Footer>
                  </Col>
                </Row>
              </Container>
            </>
          }
        />
        <Route
          path="/card/:id"
          element={
            <>
              <NavMenu onDetailsPage={true}></NavMenu>
              <CardDetail></CardDetail>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
