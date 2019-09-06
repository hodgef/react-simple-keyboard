export const parseProps = props => ({
  ...props,
  theme: `simple-keyboard ${props.theme || "hg-theme-default"}`
});

export const propsChanged = (prevProps, props) => {
  const cleanProps = sourceObj =>
    JSON.stringify({
      ...sourceObj,
      stateToIgnore: null
    });

  return cleanProps(props) !== cleanProps(prevProps);
};
