/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "About",
          ["Getting Started"],
          "Layout",
          "Text",
          "Form",
          "Popup",
          "Image",
          "Info",
          "Navigation",
          "Data",
          "Util",
          "Shared Components",
          "Labs",
        ],
      },
    },
  },
};

export default preview;
