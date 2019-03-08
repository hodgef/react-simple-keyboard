import React, { Component } from "react";
import PropTypes from "prop-types";
import Keyboard from "simple-keyboard";
import { parseProps } from "../services/Utilities";
import "simple-keyboard/build/css/index.css";

class KeyboardReact extends Component {
  baseClassDefault = "react-simple-keyboard";

  componentDidMount = () => {
    const { props, getCssBaseClass } = this;
    const cssClass = getCssBaseClass();

    this.keyboard = new Keyboard(`.${cssClass}`, {
      ...parseProps(props)
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.stateToIgnore !== nextProps.stateToIgnore) return false;
    else return true;
  }

  componentWillReceiveProps = nextProps =>
    this.keyboard.setOptions(parseProps(nextProps));

  getCssBaseClass = () => this.props.baseClass || this.baseClassDefault;

  render() {
    const { getCssBaseClass } = this;
    return <div className={`${getCssBaseClass()}`} />;
  }
}

KeyboardReact.propTypes = {
  stateToIgnore: PropTypes.any
};

export default KeyboardReact;
