declare module 'react-simple-keyboard' {
  class KeyboardReact {
    /**
     * Keyboard instance
     */
    keyboard?: any;

    /**
     * React
     */
    render(): React.ReactType;
    props: any;
    context: any;
    setState: any;
    forceUpdate: any;
    state: any;
    refs: any;
  }

  export default KeyboardReact;
}
