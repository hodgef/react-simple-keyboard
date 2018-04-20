import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';

class App extends Component {
  state = {
    input: ''
  }

  componentWillReceiveProps = (nextProps) => {
    if(
      this.props !== nextProps
    ){
      this.setState({
        layoutName: nextProps.layoutName,
        layout: nextProps.layout,
        themeClass: nextProps.theme
      });
    }
  }

  clearInput = () => {
    this.setState({
      input: ''
    });
  }

  getInput = () => {
    return this.state.input;
  }

  setInput = input => {
    return new Promise(resolve => {
      this.keyboard.setInput(input);
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
    });
  }

  componentWillReceiveProps = nextProps => {
    this.keyboard.setOptions(nextProps);
  }

  componentDidMount(){
    this.initKeyboard();
  }

  initKeyboard = (props) => {
    this.keyboard = new Keyboard({
      ...props,
      onKeyPress: button => this.onKeyPress(button),
      onChange: input => this.onChange(input)
    });

    console.log(this.keyboard);
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
  onKeyPress: PropTypes.func,
  debug: PropTypes.bool
};

export default App;
