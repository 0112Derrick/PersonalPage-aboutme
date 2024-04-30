import React, { useEffect } from "react";

import ".././App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavMenu from "./NavMenu";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Home } from "./Home";
import { CardDetail } from "./CardDetail";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

export function ScrollIntoView() {
  const location = useLocation();
  const params = location.state;
  console.log(params);

  useEffect(() => {
    if (params) {
      const sectionToScroll = params.scrollTo || "";
      console.log(`Scroll to: ${sectionToScroll || "Undefined"}`);

      if (sectionToScroll) {
        const targetElement = document.querySelector("#" + sectionToScroll);
        if (targetElement) {
          targetElement?.scrollIntoView({ behavior: "smooth" });
        } else {
          console.error("Element does not exist.");
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    // eslint-disable-next-line
  }, [location.state]);
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
