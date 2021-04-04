import { KeyboardReactInterface } from "../interfaces";
export declare const parseProps: (props: KeyboardReactInterface["options"]) => {
    theme: string;
    layout?: import("simple-keyboard/build/types/interfaces").KeyboardLayoutObject | undefined;
    layoutName?: string | undefined;
    display?: {
        [button: string]: string;
    } | undefined;
    mergeDisplay?: boolean | undefined;
    buttonTheme?: import("simple-keyboard/build/types/interfaces").KeyboardButtonTheme[] | undefined;
    buttonAttributes?: import("simple-keyboard/build/types/interfaces").KeyboardButtonAttributes[] | undefined;
    debug?: boolean | undefined;
    newLineOnEnter?: boolean | undefined;
    tabCharOnTab?: boolean | undefined;
    inputName?: string | undefined;
    maxLength?: any;
    syncInstanceInputs?: boolean | undefined;
    physicalKeyboardHighlight?: boolean | undefined;
    physicalKeyboardHighlightPress?: boolean | undefined;
    physicalKeyboardHighlightTextColor?: string | undefined;
    physicalKeyboardHighlightBgColor?: string | undefined;
    preventMouseDownDefault?: boolean | undefined;
    preventMouseUpDefault?: boolean | undefined;
    stopMouseDownPropagation?: boolean | undefined;
    stopMouseUpPropagation?: boolean | undefined;
    useButtonTag?: boolean | undefined;
    disableCaretPositioning?: boolean | undefined;
    inputPattern?: any;
    useTouchEvents?: boolean | undefined;
    autoUseTouchEvents?: boolean | undefined;
    useMouseEvents?: boolean | undefined;
    disableButtonHold?: boolean | undefined;
    rtl?: boolean | undefined;
    enableLayoutCandidates?: boolean | undefined;
    layoutCandidates?: {
        [key: string]: string;
    } | undefined;
    excludeFromLayout?: {
        [key: string]: string[];
    } | undefined;
    layoutCandidatesPageSize?: number | undefined;
    onRender?: ((instance?: import("simple-keyboard/build/types/components/Keyboard").default | undefined) => void) | undefined;
    onInit?: ((instance?: import("simple-keyboard/build/types/components/Keyboard").default | undefined) => void) | undefined;
    keyboardRef?: ((r: any) => void) | undefined;
};
export declare const changedProps: (prevProps: KeyboardReactInterface["options"], props: KeyboardReactInterface["options"]) => string[];
