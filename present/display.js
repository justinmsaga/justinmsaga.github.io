import {
  addToTag,
  createBtn,
  createContainer,
  createElement,
  createLink,
  createMedia,
} from "../helper.js";

let currentContent = "";
let currentArea = "";

//------------------------------------------------------------------
//update display area with the selected artifact
function showPost(art) {}

//------------------------------------------------------------------
//return buttons to select artifact post
function createBlogSection(selected) {
  return [
    createElement("h2", currentContent.title, []),
    createElement("p", currentContent.content.description, []),
    createElement("p", "[coming soon]", []),
  ];
}

//------------------------------------------------------------------
//return function to update display area based on selected archive item
function updateDisplay(section) {
  //set the page display area
  currentArea = section;

  function display(content) {
    //clear the display area
    currentArea.innerHTML = "";

    //set the content to the selected archive item and artifact type
    currentContent = content;

    //initialize artifact selection buttons
    addToTag(currentArea, [
      createContainer("section", "", [], createBlogSection()),
    ]);
  }
  return display;
}

export { updateDisplay };
