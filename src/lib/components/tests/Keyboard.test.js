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

  const props = {};
  const wrapper = mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  wrapper.setProps({
    maxLength: 5
  });

  expect(wrapper.instance().keyboard.options.maxLength).toBe(5);
});

it('Keyboard getInput, setInput, clearInput will work', () => {
  setDOM("container");

  const props = {};
  const wrapper = mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  wrapper.instance().keyboard.setInput("test");
  expect(wrapper.instance().keyboard.getInput()).toBe("test");

  wrapper.instance().keyboard.clearInput();
  expect(wrapper.instance().keyboard.getInput()).toBeFalsy();
});

it('Keyboard getInput will work with param', () => {
  setDOM("container");

  const props = {};
  const wrapper = mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });


  wrapper.instance().keyboard.setInput("testy", "testIpt");
  expect(wrapper.instance().keyboard.getInput("testIpt")).toBe("testy");
});

it('Keyboard onKeyPress will work', () => {
  setDOM("container");

  let pressed = false;
  const props = { onKeyPress: () => { pressed = true } };
  const wrapper = mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  wrapper.instance().keyboard.getButtonElement("q").onclick();
  expect(pressed).toBeTruthy();
});

it('Keyboard onKeyPress will work without onKeyPress prop', () => {
  setDOM("container");

  const props = { debug: true };
  const wrapper = mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  wrapper.instance().keyboard.getButtonElement("q").onclick();
});

it('Keyboard onChange will work', () => {
  setDOM("container");

  let changed = false;
  const props = {
    onChange: () => {
      changed = true;
    }
  };
  const wrapper = mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  wrapper.instance().keyboard.getButtonElement("q").onclick();
  expect(changed).toBeTruthy();
});

it('Keyboard onChange will work without onChange prop', () => {
  setDOM("container");

  const props = {};
  const wrapper = mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  wrapper.instance().keyboard.getButtonElement("q").onclick();
});

it('Keyboard onChangeAll will work', () => {
  setDOM("container");

  let changed = false;

  const wrapper = mount(<Keyboard
    onChangeAll={() => {
      changed = true;
    }}
  />, { attachTo: document.body.firstChild });

  wrapper.instance().keyboard.getButtonElement("q").onclick();

  expect(changed).toBeTruthy();
});

it('Keyboard will have default theme', () => {
  setDOM("container");

  let changed = false;

  const wrapper = mount(<Keyboard
    onChangeAll={() => {
      changed = true;
    }}
  />, { attachTo: document.body.firstChild });

  wrapper.instance().keyboard.getButtonElement("q").onclick();

  expect(changed).toBeTruthy();
});