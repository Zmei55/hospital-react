export const theme = Object.freeze({
  colors: {
    white: "#FFFFFF",
    text: {
      default: "#1C1B3B",
      body: "#524E6B",
      label: "#6B6F91",
      placeholder: "#9DA0BD",
      white: "#FFFFFF",
    },
    blue: {
      pressed: "#0E4CC9",
      hover: "#0F55E3",
      default: "#115FFD",
      disabled: "rgba(17, 95, 253, 0.5)",
    },
    grey: {
      pressed: "#AEB1C2",
      hover: "#C5C9DB",
      default: "#DCE0F5",
      disabled: "rgba(220, 224, 245, 0.5)",
    },
    green: {
      pressed: "#126641",
      hover: "#168051",
      default: "#1B9962",
      disabled: "rgba(27, 153, 98, 0.5)",
    },
    red: {
      pressed: "#BA2625",
      hover: "#D42C2A",
      default: "#EC312F",
      disabled: "rgba(236, 49, 47, 0.5)",
    },
  },
  border: "2px solid #E6E6E6",
  borderRadius: "16px",
  boxShadow: "0px 8px 16px rgba(17, 17, 17, 0.06)",
  spacing: (value: number) => `${4 * value}px`,
});
