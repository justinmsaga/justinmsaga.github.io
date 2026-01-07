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
function showArtifact(art) {
  //update artifact selection buttons. highlighting the selected artifact
  const selectors = createSelectors(art.title);

  //description of the selected artifact
  const description = createElement("p", art.description, []);

  //selected artifact
  const artifact = createMedia(
    currentContent.type,
    "",
    ["art"],
    `https://arweave.net/${art.source}`
  );

  //reset artifact selection, description and selected arifact to the display section
  addToTag(
    currentArea,

    //different layout for audio artifacts
    currentContent.type === "audio"
      ? [
          description,
          artifact,
          createContainer("section", "", ["selectors"], selectors),
        ]
      : [
          createContainer("section", "", ["selectors"], selectors),
          description,
          artifact,
        ],
    true
  );
}

//------------------------------------------------------------------
//return buttons to select artifact item
function createSelectors(selected) {
  //create artifact buttons from the selected archive content
  const selectors =
    currentContent.type != "dev"
      ? currentContent.artifacts.map((art) => {
          return createBtn(
            art.title,
            //if the artifact is the current one being shown highlight
            [selected === art.title ? "selected" : null],
            showArtifact,
            art
          );
        })
      : [
          createContainer(
            "section",
            "",
            ["dev"],
            [
              createElement("p", currentContent.artifacts.description, []),
              createLink(
                "user interface design (figma)",
                currentContent.artifacts.links.figma,
                [],
                true
              ),
              createLink(
                "source code (github)",
                currentContent.artifacts.links.github,
                [],
                true
              ),
            ]
          ),
        ];

  return selectors;
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
      createContainer("section", "", ["selectors"], createSelectors()),
    ]);
  }
  return display;
}

export { updateDisplay };
