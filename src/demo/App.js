import React, { Component } from "react";

import Keyboard from "../lib";

import "./css/App.css";

class App extends Component {
  state = {
    input: "",
    layoutName: "default",
    buttonTheme: []
  };

  keyboard = React.createRef();

  onChange = input =>
    this.setState({ input }, () => console.log("Input changed", input));

  onKeyPress = button => {
    console.log("Button pressed", button);

    /**
     * Shift functionality
     */
    if (["{capslock}", "{shiftleft}", "{shiftright}"].includes(button))
      this.handleShiftButton();
  };

  handleShiftButton = () => {
    const {
      state: { layoutName }
    } = this;
    const shiftToggle = layoutName === "default" ? "shift" : "default";

    this.setState({ layoutName: shiftToggle });
  };

  onChangeInput = event => {
    const input = event.target.value;

    this.setState({ input: event.target.value }, () =>
      this.keyboardRef.keyboard.setInput(input)
    );
  };

  render() {
    const {
      state: { input, layoutName, buttonTheme },
      onChangeInput,
      onChange,
      onKeyPress
    } = this;
    return (
      <div className="demoPage">
        <div className="screenContainer">
          <textarea
            className="inputContainer"
            value={input}
            onChange={onChangeInput}
          />
        </div>
        <Keyboard
          stateToIgnore={input}
          ref={r => (this.keyboardRef = r)}
          onChange={onChange}
          onKeyPress={onKeyPress}
          layoutName={layoutName}
          buttonTheme={buttonTheme}
          newLineOnEnter
          physicalKeyboardHighlight
          layout={{
            default: [
              "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
              "{tab} q w e r t y u i o p [ ] \\",
              "{capslock} a s d f g h j k l ; ' {enter}",
              "{shiftleft} z x c v b n m , . / {shiftright}",
              ".com @ {space}"
            ],
            shift: [
              "~ ! @ # $ % ^ & * ( ) _ + {backspace}",
              "{tab} Q W E R T Y U I O P { } |",
              '{capslock} A S D F G H J K L : " {enter}',
              "{shiftleft} Z X C V B N M < > ? {shiftright}",
              ".com @ {space}"
            ]
          }}
          debug
        />
      </div>
    );
  }
}

export default App;
