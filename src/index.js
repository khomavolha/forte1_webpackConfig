import "./style.css";
import svg from "./assets/nature.svg";
import png from "./assets/lion.png";

const root = document.querySelector("#root");
root.insertAdjacentHTML(
  "afterend",
  `<img src="${svg}" class='svg' alt="альтернативный текст"></img>`
);
const svgClass = document.querySelector(".svg");
svgClass.insertAdjacentHTML(
  "afterend",
  `<img src="${png}" class='svg' alt="альтернативный текст"></img>`
);
