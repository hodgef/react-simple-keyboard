import React, { Component } from "react";
import PropTypes from "prop-types";
import Keyboard from "simple-keyboard";
import { parseProps } from "../services/Utilities";
import "simple-keyboard/build/css/index.css";

class KeyboardReact extends Component {
  state = { input: "" };

  baseClassDefault = "react-simple-keyboard";

  componentDidMount = () => this.initKeyboard();

  componentWillReceiveProps = nextProps =>
    this.keyboard.setOptions(parseProps(nextProps));

  clearInput = inputName => {
    this.setState({ input: "" });
    this.keyboard.clearInput(inputName || "default");
  };

  getInput = inputName =>
    inputName ? this.keyboard.input[inputName] : this.state.input;

  setInput = (input, inputName) =>
    new Promise(resolve => {
      this.keyboard.setInput(input, inputName);
      this.setState({ input }, () => resolve(input));
    });

  onKeyPress = button => {
    const { debug, onKeyPress } = this.props;

    /**
     * Calling user onKeyPress
     */
    if (typeof onKeyPress === "function") onKeyPress(button);

    if (debug) {
      console.log("Key pressed:", button);
    }
  };

  onChange = input => {
    const {
      keyboard,
      props: { debug, onChange, onChangeAll },
      state
    } = this;

    this.setState({ input }, () => {
      if (debug) {
        console.log("Input changed:", state.input);
      }

      /**
       * Calling user onChange
       */
      if (typeof onChange === "function") onChange(this.state.input);

      /**
       * Calling user onChangeAll
       */
      if (typeof onChangeAll === "function") onChangeAll(keyboard.input);
    });
  };

  initKeyboard = () => {
    const { onKeyPress, onChange, props, getCssBaseClass } = this;
    const cssClass = getCssBaseClass();

    this.keyboard = new Keyboard(`.${cssClass}`, {
      ...parseProps(props),
      onKeyPress,
      onChange
    });
  };

  getCssBaseClass = () => this.props.baseClass || this.baseClassDefault;

  render() {
    const { getCssBaseClass } = this;

    return <div className={`${getCssBaseClass()}`} />;
  }
}

KeyboardReact.propTypes = {
  layoutName: PropTypes.string,
  layout: PropTypes.object,
  theme: PropTypes.string,
  display: PropTypes.object,
  onChange: PropTypes.func,
  onChangeAll: PropTypes.func,
  onKeyPress: PropTypes.func,
  debug: PropTypes.bool,
  baseClass: PropTypes.string
};

export default KeyboardReact;
