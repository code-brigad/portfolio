import React, { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef();

  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
    }
    document.getElementById("cursor").addEventListener("mousemove", mouseMove)

    return () => {
        document.getElementById("cursor").removeEventListener("mousemove", mouseMove)
    };

  }, [])

  const style = {
    top: mousePosition.y,
    left: mousePosition.x
  }

  return (
    <div id="cursor">
      <div ref={ref} style={style} className="relative pointer-events-none z-[1000]">Cursor</div>
    </div>
  );
};

export default Cursor;
