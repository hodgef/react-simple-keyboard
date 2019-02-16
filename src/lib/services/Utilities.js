export const parseProps = props => ({
  ...props,
  theme: `simple-keyboard ${props.theme || "hg-theme-default"}`
});
