import React, {Component} from 'react';
import Keyboard from '../lib';
import './css/MultipleInputsDemo.css';

class App extends Component {
  state = {
    input: '',
    inputName: 'input1',
    layoutName: "default"
  }

  componentDidMount(){
    /**
     * Retrieved the rendered simple-keyboard instance
     */
    console.log(this.keyboard);
  }
  
  onChangeAll = (input) => {
    this.setState({
      input: input
    }, () => {
      console.log("Inputs changed", input);
    });
  }

  onKeyPress = (button) => {
    console.log(this.keyboard);
    console.log("Button pressed", button);

    /**
     * Shift functionality
     */
    if(button === "{lock}" || button === "{shift}")
      this.handleShiftButton();
  }

  handleShiftButton = () => {
    let layoutName = this.state.layoutName;
    let shiftToggle = layoutName === "default" ? "shift" : "default";

    this.setState({
      layoutName: shiftToggle
    });
  }

  setActiveInput = (event) => {
    console.log("onfocus");
    let inputId = event.target.id;

    this.setState({
      inputName: inputId
    });
  }
  
  render(){
    return (
      <div className={"demoPage"}>

        <div>
          <label>Input 1</label>
          <input id="input1" onFocus={this.setActiveInput} value={this.state.input['input1'] || ""}/>
        </div>

        <div>
          <label>Input 2</label>
          <input id="input2" onFocus={this.setActiveInput} value={this.state.input['input2'] || ""}/>
        </div>

        <Keyboard
          ref={r => this.keyboard = r}
          inputName={this.state.inputName}
          onChangeAll={inputs => this.onChangeAll(inputs)}
          onKeyPress={button => this.onKeyPress(button)}
          layoutName={this.state.layoutName}
        />
      </div>
    );
  }
 
}

export default App;