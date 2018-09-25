[![npm version](https://badge.fury.io/js/react-simple-keyboard.svg)](https://www.npmjs.com/package/react-simple-keyboard)

<a href="https://franciscohodge.com/simple-keyboard/demo" title="View Demo" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/reactsimplekeyboard-banner_B.png" align="center" width="100%"></a>
<a href="https://franciscohodge.com/simple-keyboard/demo" title="View Demo" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/simple-keyboard-240-demo-2.gif" align="center" width="100%"></a>

> The easily customisable and responsive on-screen virtual keyboard, now for React.js projects.

> Want the vanilla js version? Get [simple-keyboard](https://www.npmjs.com/package/simple-keyboard) instead!


## Installation

`npm install react-simple-keyboard --save`

## Usage

````js
import React, {Component} from 'react';
import Keyboard from 'react-simple-keyboard';
import 'simple-keyboard/build/css/index.css';

class App extends Component {

  onChange = (input) => {
    console.log("Input changed", input);
  }

  onKeyPress = (button) => {
    console.log("Button pressed", button);
  }

  render(){
    return (
      <Keyboard
        onChange={input =>
          this.onChange(input)}
        onKeyPress={button =>
          this.onKeyPress(button)}
      />
    );
  }
}

export default App;
````

[![Edit m75m9v183p](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/m75m9v183p)

> Need a more extensive example? [Click here](https://github.com/hodgef/simple-keyboard/blob/master/src/demo/App.js).

## Options

You can customize the Keyboard by passing options (props) to it.
Here are the available options (the code examples are the defaults):

### layout

> Modify the keyboard layout

```js
layout={{
  'default': [
    '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
    '{tab} q w e r t y u i o p [ ] \\',
    '{lock} a s d f g h j k l ; \' {enter}',
    '{shift} z x c v b n m , . / {shift}',
    '.com @ {space}'
  ],
  'shift': [
    '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
    '{tab} Q W E R T Y U I O P { } |',
    '{lock} A S D F G H J K L : " {enter}',
    '{shift} Z X C V B N M < > ? {shift}',
    '.com @ {space}'
  ]
}}
```

> Looking for keyboard layouts in other languages? **Check out [simple-keyboard-layouts](https://github.com/hodgef/simple-keyboard-layouts) !**

### layoutName

> Specifies which layout should be used.

```js
layoutName={"default"}
```

### display

> Replaces variable buttons (such as `{bksp}`) with a human-friendly name (e.g.: "delete").

```js
display={{
  '{bksp}': 'delete',
  '{enter}': '< enter',
  '{shift}': 'shift',
  '{s}': 'shift',
  '{tab}': 'tab',
  '{lock}': 'caps',
  '{accept}': 'Submit',
  '{space}': ' ',
  '{//}': ' '
}}
```

### theme

> A prop to add your own css classes. You can add multiple classes separated by a space.

```js
theme={"hg-theme-default"}
```

### buttonTheme

> A prop to add your own css classes _to one or several buttons_. You can add multiple classes separated by a space.

```js
buttonTheme={[
  {
    class: "myCustomClass",
    buttons: "Q W E R T Y q w e r t y"
  },
  {
    class: "anotherCustomClass",
    buttons: "Q q"
  },
  ...
]}
```

[![Edit react-simple-keyboard customization demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/ol76rx073z)


### debug

> Runs a console.log every time a key is pressed. Displays the buttons pressed and the current input.

```js
debug={false}
```

### newLineOnEnter

> Specifies whether clicking the "ENTER" button will input a newline (`\n`) or not.

```js
newLineOnEnter={false}
```

### inputName

> Allows you to use a single simple-keyboard instance for several inputs.

```js
inputName={"default"}
```

### baseClass

Sets a personalized unique id (base class) for your simple-keyboard instance.
This is useful if you want to have many simple-keyboard instances and do not want to confuse them.

If not set, a random baseClass will be used (e.g.: `simplekeyboard_id-qeu5wu` to differentiate your instance from others you may spawn).

```js
baseClass={"myBaseClass"}
```

### syncInstanceInputs

> When set to true, this option synchronizes the internal input of every simple-keyboard instance.

```js
syncInstanceInputs={false}
```

### physicalKeyboardHighlight

When set to true, this option adds the special class (`hg-selectedButton`) to the key that matches.
For example, when you press the `a` key, that key in simple-keyboard will have the special class until the key is released.

For functional keys such as `shift`, note that the key's `event.code` is used. In that instance, pressing the left key will result in the code `ShiftLeft`. Therefore, the key must be named `{shiftleft}`.
[Click here](https://github.com/hodgef/simple-keyboard/blob/master/src/lib/services/Utilities.js#L58) for some of keys supported out of the box.

If in doubt, you can also set the `debug` option to `true`.

```js
physicalKeyboardHighlight={true}
```

### onKeyPress

> Executes the callback function on key press. Returns button layout name (i.e.: "{shift}").

```js
onKeyPress={(button) => console.log(button)}
```

### onChange

> Executes the callback function on input change. Returns the current input's string.

```js
onChange={(input) => console.log(input)}
```

### onChangeAll

> Executes the callback function on input change. Returns the input object with all defined inputs. This is useful if you're handling several inputs with simple-keyboard, as specified in the "*[Using several inputs](#using-several-inputs)*" guide.

```js
onChangeAll={(inputs) => console.log(inputs)}
```

## Methods

simple-keyboard has a few methods you can use to further control it's behavior.
To access these functions, you need a `ref` of the simple-keyboard component, like so:

```js
<Keyboard
  ref={r => this.keyboard = r}
  [...]
/>

// Then, on componentDidMount ..
this.keyboard.methodName(params);
```

### clearInput

> Clear the keyboard's input.

```js
// For default input (i.e. if you have only one)
this.keyboard.clearInput();

// For specific input
// Must have been previously set using the "inputName" prop.
this.keyboard.clearInput("inputName");
```

### getInput

> Get the keyboard's input (You can also get it from the _onChange_ prop).

```js
// For default input (i.e. if you have only one)
let input = this.keyboard.getInput();

// For specific input
// Must have been previously set using the "inputName" prop.
let input = this.keyboard.getInput("inputName");
```

### setInput

> Set the keyboard's input. Useful if you want the keybord to initialize with a default value, for example.

```js
// For default input (i.e. if you have only one)
this.keyboard.setInput("Hello World!");

// For specific input
// Must have been previously set using the "inputName" prop.
this.keyboard.setInput("Hello World!", "inputName");
```

It returns a promise, so if you want to run something after it's applied, call it as so:

```js
let inputSetPromise = this.keyboard.setInput("Hello World!");

inputSetPromise.then((result) => {
  console.log("Input set");
});
```

### dispatch

> Send a command to all simple-keyboard instances at once (if you have multiple instances).

```js
this.keyboard.dispatch(instance => {
  instance.setOptions({
    buttonTheme: [
      {
        class: "myClass",
        buttons: `a b c`
      }
    ]
  })
});
```

## Q&A / Use-cases

### Multiple simple-keyboard instances: Setting a baseClass
Set the *[baseClass](#baseclass)* option to add a unique identifier to each of your simple-keyboard instances.
If not set, a random baseClass will be used (e.g.: `simplekeyboard_id-qeu5wu` to differentiate your instance from others you may spawn).

[![Edit react-simple-keyboard multiple instances demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/8z2jw9okm8)

### Using several inputs

Set the *[inputName](#inputname)* option for each input you want to handle with simple-keyboard.

For example:
```js
// Tell simple-keyboard which input is active
setActiveInput = (event) => {
  this.setState({
    inputName: event.target.id
  });
}

// When the inputs are changed
// (retrieves all inputs as an object instead of just the current input's string)
onChangeAll = (input) => {
  this.setState({
    input: input
  }, () => {
    console.log("Inputs changed", input);
  });
}

render(){
  return (
    <div>
      <input id="input1" onFocus={this.setActiveInput} value={this.state.input['input1'] || ""}/>
      <input id="input2" onFocus={this.setActiveInput} value={this.state.input['input2'] || ""}/>

      <Keyboard
        ref={r => this.keyboard = r}
        inputName={this.state.inputName}
        onChangeAll={inputs => this.onChangeAll(inputs)}
        layoutName={this.state.layoutName}
      />
    </div>
  );
```
> [See full example](https://github.com/hodgef/react-simple-keyboard/blob/master/src/demo/MultipleInputsDemo.js).

### Having keys in a different language configuration

There's a number of key layouts available. To apply them, check out [simple-keyboard-layouts](https://github.com/hodgef/simple-keyboard-layouts).

If you'd like to contribute your own layouts, please submit your pull request at the simple-keyboard-layouts repository.

### How to syncronize multiple instances of simple-keyboard

You can run multiple instances of simple-keyboard. To keep their internal inputs in sync, set the *[syncInstanceInputs](#syncinstanceinputs)* option to `true`. 
If you want to send a command to all your simple-keyboard instances at once, you can use the *[dispatch](#dispatch)* method.

### Why is the caps lock button working like shift button?

For the sake of simplicity, caps lock and shift do the same action in the main demos.
If you'd like to show a different layout when you press caps lock, check out the following demo:

[![Edit react-simple-keyboard handling shift and caps lock demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/930vzzp77o)

## Demo

### Live demos

[https://franciscohodge.com/simple-keyboard/demo](https://franciscohodge.com/simple-keyboard/demo)

[![Edit m75m9v183p](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/m75m9v183p)

### To run demo on your own computer

* Clone this repository
* `npm install`
* `npm start`
* Visit [http://localhost:3000/](http://localhost:3000/)


### Other versions

* Vanilla JS - [simple-keyboard](https://github.com/hodgef/simple-keyboard)

## Contributing

PR's and issues are welcome. Feel free to submit any issues you have at:
[https://github.com/hodgef/react-simple-keyboard/issues](https://github.com/hodgef/react-simple-keyboard/issues)
