import React, { useEffect, useState } from "react";

type SparkleProps = {
  parentRef: React.RefObject<HTMLDivElement>;
  maxSparkles: number;
  eraseTime?: number;
};

const Sparkle = ({
  parentRef,
  maxSparkles,
  eraseTime = 1000,
}: SparkleProps) => {
  const [sparkles, setSparkles] = useState<HTMLDivElement[]>([]);

  useEffect(() => {
    const ref = parentRef.current;
    const createDiv = (shape: string, size: number) => {
      let colour = [
        "#84eef5",
        "#9cf1f7",
        "#f79cf1",
        "#f9b3f5",
        "#fbcbf8",
        "#b3f5f9",
        "#cbf8fb",
        "#f9fcda",
        "#fbfde6",
        "#fdfef2",
      ];
      var div = document.createElement("div");
      div.style.position = "absolute";
      div.style.width = size + "px";
      div.style.height = size + "px";
      div.style.overflow = "hidden";
      div.innerHTML = shape;
      div.style.color = colour[Math.floor(colour.length * Math.random())];
      return div;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (parentRef.current) {
        const x =
          event.clientX - parentRef.current.getBoundingClientRect().left;
        const y = event.clientY + parentRef.current.scrollTop + 25;
        sparkle(x, y, Math.random() * 2 + 2);
      }
    };

    const sparkle = (x: number, y: number, speed: number) => {
      if (!parentRef.current) {
        return;
      }

      if (sparkles.length >= maxSparkles) {
        const sparkleToRemove = sparkles.shift();
        if (sparkleToRemove && parentRef.current.contains(sparkleToRemove)) {
          parentRef.current.removeChild(sparkleToRemove);
          setSparkles([...sparkles]);
        }
      }

      const newSparkle = createDiv(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>`,
        20
      );
      let currentScale = 0.9;
      newSparkle.style.transform = `scale(${currentScale})`;
      newSparkle.style.left = x + "px";
      newSparkle.style.top = y - 20 + "px";
      parentRef.current.appendChild(newSparkle);

      setTimeout(() => {
        if (!parentRef.current) {
          return;
        }
        if (parentRef.current.contains(newSparkle)) {
          parentRef.current.removeChild(newSparkle);
          setSparkles(sparkles.filter((sparkle) => sparkle !== newSparkle));
        }
      }, eraseTime);

      const fall = setInterval(() => {
        if (!parentRef.current) {
          return;
        }

        if (
          parentRef.current.contains(newSparkle) &&
          parseInt(newSparkle.style.top) >= parentRef.current.scrollHeight
        ) {
          clearInterval(fall);
          if (parentRef.current.contains(newSparkle)) {
            parentRef.current.removeChild(newSparkle);
            setSparkles(sparkles.filter((sparkle) => sparkle !== newSparkle));
          }
        } else {
          newSparkle.style.transform = `scale(${currentScale - 0.3})`;
          newSparkle.style.top = parseInt(newSparkle.style.top) + speed + "px";
        }
      }, 50);

      setSparkles([...sparkles, newSparkle]);
    };

    if (parentRef.current) {
      parentRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (ref) {
        ref.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [parentRef, maxSparkles, eraseTime, sparkles]);

  return null; // Sparkle elements are created and managed by the useEffect hook
};

export default Sparkle;
