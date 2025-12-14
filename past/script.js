import { crate } from "./archive.js";
import { addToTag, createButtonContainer, createElement } from "../helper.js";

//page navigation section
const nav = document.querySelector(".pageNav");

//create buttons from crate
const btns = crate.map((c) => {
  //button contents
  const btnText = [
    createElement("h2", c.title, []),
    createElement("p", c.craft, []),
  ];

  //button with contents
  return createButtonContainer([], btnText, "", "");
});

//add buttons to navingation section
addToTag(nav, btns, false);
