import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';

class App extends Component {
  state = {
    input: '',
  }

  componentDidMount(){
    this.initKeyboard(this.props);
  }

  componentWillReceiveProps = nextProps => {
    this.keyboard.setOptions(nextProps);
  }

  clearInput = (inputName) => {
    inputName = inputName || "default";

    this.setState({
      input: ''
    });

    this.keyboard.clearInput(inputName);
  }

  getInput = (inputName) => {
    return inputName ? this.keyboard.input[inputName] : this.state.input;
  }

  setInput = (input, inputName) => {
    return new Promise(resolve => {
      this.keyboard.setInput(input, inputName);
      this.setState({
        input: input
      }, () => {
        resolve(input);
      });
    })
    .catch(reason => {
      console.warn(reason);
    });
  }

  onKeyPress = (button) => {
    let debug = this.props.debug;

    /**
     * Calling user onKeyPress
     */
    if(typeof this.props.onKeyPress === "function")
      this.props.onKeyPress(button);

    if(debug){
      console.log("Key pressed:", button);
    }
  }

  onChange = (input) => {
    let debug = this.props.debug;

    this.setState({
      input: input
    }, () => {
      if(debug){
        console.log('Input changed:', this.state.input);
      }

      /**
       * Calling user onChange
       */
      if(typeof this.props.onChange === "function")
        this.props.onChange(this.state.input);

      /**
       * Calling user onChangeAll
       */
      if(typeof this.props.onChangeAll === "function")
        this.props.onChangeAll(this.keyboard.input);
    });
  }

  initKeyboard = (props) => {
    let debug = this.props.debug;

    this.keyboard = new Keyboard({
      ...props,
      onKeyPress: button => this.onKeyPress(button),
      onChange: input => this.onChange(input)
    });

    if(debug){
      console.log(this.keyboard);
    }
  }

  render() {
    return (
      <div className="simple-keyboard"></div>
    );
  }
}

App.propTypes = {
  layoutName: PropTypes.string,
  layout: PropTypes.object,
  theme:  PropTypes.string,
  display: PropTypes.object,
  onChange: PropTypes.func,
  onChangeAll: PropTypes.func,
  onKeyPress: PropTypes.func,
  debug: PropTypes.bool
};

export default App;
