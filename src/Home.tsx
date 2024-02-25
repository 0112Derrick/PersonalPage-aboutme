import React from "react";

import { Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Sparkle from "./Sparkle";


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
          <div className="parallax"></div>
          <main ref={containerRef}>
            <Sparkle
              parentRef={containerRef}
              maxSparkles={30}
              eraseTime={3000}
            ></Sparkle>

            {/* <div className="vingette"></div> */}
            <header>
              <img
                src={process.env.PUBLIC_URL + "/images/galaxySky02.png"}
                alt="Background parallax"
                className="background bg-img"
              />

              <div className="flex align-items-center justify-center flex-d-col">
                <img
                  src={process.env.PUBLIC_URL + "/images/moon.png"}
                  alt="Moon"
                  className="parallax moon-img"
                />

                <h1 className="parallax-text">
                  Derrick Williams <br></br>
                  Software Development
                  <br></br>
                  <a className="parallax-call-to-action" href="/#contact">
                    Contact Me
                  </a>
                </h1>
              </div>

              <img
                src={process.env.PUBLIC_URL + "/images/mountain.png"}
                alt="Background parallax"
                className="background bg-img01"
              />

              <img
                src={process.env.PUBLIC_URL + "/images/ParallaxBG.png"}
                alt="Background parallax"
                className="background bg-img01"
              />

              <img
                src={process.env.PUBLIC_URL + "/images/parallaxFront02.png"}
                alt="Background parallax"
                className="foreground front-img"
              />
              <img
                src={process.env.PUBLIC_URL + "/images/foreground_dirt.png"}
                alt="Background parallax"
                className="foreground front-img2"
              />
            </header>
          </main>
        </>
      )}
      {isTabletOrMobile && (
        <Image
          src={`${process.env.PUBLIC_URL}/images/fulldesign.png`}
          fluid
        ></Image>
      )}
    </>
  );
}
