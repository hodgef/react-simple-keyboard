/* eslint-disable no-unused-vars */
import * as React from "react";
import { parseProps, changedProps } from "../services/Utilities";
import "simple-keyboard/build/css/index.css";
import { KeyboardReactInterface } from "../interfaces";

const Keyboard = require("simple-keyboard/build/index.modern").default as {
  new (
    selector: string,
    options: KeyboardReactInterface["options"]
  ): KeyboardReactInterface["options"];
};

const KeyboardReact = (props: KeyboardReactInterface["options"]) => {
  const cssClass = props.baseClass || "react-simple-keyboard";
  const initRef = React.useRef(null) as React.MutableRefObject<null | boolean>;
  const keyboardRef = React.useRef(null) as React.MutableRefObject<
    null | KeyboardReactInterface["options"]
  >;
  const previousProps = React.useRef(props);

  React.useEffect(() => {
    const parsedProps = parseProps(props);

    /**
     * Initialize simple-keyboard
     */
    if (!initRef.current) {
      initRef.current = true;
      parsedProps.debug && console.log("ReactSimpleKeyboard: Init");
      keyboardRef.current = new Keyboard(
        `.${cssClass}`,
        parsedProps
      ) as KeyboardReactInterface["options"];
      parsedProps.keyboardRef && parsedProps.keyboardRef(keyboardRef.current);
    }

    const updatedProps = changedProps(previousProps.current, parsedProps);

    /**
     * Only trigger render if props changed
     */
    if (updatedProps.length) {
      const keyboard = keyboardRef.current;
      previousProps.current = parsedProps;
      keyboard?.setOptions(parsedProps);
      parsedProps.debug &&
        console.log(
          "ReactSimpleKeyboard - setOptions called due to updated props:",
          updatedProps
        );
    }
  }, [initRef, cssClass, previousProps, props]);

  return <div className={cssClass} />;
};

export default KeyboardReact;
