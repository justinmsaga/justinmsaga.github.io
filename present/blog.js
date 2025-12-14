const blog = {
  sections: ["playlists", "recordings", "ideas"],
  playlists: {
    description: "an introverts version of a dj set",
    artifacts: [
      {
        title: "low end theory",
        description: "a study of the bottom end of the frequency spectrum ",
        currently: {
          title: "low 9",
          description: "a study of 3 step afro house",
        },
        source: {
          tidal: "",
          spotify: "",
        },
        tracklist: [
          {
            title: "",
            artist: "",
          },
        ],
      },
      {
        title: "limbo",
        description: "somewhere in between",
        currently: {
          title: "",
          description: "",
        },
        source: { tidal: "", spotify: "" },
        tracklist: [{ title: "", artist: "" }],
      },
      {
        title: "ego death",
        description: "humbling of self",
        currently: {
          title: "",
          description: "",
        },
        source: { tidal: "", spotify: "" },
        tracklist: [{ title: "", artist: "" }],
      },
    ],
  },
  recordings: {
    description: "curating then creating soundscapes",
    artifacts: [
      {
        type: "field",
        description: "curating soundscapes with birds",
        files: [{ title: "", description: "", source: "" }],
      },
      {
        type: "wind",
        description: "creating noise with woodwinds",
        files: [{ title: "", description: "", source: "" }],
      },
    ],
  },
  ideas: {
    description: "reporting live from the idea factory",
    artifacts: [
      {
        title: "minesweeper",
        description:
          "a study of mobile game development. I have not found a simple ad free minesweeper app so I decided to build one instead",
        craft: "interface design",
        tools: "react native",
      },
      {
        title: "zine viewer",
        description:
          "a study of editorial digital media through full stack web development. a platform to create hypermedia zines to archive our digital lives in a digital native manner.",
        craft: "software development",
        tools: "htmx, rust",
      },
      {
        title: "ms@ga",
        description:
          "a study of machine learning and digital creative expression",
        craft: "collaborative learning",
        tools: "python",
      },
      {
        title: "obh",
        description:
          "a study of textile design. the oversized black hoodie, the post modern little black dress",
        craft: "streetwear",
        tools: "textile",
      },
    ],
  },
};

export { blog };
