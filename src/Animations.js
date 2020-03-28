import gsap from "gsap";

const easeIO = "power4.inOut";

export const fadeRight = el => {
  gsap.fromTo(
    el,
    { width: 0, height: "450px", autoAlpha: 0 },
    {
      width: "330px",
      height: "450px",
      autoAlpha: 1,
      ease: easeIO,
      duration: 0.7
    }
  );
};

export const fadeLeft = el => {
  gsap.fromTo(
    el,
    { width: "330px", autoAlpha: 1 },
    { width: "0px", height: "450px", autoAlpha: 0, ease: easeIO, duration: 0.7 }
  );
  gsap.to(el, { height: 0, delay: 0.7, duration: 0 });
};

export const goDown = el => {
  gsap.fromTo(
    el,
    { height: 0, width: "330px", autoAlpha: 0 },
    {
      height: "450px",
      width: "330px",
      autoAlpha: 1,
      ease: easeIO,
      duration: 0.7
    }
  );
};

export const goUp = el => {
  gsap.fromTo(
    el,
    { height: "450px", width: "330px", autoAlpha: 1 },
    { height: 0, width: "330px", autoAlpha: 0, ease: easeIO, duration: 0.7 }
  );
  gsap.to(el, {
    width: 0,
    delay: 0.7,
    duration: 0
  });
};
