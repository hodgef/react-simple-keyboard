import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';

import './BaseDOM';
import '../index';
import { setDOM } from '../../lib/tests/TestUtility';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

const keyboardComponent = wrapper => wrapper.instance().keyboard.current.keyboard

it('Demo will load', () => {
  setDOM();
  mount(<App />, { attachTo: document.body.firstChild });
});

it('Demo onChange will work', () => {
  setDOM();
  
  const wrapper = mount(<App />, { attachTo: document.body.firstChild });

  keyboardComponent(wrapper).getButtonElement('q').onclick();
  expect(wrapper.instance().state.input).toBe('q');
});

it('Demo {shift} will work', () => {
  setDOM();

  const wrapper = mount(<App />, { attachTo: document.body.firstChild });

  keyboardComponent(wrapper).getButtonElement('{shiftleft}').onclick();
  expect(wrapper.instance().state.layoutName).toBe('shift');

  keyboardComponent(wrapper).getButtonElement('{shiftleft}').onclick();
  expect(wrapper.instance().state.layoutName).toBe('default');
});

it('Demo onChangeInput will work', () => {
  setDOM();

  const wrapper = mount(<App />, { attachTo: document.body.firstChild });

  wrapper.instance().onChangeInput({ target: { value: 'test' } });
  wrapper.find('textarea').simulate('change', { target: { value: 'test' } });
});