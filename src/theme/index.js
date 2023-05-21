const sizes = {
  sm: "14px",
  normal: "16px",
  md: "18px",
  lg: "22px",
  xl: "24px",
  "2xl": "30px"
};

const base = {
  radius: "30px",
  sizes: sizes,
  font: "Roboto, sans-serif"
};

const light = {
  ...base,
  bg: "#ffffff",
  primary: "#00796B",
  primaryLight: "#4081F6",
  secondary: "#f67732",
  secondaryLight: "#f3b457",
  text: "#777777",
  textDark: "#ffffff",
  shadow: "#DEDDDD",
  border: "#eee"
};

const dark = {
  ...base,
  primary: "#3070F7"
};

export { sizes, light, dark };
