import "./my-styles.css";
import logoImg from "./content/logo_lemoncode.png";

const img = document.createElement("img");
img.src = logoImg;

const imgContainer = document.getElementById("imgContainer");
if (imgContainer) {
  imgContainer.appendChild(img);
}