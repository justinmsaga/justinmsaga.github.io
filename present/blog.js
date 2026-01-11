const blog = {
  types: ["sketchpad", "playlist", "animation"],

  animation: {
    description: "a study of long form interactive graphics with svg ",
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
    description: "an introverts version of a dj set a.k.a. radio",
    zine: [
      {
        title: "low end theory",
        description: "a study of the bottom end of the frequency spectrum ",
        currently: {
          title: "9",
          description: "a study of 3 step afro house",
          source: {
            tidal:
              "https://tidal.com/playlist/da07488e-d6ed-4c90-b172-23de1ead994c",
            spotify:
              "https://open.spotify.com/playlist/1l6qQTsWOpOOMEr1XyVkxS?si=C4AYHwryQziwKvRnIV0j8A",
          },
        },
      },
      {
        title: "limbo",
        description: "a suburban pirate radio station",
        currently: {
          title: "v0",
          description: "somewhere in between",
          source: {
            tidal:
              "https://tidal.com/playlist/66b91a8c-5d3d-4829-81c2-9512df804683",
            spotify:
              "https://open.spotify.com/playlist/31w5YaSFu4A9vORfUy1CFN?si=o55B1DdIQWu95cjkhvJNaC",
          },
        },
      },
      {
        title: "ego death",
        description: "humbling of self",
        currently: {
          title: "14",
          description: "the opps be opping",
          source: {
            tidal:
              "https://tidal.com/playlist/930dc56a-e040-4624-9d71-cdfc853fed00",
            spotify:
              "https://open.spotify.com/playlist/4ANDXuKKj1uYEwtH2RlkU6?si=5Pd0bMudSBKVLoXSooyS6w",
          },
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
          "A study of mobile game development. I have not found a simple ad free minesweeper app so building one instead.",
        craft: "interface design",
        tools: ["react native"],
      },
      {
        title: "zine shelf",
        description:
          "A study of editorial digital media. A platform to create hypermedia zines.",
        craft: "media production",
        tools: ["htmx", "rust"],
      },
      {
        title: "bushsk8r",
        description:
          "A study of machine learning and digital creative expression. putting everything I have ever created into one model to in an attempt to have a digital creative partner",
        craft: "software development",
        tools: ["python"],
      },
      {
        title: "obh",
        description:
          "A study of textile design. Centering a creative practice around an oversized black hoodie, the post modern little black dress",
        craft: "creative direction",
        tools: ["textile"],
      },
    ],
  },
};

export { blog };
