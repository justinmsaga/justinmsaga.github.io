import { blog } from "./blog.js";
import { addToTag, createBtn } from "../helper.js";
import { updateDisplay } from "./display.js";

//page navigation section
const nav = document.querySelector(".pageNav");
const display = document.querySelector(".display");
const blogTypes = blog.types;

//initialize display section
const goDisplay = updateDisplay(display);

//create page navigation buttons
function navBtn(bTypes) {
  const btns = bTypes.map((b) => {
    return createBtn(b, [], updateNav, b);
  });
  return btns;
}

//update display section based on selected navigation
function updateNav(selected) {
  nav.classList.add("compact");
  goDisplay({ title: selected, content: blog[selected] });
  const filterBlogs = blogTypes.filter((b) => b != selected);
  addToTag(nav, navBtn(filterBlogs), true);
}

//add buttons to navigation section
addToTag(nav, navBtn(blogTypes));
