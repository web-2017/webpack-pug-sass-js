/* src/app.js */
// exemple - require("scripts/demo");

// $(document).ready(() => {
//   console.log("Ready!");

//   require("scripts/demo");
// });

// Styles
import "styles/_index.scss";
import "./assets/data/dummy.data";

window.onload = function () {
  require("scripts/data");
  require("scripts/header");
  require("scripts/products");
};
