import Keyboard from "simple-keyboard";

export interface KeyboardReactInterface extends Keyboard {
  options: Keyboard["options"] & {
    // eslint-disable-next-line no-unused-vars
    keyboardRef?: (r: any) => void;
  };
}
