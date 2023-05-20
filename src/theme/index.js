const base = {
  radius: "30px"
};

const light = {
  ...base,
  bg: "#ffffff",
  primary: "#3070F7",
  primaryLight: "#4081F6",
  secondary: "#f67732",
  secondaryLight: "#f3b457",
  text: "#777777",
  textDark: "#ffffff",
  shadow: "#DEDDDD"
};

const dark = {
  ...base,
  primary: "#3070F7"
};

export { light, dark };
