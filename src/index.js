import "./styles.css";
import ScrollMagic from "scrollmagic";
import { TweenMax } from "gsap";

const controller = new ScrollMagic.Controller();
const item = document.getElementById("block2-item");
const scene = new ScrollMagic.Scene({
  triggerElement: "#block2",
  duration: 2500,
  triggerHook: "onLeave"
})
  .setPin("#block2")
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "#block2",
  duration: 1250,
  triggerHook: "onCenter"
}).on("progress", function (prog) {
  let p = prog.progress;
  item
    .css({
      bottom: 600 - (600 - p)
    })
    .addTo(controller);
});
