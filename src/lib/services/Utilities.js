export const getRandomBaseClass = () => `simplekeyboard_id-${Math.random().toString(36).substring(7)}`;

export const parseProps = props => ({
  ...props,
  theme: `simple-keyboard ${(props.theme || "hg-theme-default")}`
})