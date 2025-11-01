import { useEffect } from "react";
import { useState } from "react";

const MouseTracker = () => {
  const [mousse, setMousse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    window.addEventListener("mousemove", (e) =>
      setMousse({ x: e.clientX, y: e.clientY })
    );
    return () =>{
        window.removeEventListener("mousemove", (e) =>
            setMousse({ x: e.clientX, y: e.clientY }))
      }
  }, [mousse]);
 

  return (
    <div>
      <h2>Mousse X: {mousse.x}</h2>
      <h2>Mousse Y: {mousse.y} </h2>
    </div>
  );
};

export default MouseTracker;
