import Keyboard from "simple-keyboard";
export interface KeyboardReactInterface extends Keyboard {
    options: Keyboard["options"] & {
        keyboardRef?: (r: any) => void;
    };
}
