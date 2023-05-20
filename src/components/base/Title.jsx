const getTitle = (size, content) => {
  if (size === "h1") return <h1>{content}</h1>;
  if (size === "h2") return <h2>{content}</h2>;
  if (size === "h3") return <h3>{content}</h3>;
  if (size === "h4") return <h4>{content}</h4>;
  if (size === "h5") return <h5>{content}</h5>;
  else return <h6>{content}</h6>;
};

/**
 * Title
 * @param children
 * @param size: h1 | h2 | h3 | h4 | h5 | h6
 */
function Title({ children, size = "h1" }) {
  return getTitle(size, children);
}

export default Title;
