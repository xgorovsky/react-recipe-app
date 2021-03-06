import React from "react";
import { useRef, useEffect } from "react";
import { TimelineLite } from "gsap";

const loaderStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "24px"
};

const circleStyle = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  margin: "8px",
  backgroundColor: "black"
};

const easeIO = "power4.inOut";

const Loading = (el, el1, el2, el3) => {
  const tl = new TimelineLite({ repeat: -1 });
  tl.to([el, el1, el2, el3], {
    duration: 0.6,
    y: 64,
    scale: 0.6,
    ease: easeIO,
    stagger: {
      amount: 0.3
    }
  }).to([el, el1, el2, el3], {
    duration: 0.6,
    y: 0,
    scale: 1,
    ease: easeIO,
    stagger: {
      amount: 0.3
    }
  });
};

// ! will do some coolio animation here yaboy

export default function Loader() {
  let circle = useRef(null);
  let circle2 = useRef(null);
  let circle3 = useRef(null);
  let circle4 = useRef(null);
  useEffect(() => {
    Loading(circle, circle2, circle3, circle4);
  });

  return (
    <div style={loaderStyle}>
      <div ref={ref => (circle = ref)} style={circleStyle}></div>
      <div ref={ref => (circle2 = ref)} style={circleStyle}></div>
      <div ref={ref => (circle3 = ref)} style={circleStyle}></div>
      <div ref={ref => (circle4 = ref)} style={circleStyle}></div>
    </div>
  );
}
