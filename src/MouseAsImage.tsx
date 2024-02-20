import React, { useEffect, useRef } from "react";

function MouseAsImage({
  cursorImageSrc,
  parentRef,
}: {
  cursorImageSrc: string;
  parentRef: React.RefObject<HTMLDivElement>;
}) {
  const cursorRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const cursorImage = document.createElement("img");
    cursorImage.src = cursorImageSrc;
    cursorImage.style.position = "absolute";
    cursorImage.style.pointerEvents = "none";
    cursorImage.style.scale = "0.5";
    cursorImage.style.zIndex = "9999"; // Ensure the custom cursor is above other elements
    cursorRef.current = cursorImage;
    parentRef.current?.appendChild(cursorImage);

    // Hide the default cursor
    document.body.style.cursor = "none";

    if (
      parseInt(cursorRef.current.style.top) >= parentRef.current!.offsetHeight
    ) {
      document.body.style.cursor = "auto";
    }

    return () => {
      if (cursorRef.current) {
        parentRef.current?.removeChild(cursorRef.current);
        // Restore the default cursor when the custom cursor is removed
        document.body.style.cursor = "auto";
      }
    };
  }, [cursorImageSrc, parentRef]);

  useEffect(() => {
    const updateCursorImagePosition = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = event.clientX - 30 + "px";
        cursorRef.current.style.top = event.clientY - 30 + "px";
      }
    };

    parentRef.current?.addEventListener("mousemove", updateCursorImagePosition);

    return () => {
      parentRef.current?.removeEventListener(
        "mousemove",
        updateCursorImagePosition
      );
    };
  }, [parentRef]);

  return null;
}

export default MouseAsImage;
