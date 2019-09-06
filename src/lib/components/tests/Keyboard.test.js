import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';

import { setDOM } from '../../../utils/TestUtility';
import Keyboard from '../Keyboard';

Enzyme.configure({ adapter: new Adapter() });

it('Keyboard renders without crashing', () => {
  setDOM("container");
  mount(<Keyboard />, { attachTo: document.body.firstChild });
});

it('Keyboard props duly set through setOptions', () => {
  setDOM("container");

  let keyboard;
  let props = {
    keyboardRef: r => keyboard = r
  };
  let wrapper = mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  wrapper.setProps({
    maxLength: 5
  });

  expect(keyboard.options.maxLength).toBe(5);
});

it('Keyboard getInput, setInput, clearInput will work', () => {
  setDOM("container");

  let keyboard;
  let props = {
    keyboardRef: r => keyboard = r
  };
  mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  keyboard.setInput("test");
  expect(keyboard.getInput()).toBe("test");

  keyboard.clearInput();
  expect(keyboard.getInput()).toBeFalsy();
});

it('Keyboard getInput will work with param', () => {
  setDOM("container");

  let keyboard;
  let props = {
    keyboardRef: r => keyboard = r
  };
  mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  keyboard.setInput("testy", "testIpt");
  expect(keyboard.getInput("testIpt")).toBe("testy");
});

it('Keyboard onKeyPress will work', () => {
  setDOM("container");

  let pressed = false;
  let props = {
    keyboardRef: r => keyboard = r,
    onKeyPress: () => { pressed = true }
  };
  let keyboard;
  mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  keyboard.getButtonElement("q").onclick();
  expect(pressed).toBeTruthy();
});

it('Keyboard onKeyPress will work without onKeyPress prop', () => {
  setDOM("container");

  let props = {
    keyboardRef: r => keyboard = r,
    debug: true
  };
  let keyboard;
  mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  keyboard.getButtonElement("q").onclick();
});

it('Keyboard onChange will work', () => {
  setDOM("container");

  let changed = false;
  let props = {
    keyboardRef: r => keyboard = r,
    onChange: () => {
      changed = true;
    }
  };
  
  let keyboard;
  mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  keyboard.getButtonElement("q").onclick();
  expect(changed).toBeTruthy();
});

it('Keyboard onChange will work without onChange prop', () => {
  setDOM("container");

  let props = {
    keyboardRef: r => keyboard = r,
  };
  let keyboard;
  mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  keyboard.getButtonElement("q").onclick();
});

it('Keyboard onChangeAll will work', () => {
  setDOM("container");

  let changed = false;

  let props = {
    keyboardRef: r => keyboard = r,
    onChangeAll: () => {
      changed = true;
    }
  };
  let keyboard;
  mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  keyboard.getButtonElement("q").onclick();

  expect(changed).toBeTruthy();
});

it('Keyboard will have default theme', () => {
  setDOM("container");

  let changed = false;

  let props = {
    keyboardRef: r => keyboard = r,
    onChangeAll: () => {
      changed = true;
    }
  };
  let keyboard;
  mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  keyboard.getButtonElement("q").onclick();

  expect(changed).toBeTruthy();
});