import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavMenu from "./NavMenu";
import { Profile } from "./Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Home } from "./Home";
import { Services } from "./Services";
import { Portfolio } from "./Portfolio";

import { CardDetail } from "./CardDetail";

import { Skills } from "./Skills";
function App() {
  return (
    <Router>
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
