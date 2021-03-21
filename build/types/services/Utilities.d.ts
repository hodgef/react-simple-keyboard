import { KeyboardReactInterface } from "../interfaces";
export declare const parseProps: (props: KeyboardReactInterface["options"]) => {
    theme: string;
    layout?: import("simple-keyboard/build/types/interfaces").KeyboardLayoutObject;
    layoutName?: string;
    display?: {
        [button: string]: string;
    };
    mergeDisplay?: boolean;
    buttonTheme?: import("simple-keyboard/build/types/interfaces").KeyboardButtonTheme[];
    buttonAttributes?: import("simple-keyboard/build/types/interfaces").KeyboardButtonAttributes[];
    debug?: boolean;
    newLineOnEnter?: boolean;
    tabCharOnTab?: boolean;
    inputName?: string;
    maxLength?: any;
    syncInstanceInputs?: boolean;
    physicalKeyboardHighlight?: boolean;
    physicalKeyboardHighlightPress?: boolean;
    physicalKeyboardHighlightTextColor?: string;
    physicalKeyboardHighlightBgColor?: string;
    preventMouseDownDefault?: boolean;
    preventMouseUpDefault?: boolean;
    stopMouseDownPropagation?: boolean;
    stopMouseUpPropagation?: boolean;
    useButtonTag?: boolean;
    disableCaretPositioning?: boolean;
    inputPattern?: any;
    useTouchEvents?: boolean;
    autoUseTouchEvents?: boolean;
    useMouseEvents?: boolean;
    disableButtonHold?: boolean;
    rtl?: boolean;
    enableLayoutCandidates?: boolean;
    layoutCandidates?: {
        [key: string]: string;
    };
    excludeFromLayout?: {
        [key: string]: string[];
    };
    layoutCandidatesPageSize?: number;
    onRender?: (instance?: import("simple-keyboard/build/types/components/Keyboard").default) => void;
    onInit?: (instance?: import("simple-keyboard/build/types/components/Keyboard").default) => void;
    keyboardRef?: (r: any) => void;
};
export declare const changedProps: (prevProps: KeyboardReactInterface["options"], props: KeyboardReactInterface["options"]) => string[];
