import React, {Component} from 'react';
import Keyboard from '../lib';
import './css/App.css';

class App extends Component {
  state = {
    input: '',
    layoutName: "default"
  }

  componentDidMount(){
    this.keyboard.setInput("Hello World!")
      .then(input => {
        this.setState({input: input});
      });
  }
  
  onChange = (input) => {
    this.setState({
      input: input
    }, () => {
      console.log("Input changed", input);
    });
  }

  onKeyPress = (button) => {
    console.log("Button pressed", button);

    /**
     * Shift functionality
     */
    if(button === "{capslock}" || button === "{shiftleft}" || button === "{shiftright}")
      this.handleShiftButton();
  }

  handleShiftButton = () => {
    let layoutName = this.state.layoutName;
    let shiftToggle = layoutName === "default" ? "shift" : "default";

    this.setState({
      layoutName: shiftToggle
    });
  }
  
  render(){
    return (
      <div className={"demoPage"}>
        <div className={"screenContainer"}>
          <textarea className={"inputContainer"} value={this.state.input} />
        </div>
        <Keyboard
          ref={r => this.keyboard = r}
          onChange={input => this.onChange(input)}
          onKeyPress={button => this.onKeyPress(button)}
          layoutName={this.state.layoutName}
          newLineOnEnter={true}
          physicalKeyboardHighlight={true}
          layout={{
            'default': [
              '` 1 2 3 4 5 6 7 8 9 0 - = {backspace}',
              '{tab} q w e r t y u i o p [ ] \\',
              '{capslock} a s d f g h j k l ; \' {enter}',
              '{shiftleft} z x c v b n m , . / {shiftright}',
              '.com @ {space}'
            ],
            'shift': [
              '~ ! @ # $ % ^ & * ( ) _ + {backspace}',
              '{tab} Q W E R T Y U I O P { } |',
              '{capslock} A S D F G H J K L : " {enter}',
              '{shiftleft} Z X C V B N M < > ? {shiftright}',
              '.com @ {space}'
            ]
          }}
          theme={"hg-layout-default hg-theme-default"}
          debug={false}
        />
      </div>
    );
  }
 
}

export default App;