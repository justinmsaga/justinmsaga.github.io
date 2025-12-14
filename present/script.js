import { blog } from "./blog.js";
import { addToTag, createBtn } from "../helper.js";

//page navigation section
const nav = document.querySelector(".pageNav");

//create buttons from blog sections
const btns = blog.sections.map((section) => {
  return createBtn(section, [], "", "");
});

//add buttons to navingation section
addToTag(nav, btns);
