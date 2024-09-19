import { gsap } from "gsap";

const intro = gsap.timeline();
intro.from(".logo", {
  opacity: 0,
  delay: 1,
  duration: 1,
});
intro.from(".subtitle", {
  opacity: 0,
  delay: 0.6,
  duration: 1,
});
intro.to(".start", {
  opacity: 0,
  display: "none",
  delay: 2,
  duration: 1,
});
intro.to(".duration", {
  display: "flex",
});
intro.from(".duration", {
  opacity: 0,
  duration: 0.6,
});

const button = document.querySelector(".start-btn");
button.addEventListener("click", function () {
  const circle = gsap.timeline();
  circle.to(".duration", {
    opacity: 0,
    display: "none",
    duration: 0.6,
  });
  circle.to(".exercice", {
    display: "flex",
    duration: 0.6,
  });
  circle.from(".exercice", {
    opacity: 0,
    delay: 0.6,
    duration: 0.6,
  });
  circle.to(".circle", {
    scale: 1.6,
    duration: 6,
    yoyo: true,
    repeat: 15,
  });
  circle.to(".exercice", {
    opacity: 0,
    display: "none",
    duration: 0.6,
  });
  circle.to(".end", {
    display: "flex",
    duration: 0.5,
  });
  circle.from(".end", {
    opacity: 0,
    delay: 0.5,
    duration: 1,
  });
});
