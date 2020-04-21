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
    /**
     * Initialize simple-keyboard
     */
    if (!initRef.current) {
      initRef.current = true;
      props.debug && console.log("ReactSimpleKeyboard: Init");
      keyboardRef.current = new Keyboard(`.${cssClass}`, parseProps(props));
      props.keyboardRef && props.keyboardRef(keyboardRef.current);
    }

    const updatedProps = changedProps(previousProps.current, props);

    /**
     * Only trigger render if props changed
     */
    if (updatedProps.length) {
      let keyboard = keyboardRef.current;
      previousProps.current = props;
      keyboard.setOptions(parseProps(props));
      props.debug &&
        console.log(
          "ReactSimpleKeyboard - Re-render due to updated props:",
          updatedProps
        );
    }
  }, [initRef, cssClass, previousProps, props]);

  return <div className={cssClass} />;
};

export default KeyboardReact;
