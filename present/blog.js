const blog = {
  types: ["animation", "playlist", "sketchpad"],

  animation: {
    description: "study of long form graphics with svg ",
    zine: [
      {
        title: "",
        desctiption: "",
        artifacts: {
          highlight: {
            type: "svg",
            dimentions: "",
            source: "",
          },
          recent: {
            type: "svg",
            dimentions: "",
            source: "",
          },
        },
      },
    ],
  },

  playlist: {
    description: "an introverts version of a dj set",
    zine: [
      {
        title: "low end theory",
        description: "a study of the bottom end of the frequency spectrum ",
        currently: {
          title: "low 9",
          description: "a study of 3 step afro house",
          source: {
            tidal: "",
            spotify: "",
          },
        },
        highlight: {
          title: "low 9",
          description: "a study of 3 step afro house",
          source: {
            tidal: "",
            spotify: "",
          },
        },
      },
      {
        title: "limbo",
        description: "somewhere in between",
        currently: {
          title: "",
          description: "",
          source: { tidal: "", spotify: "" },
        },
        highlight: {
          title: "",
          description: "",
          source: { tidal: "", spotify: "" },
        },
      },
      {
        title: "ego death",
        description: "humbling of self",
        currently: {
          title: "",
          description: "",
          source: { tidal: "", spotify: "" },
        },
        highlight: {
          title: "",
          description: "",
          source: { tidal: "", spotify: "" },
        },
      },
    ],
  },

  sketchpad: {
    description: "reporting live from the idea factory",
    zine: [
      {
        title: "minesweeper",
        description:
          "a study of mobile game development. I have not found a simple ad free minesweeper app so I decided to build one instead",
        craft: "interface design",
        tools: ["react native"],
      },
      {
        title: "zine viewer",
        description:
          "a study of editorial digital media through full stack web development. a platform to create hypermedia zines to archive our digital lives in a digital native manner.",
        craft: "software development",
        tools: ["htmx", "rust"],
      },
      {
        title: "ms@ga",
        description:
          "a study of machine learning and digital creative expression",
        craft: "collaborative learning",
        tools: ["python"],
      },
      {
        title: "obh",
        description:
          "a study of textile design. the oversized black hoodie, the post modern little black dress",
        craft: "streetwear",
        tools: ["textile"],
      },
    ],
  },
};

export { blog };
