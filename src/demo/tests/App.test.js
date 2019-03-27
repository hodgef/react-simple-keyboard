import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';

import '../../utils/BaseDOM';
import '../index';
import { setDOM } from '../../utils/TestUtility';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

const keyboard = (wrapper) => wrapper.instance().keyboardRef.keyboard;

it('Demo will load', () => {
  setDOM();
  mount(<App />, { attachTo: document.body.firstChild });
});

it('Demo onChange will work', () => {
  setDOM();
  
  const wrapper = mount(<App />, { attachTo: document.body.firstChild });

  keyboard(wrapper).getButtonElement('q').onclick();
  expect(keyboard(wrapper).getInput()).toBe('q');
});

it('Demo {shift} will work', () => {
  setDOM();

  const wrapper = mount(<App />, { attachTo: document.body.firstChild });

  keyboard(wrapper).getButtonElement('{shiftleft}').onclick();
  expect(wrapper.instance().state.layoutName).toBe('shift');

  keyboard(wrapper).getButtonElement('{shiftleft}').onclick();
  expect(wrapper.instance().state.layoutName).toBe('default');
});

it('Demo onChangeInput will work', () => {
  setDOM();

  const wrapper = mount(<App />, { attachTo: document.body.firstChild });

  wrapper.instance().onChangeInput({ target: { value: 'test' } });
  wrapper.find('textarea').simulate('change', { target: { value: 'test' } });
});