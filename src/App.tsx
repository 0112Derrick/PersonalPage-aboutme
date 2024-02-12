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
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.substring(1); // Remove '#' from hash
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
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
                  <Col>
                    <Services></Services>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Portfolio></Portfolio>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Skills></Skills>
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
              <NavMenu></NavMenu>
              <CardDetail></CardDetail>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
