import "./styles.css";
import ScrollMagic from "scrollmagic";
import { TweenMax } from "gsap";

const controller = new ScrollMagic.Controller();
const item = document.querySelector("#block2-item");

new ScrollMagic.Scene({
  triggerElement: "#block2",
  duration: 2500,
  triggerHook: "onLeave"
})
  .on("progress", function (event) {
    // console.log(event.progress);
    console.log(item.style.bottom);
    item.style.opacity = event.progress * 1;
  })
  .setPin("#block2")
  .addTo(controller);

// new ScrollMagic.Scene({
//   triggerElement: "#block2",
//   duration: 1250,
//   triggerHook: "onCenter"
// }).on("progress", function (event) {
//   console.log("Scene progress changed to " + event.progress);
// });
