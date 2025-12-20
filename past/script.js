import { crate } from "./archive.js";
import {
  addToTag,
  createButtonContainer,
  createContainer,
  createElement,
} from "../helper.js";
import { updateDisplay } from "./display.js";

//page navigation section
const nav = document.querySelector(".pageNav");
const display = document.querySelector(".display");

const goDisplay = updateDisplay(display);

//initialize buttons from crate
const btns = crate.map((c) => {
  return artifactSelectBtn(c);
});

//add initial buttons to navigation section
addToTag(nav, btns);

//create button from artifact
function artifactSelectBtn(art) {
  //button contents
  const btnText = [
    createElement("h2", art.title, []),
    createElement("p", art.craft, []),
  ];

  //button with contents
  return createButtonContainer([], btnText, updateNav, art.title);
}

//setup selected artifact section
function selectedDisplay(art) {
  goDisplay({ artifacts: art.artifacts, type: art.type });
  const innerText = [
    createElement("h2", art.title, []),
    createElement("p", art.year, []),
    createElement("p", art.description, []),
    createElement("p", art.craft, ["selectedCraft"]),
  ];

  return createContainer("section", "", ["selectedSection"], innerText);
}

//update navigation section after artifact is selected
function updateNav(selected) {
  //TODO: media query for larger screens
  //nav.classList.add("navActive");

  //display unselected artifact buttons
  const newBtns = crate.filter((c) => c.title != selected);
  const btnSection = newBtns.map((c) => {
    return artifactSelectBtn(c);
  });

  //display selected artifact
  const selectedArtifact = crate.find((c) => c.title === selected);
  const selectedSection = selectedDisplay(selectedArtifact);
  addToTag(
    nav,
    [
      createContainer("section", "", ["btnSection"], btnSection),
      selectedSection,
    ],
    true
  );
}
