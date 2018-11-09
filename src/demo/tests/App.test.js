import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestUtility from '../../lib/tests/TestUtility';
import BaseDOM from './BaseDOM';
import Index from '../index';
import App from '../App';
import { mount, render } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

let testUtil = new TestUtility();

it('Demo will load', () => {
  testUtil.setDOM();
  const wrapper = mount(<App />, { attachTo: document.body.firstChild });
});

it('Demo onChange will work', () => {
  testUtil.setDOM();
  const wrapper = mount(<App />, { attachTo: document.body.firstChild });

  wrapper.instance().keyboard.keyboard.getButtonElement("q").onclick();
  expect(wrapper.instance().state.input).toBe("q");
});

it('Demo {shift} will work', () => {
  testUtil.setDOM();
  const wrapper = mount(<App />, { attachTo: document.body.firstChild });

  wrapper.instance().keyboard.keyboard.getButtonElement("{shiftleft}").onclick();
  expect(wrapper.instance().state.layoutName).toBe("shift");

  wrapper.instance().keyboard.keyboard.getButtonElement("{shiftleft}").onclick();
  expect(wrapper.instance().state.layoutName).toBe("default");
});

it('Demo onChangeInput will work', () => {
  testUtil.setDOM();
  const wrapper = mount(<App />, { attachTo: document.body.firstChild });

  wrapper.instance().onChangeInput({
    target: {
      value: "test"
    }
  });

  wrapper.find('textarea').simulate('change', {
    target: {
      value: "test"
    }
  });
});