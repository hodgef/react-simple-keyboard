import React, { useEffect, useRef } from "react";
import Keyboard from "simple-keyboard";
import { parseProps, propsChanged } from "../services/Utilities";
import "simple-keyboard/build/css/index.css";

function KeyboardReact(props) {
  const cssClass = props.baseClass || "react-simple-keyboard";
  const initRef = useRef();
  const keyboardRef = useRef();
  const previousProps = useRef(props);

  useEffect(() => {
    if (!initRef.current) {
      initRef.current = true;
      props.debug && console.log("ReactSimpleKeyboard: Init");

      keyboardRef.current = new Keyboard(`.${cssClass}`, parseProps(props));
      props.keyboardRef && props.keyboardRef(keyboardRef.current);
    }

    /**
     * Only trigger re-render if props changed
     */
    if (propsChanged(previousProps.current, props)) {
      let keyboard = keyboardRef.current;
      previousProps.current = props;

      keyboard.setOptions(parseProps(props));
      props.debug && console.log("ReactSimpleKeyboard: Rendered");
    }
  }, [initRef, cssClass, previousProps, props]);

  return <div className={cssClass} />;
}

export default KeyboardReact;
