import React, { useEffect, useRef } from "react";
import Keyboard from "simple-keyboard";
import { parseProps, changedProps } from "../services/Utilities";
import "simple-keyboard/build/css/index.css";

const KeyboardReact = props => {
  const cssClass = props.baseClass || "react-simple-keyboard";
  const initRef = useRef();
  const keyboardRef = useRef();
  const previousProps = useRef(props);

  useEffect(() => {
    const parsedProps = parseProps(props);

    /**
     * Initialize simple-keyboard
     */
    if (!initRef.current) {
      initRef.current = true;
      parsedProps.debug && console.log("ReactSimpleKeyboard: Init");
      keyboardRef.current = new Keyboard(`.${cssClass}`, parsedProps);
      parsedProps.keyboardRef && parsedProps.keyboardRef(keyboardRef.current);
    }

    const updatedProps = changedProps(previousProps.current, parsedProps);

    /**
     * Only trigger render if props changed
     */
    if (updatedProps.length) {
      let keyboard = keyboardRef.current;
      previousProps.current = parsedProps;
      keyboard.setOptions(parsedProps);
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
