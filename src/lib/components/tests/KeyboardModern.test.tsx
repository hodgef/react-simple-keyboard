import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import * as React from "react";

import { setDOM } from "../../../utils/TestUtility";
import Keyboard from "../KeyboardModern";

Enzyme.configure({ adapter: new Adapter() });

it("Keyboard renders without crashing", () => {
  setDOM("container");
  Enzyme.mount(<Keyboard />, {
    attachTo: document.body.querySelector("#root"),
  });
});

it("Keyboard props duly set through setOptions", () => {
  setDOM("container");

  let keyboard;
  const props = {
    keyboardRef: (r) => (keyboard = r),
  };
  const wrapper = Enzyme.mount(<Keyboard {...props} />, {
    attachTo: document.body.querySelector("#root"),
  });

  wrapper.setProps({
    maxLength: 5,
  });

  expect(keyboard.options.maxLength).toBe(5);
});

it("Keyboard getInput, setInput, clearInput will work", () => {
  setDOM("container");

  let keyboard;
  const props = {
    keyboardRef: (r) => (keyboard = r),
  };
  Enzyme.mount(<Keyboard {...props} />, {
    attachTo: document.body.querySelector("#root"),
  });

  keyboard.setInput("test");
  expect(keyboard.getInput()).toBe("test");

  keyboard.clearInput();
  expect(keyboard.getInput()).toBeFalsy();
});

it("Keyboard getInput will work with param", () => {
  setDOM("container");

  let keyboard;
  const props = {
    keyboardRef: (r) => (keyboard = r),
  };
  Enzyme.mount(<Keyboard {...props} />, {
    attachTo: document.body.querySelector("#root"),
  });

  keyboard.setInput("testy", "testIpt");
  expect(keyboard.getInput("testIpt")).toBe("testy");
});

it("Keyboard onKeyPress will work", () => {
  setDOM("container");

  let pressed = false;
  const props = {
    keyboardRef: (r) => (keyboard = r),
    onKeyPress: () => {
      pressed = true;
    },
  };
  let keyboard;
  Enzyme.mount(<Keyboard {...props} />, {
    attachTo: document.body.querySelector("#root"),
  });

  keyboard.getButtonElement("q").onclick();
  expect(pressed).toBeTruthy();
});

it("Keyboard onKeyPress will work without onKeyPress prop", () => {
  setDOM("container");

  const props = {
    keyboardRef: (r) => (keyboard = r),
    debug: true,
  };
  let keyboard;
  Enzyme.mount(<Keyboard {...props} />, {
    attachTo: document.body.querySelector("#root"),
  });

  keyboard.getButtonElement("q").onclick();
});

it("Keyboard onChange will work", () => {
  setDOM("container");

  let changed = false;
  const props = {
    keyboardRef: (r) => (keyboard = r),
    onChange: () => {
      changed = true;
    },
  };

  let keyboard;
  Enzyme.mount(<Keyboard {...props} />, {
    attachTo: document.body.querySelector("#root"),
  });

  keyboard.getButtonElement("q").onclick();
  expect(changed).toBeTruthy();
});

it("Keyboard onChange will work without onChange prop", () => {
  setDOM("container");

  const props = {
    keyboardRef: (r) => (keyboard = r),
  };
  let keyboard;
  Enzyme.mount(<Keyboard {...props} />, {
    attachTo: document.body.querySelector("#root"),
  });

  keyboard.getButtonElement("q").onclick();
});

it("Keyboard onChangeAll will work", () => {
  setDOM("container");

  let changed = false;

  const props = {
    keyboardRef: (r) => (keyboard = r),
    onChangeAll: () => {
      changed = true;
    },
  };
  let keyboard;
  Enzyme.mount(<Keyboard {...props} />, {
    attachTo: document.body.querySelector("#root"),
  });

  keyboard.getButtonElement("q").onclick();

  expect(changed).toBeTruthy();
});

it("Keyboard will have default theme", () => {
  setDOM("container");

  let changed = false;

  const props = {
    keyboardRef: (r) => (keyboard = r),
    onChangeAll: () => {
      changed = true;
    },
  };
  let keyboard;
  Enzyme.mount(<Keyboard {...props} />, {
    attachTo: document.body.querySelector("#root"),
  });

  keyboard.getButtonElement("q").onclick();

  expect(changed).toBeTruthy();
});
