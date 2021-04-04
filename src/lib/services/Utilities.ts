import { KeyboardReactInterface } from "../interfaces";

export const parseProps = (props: KeyboardReactInterface["options"]) => ({
  ...props,
  theme: `simple-keyboard ${props.theme || "hg-theme-default"}`,
});

const cleanProps = (sourceObj: KeyboardReactInterface["options"]) => ({
  ...sourceObj,
  keyboardRef: null,
});

export const changedProps = (
  prevProps: KeyboardReactInterface["options"],
  props: KeyboardReactInterface["options"]
) => {
  const cleanedProps = cleanProps(props);
  const cleanedPrevProps = cleanProps(prevProps);

  return Object.keys(cleanedProps).filter(
    (propName) => cleanedProps[propName] !== cleanedPrevProps[propName]
  );
};
