import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Keyboard from '../Keyboard';
import TestUtility from '../../tests/TestUtility';
import { mount, render } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

let testUtil = new TestUtility();

it('Keyboard renders without crashing', () => {
  testUtil.setDOM("container");
  mount(<Keyboard />, { attachTo: document.body.firstChild });
});

it('Keyboard props duly set through setOptions', () => {
  testUtil.setDOM("container");

  let props = {};
  const wrapper = mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  wrapper.setProps({
    maxLength: 5
  });

  expect(wrapper.instance().keyboard.options.maxLength).toBe(5);
});

it('Keyboard getInput, setInput, clearInput will work', () => {
  testUtil.setDOM("container");

  let props = {};
  const wrapper = mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  wrapper.instance().setInput("test");
  expect(wrapper.instance().getInput()).toBe("test");

  wrapper.instance().clearInput();
  expect(wrapper.instance().getInput()).toBeFalsy();
});

it('Keyboard getInput will work with param', () => {
  testUtil.setDOM("container");

  let props = {};
  const wrapper = mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  wrapper.instance().setInput("testy", "testIpt");
  expect(wrapper.instance().getInput("testIpt")).toBe("testy");
});

it('Keyboard onKeyPress will work', () => {
  testUtil.setDOM("container");

  let pressed = false;

  let props = {
    onKeyPress: () => {
      pressed = true;
    }
  };

  const wrapper = mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  wrapper.instance().keyboard.getButtonElement("q").onclick();
  expect(pressed).toBeTruthy();
});

it('Keyboard onKeyPress will work without onKeyPress prop', () => {
  testUtil.setDOM("container");

  let props = {
    debug: true
  };

  const wrapper = mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });
  wrapper.instance().keyboard.getButtonElement("q").onclick();
});

it('Keyboard onChange will work', () => {
  testUtil.setDOM("container");

  let changed = false;

  let props = {
    onChange: () => {
      changed = true;
    }
  };

  const wrapper = mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });

  wrapper.instance().keyboard.getButtonElement("q").onclick();
  expect(changed).toBeTruthy();
});

it('Keyboard onChange will work without onChange prop', () => {
  testUtil.setDOM("container");

  let props = {};

  const wrapper = mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });
  wrapper.instance().keyboard.getButtonElement("q").onclick();
});

it('Keyboard onChangeAll will work', () => {
  testUtil.setDOM("container");

  let changed = false;

  let props = {
    onChangeAll: () => {
      changed = true;
    }
  };

  const wrapper = mount(<Keyboard {...props} />, { attachTo: document.body.firstChild });
  wrapper.instance().keyboard.getButtonElement("q").onclick();

  expect(changed).toBeTruthy();
});