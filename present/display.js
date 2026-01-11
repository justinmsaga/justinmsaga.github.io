import {
  addToTag,
  createContainer,
  createElement,
  createElemWithInner,
  createLink,
} from "../helper.js";

let currentContent = "";
let currentArea = "";

//------------------------------------------------------------------

function playlistDetails(play) {
  const playlistSection = createContainer(
    "section",
    "",
    ["playlist"],
    [
      createElemWithInner("p", `${play.title}: ${play.description}`, []),
      createContainer(
        "section",
        "",
        ["playLinks"],
        [
          createLink("spotify", play.source.spotify, [], true),
          createLink("tidal", play.source.tidal, [], true),
        ]
      ),
    ]
  );

  return playlistSection;
}

//update display area with the selected artifact
function showPost() {
  const zineSections = currentContent.content.zine.map((z) => {
    return createContainer(
      "details",
      "",
      ["zineSection"],
      currentContent.title === "sketchpad"
        ? [
            createElemWithInner(
              "summary",
              `<span class="sectionTitle">${z.title}</span> - ${z.craft}`,
              []
            ),
            createElement("p", z.description, []),
          ]
        : currentContent.title === "playlist"
        ? [
            createElemWithInner(
              "summary",
              `<span class="sectionTitle">${z.title}</span> - ${z.description}`,
              []
            ),
            playlistDetails(z.currently),
          ]
        : [createElement("p", "soon come", [])]
    );
  });
  return zineSections;
}

//------------------------------------------------------------------
//return buttons to select artifact post
function createBlogSection(selected) {
  return [
    createElement("h2", currentContent.title, []),
    createElement("p", currentContent.content.description, []),
    createContainer("section", "", ["zine"], showPost()),
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
      createContainer("article", "", ["selectedZine"], createBlogSection()),
    ]);
  }
  return display;
}

export { updateDisplay };
