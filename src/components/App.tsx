import React, { useEffect } from "react";

import ".././App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavMenu from "./NavMenu";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { CardDetail } from "./CardDetail";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

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
            </>
          }
        />
        <Route
          path="/cards/:id"
          element={
            <>
              <NavMenu onDetailsPage={true}></NavMenu>
              <CardDetail></CardDetail>
              <Footer></Footer>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <NavMenu onDetailsPage={true}></NavMenu>
              <ContactForm></ContactForm>
              <Footer></Footer>
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
