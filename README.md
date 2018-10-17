[![npm version](https://badge.fury.io/js/react-simple-keyboard.svg)](https://www.npmjs.com/package/react-simple-keyboard)
[![Build Status](https://travis-ci.org/hodgef/react-simple-keyboard.svg?branch=master)](https://travis-ci.org/hodgef/react-simple-keyboard)
[![codecov](https://codecov.io/gh/hodgef/react-simple-keyboard/branch/master/graph/badge.svg)](https://codecov.io/gh/hodgef/react-simple-keyboard)
[![](https://img.shields.io/badge/discord--chat-join-green.svg?longCache=true&style=flat-square&colorB=7289DA&logo=discord)](http://franciscohodge.com/simple-keyboard/chat/join) 

<a href="https://franciscohodge.com/simple-keyboard/demo" title="View Demo" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/reactsimplekeyboard-banner_B.png" align="center" width="100%"></a>
<a href="https://franciscohodge.com/simple-keyboard/demo" title="View Demo" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/simple-keyboard-10172018.gif" align="center" width="100%"></a>

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

<a href="https://codesandbox.io/s/github/hodgef/demo_npm_react-simple-keyboard" title="run demo" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/rundemo200.png" width="150" align="center"></a>

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
  ...
}}
```

### mergeDisplay

By default, when you set the `display` property, you replace the default one. This setting merges them instead.

```js
mergeDisplay={true}

display={{
  '{bksp}': 'delete',
  '{enter}': 'submit',
}}

// Result:
{
  '{bksp}': 'delete'
  '{enter}': 'submit',
  '{shift}': 'shift', // < Merged from default among others
  ....
}
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

<a href="https://codesandbox.io/s/github/hodgef/demo_npm_react-simple-keyboard_customization" title="run demo" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/rundemo200.png" width="150" align="center"></a>


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

### maxLength

> Restrains react-simple-keyboard's input to a certain length. This should be used in addition to the input element's `maxlength` attribute.

```js
// Applies to all internal inputs
maxLength={5}

// Specifies different limiters for each input set, in case you are using the "inputName" option
maxLength={{
  'default': 5,
  'myFancyInput': 10
}}
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

Enable highlighting of keys pressed on physical keyboard.

For functional keys such as `shift`, note that the key's `event.code` is used. In that instance, pressing the left key will result in the code `ShiftLeft`. Therefore, the key must be named `{shiftleft}`.
[Click here](https://github.com/hodgef/simple-keyboard/blob/master/src/lib/services/Utilities.js#L58) for some of keys supported out of the box.

If in doubt, you can also set the `debug` option to `true`.

```js
physicalKeyboardHighlight={true}
```

### physicalKeyboardHighlightTextColor

Define the text color that the physical keyboard highlighted key should have. Used when `physicalKeyboardHighlight` is set to true.

```js
physicalKeyboardHighlightTextColor={"white"}
```

### physicalKeyboardHighlightBgColor

Define the background color that the physical keyboard highlighted key should have. Used when `physicalKeyboardHighlight` is set to true.

```js
physicalKeyboardHighlightBgColor={"#9ab4d0"}
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

### onRender

> Executes the callback function every time simple-keyboard is rendered (e.g: when you change layouts).

```js
onRender={() => console.log("simple-keyboard refreshed")}
```

### onInit

> Executes the callback function once simple-keyboard is rendered for the first time (on initialization).

```js
onInit={() => console.log("simple-keyboard initialized")}
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

This is a port of the [simple-keyboard feature](https://www.npmjs.com/package/simple-keyboard#dispatch) of the same name.
It has been removed from this port in favor of a react-like approach.

To send props to several instances at once, you can use shared props like so:

```js
let sharedProps = {
  layoutName: this.state.layoutName,
  onChange: input => this.onChange(input),
  onKeyPress: button => this.onKeyPress(button),
};

// Keyboard 1
<Keyboard {...sharedProps} />

// Keyboard 2
<Keyboard {...sharedProps} />
```

This way you can update your desired instances at the same time using `this.setState`.

<a href="https://codesandbox.io/s/github/hodgef/demo_npm_react-simple-keyboard_multiple-instances" title="run demo" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/rundemo200.png" width="150" align="center"></a>

### getButtonElement

> Get the DOM Element of a button. If there are several buttons with the same name, an array of the DOM Elements is returned.

```js
this.keyboard.getButtonElement('a'); // Gets the "a" key as per your layout
this.keyboard.getButtonElement('{shift}') // Gets all keys with that name in an array
```

### addButtonTheme

Adds an entry to the `buttonTheme`. Basically a way to add a class to a button.

Unlike the `buttonTheme` property, which replaces entries, `addButtonTheme` creates entries or modifies existing ones.

```js
this.keyboard.addButtonTheme("a b c {enter}", "myClass1 myClass2");
```

### removeButtonTheme

Removes an entry to the `buttonTheme`. Basically a way to remove a class previously added to a button through `buttonTheme` or `addButtonTheme`.

Unlike the `buttonTheme` property, which replaces entries, `removeButtonTheme` removes entries or modifies existing ones.

```js
this.keyboard.removeButtonTheme("b c", "myClass1 myClass2");
```

## Q&A / Use-cases

### Multiple simple-keyboard instances: Setting a baseClass

Set the *[baseClass](#baseclass)* option to add a unique identifier to each of your simple-keyboard instances.
If not set, a random baseClass will be used (e.g.: `simplekeyboard_id-qeu5wu` to differentiate your instance from others you may spawn).

<a href="https://codesandbox.io/s/github/hodgef/demo_npm_react-simple-keyboard_multiple-instances" title="run demo" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/rundemo200.png" width="150" align="center"></a>

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

### Having keys in a different language configuration

There's a number of key layouts available. To apply them, check out [simple-keyboard-layouts](https://github.com/hodgef/simple-keyboard-layouts).

If you'd like to contribute your own layouts, please submit your pull request at the simple-keyboard-layouts repository.

### How to syncronize multiple instances of simple-keyboard

You can run multiple instances of simple-keyboard. To keep their internal inputs in sync, set the *[syncInstanceInputs](#syncinstanceinputs)* option to `true`.
If you want to send a command to all your simple-keyboard instances at once, you can use the *[dispatch](#dispatch)* method.

### Why is the caps lock button working like shift button

For the sake of simplicity, caps lock and shift do the same action in the main demos.
If you'd like to show a different layout when you press caps lock, check out the following demo:

<a href="https://codesandbox.io/s/github/hodgef/demo_npm_react-simple-keyboard_handling-shift-caps-lock" title="run demo" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/rundemo200.png" width="150" align="center"></a>

## Demo

### Live demos

[https://franciscohodge.com/simple-keyboard/demo](https://franciscohodge.com/simple-keyboard/demo)

<a href="https://codesandbox.io/s/github/hodgef/demo_npm_react-simple-keyboard" title="run demo" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/rundemo200.png" width="150" align="center"></a>


### To run demo on your own computer

* Clone this repository
* `npm install`
* `npm start`
* Visit [http://localhost:3000/](http://localhost:3000/)

### Other versions

* Vanilla JS - [simple-keyboard](https://github.com/hodgef/simple-keyboard)

### Questions?

<a href="http://franciscohodge.com/simple-keyboard/chat/join" title="Join our Discord chat" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/discord.png" align="center" width="200"></a>

## Contributing

PR's and issues are welcome. Feel free to submit any issues you have at:
[https://github.com/hodgef/react-simple-keyboard/issues](https://github.com/hodgef/react-simple-keyboard/issues)
