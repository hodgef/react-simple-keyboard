export const parseProps = props => ({
  ...props,
  theme: `simple-keyboard ${props.theme || "hg-theme-default"}`
});

const cleanProps = sourceObj => ({
  ...sourceObj,
  keyboardRef: null,
  stateToIgnore: null
});

export const changedProps = (prevProps, props) => {
  const cleanedProps = cleanProps(props);
  const cleanedPrevProps = cleanProps(prevProps);

  return Object.keys(cleanedProps).filter(
    propName => cleanedProps[propName] !== cleanedPrevProps[propName]
  );
};
