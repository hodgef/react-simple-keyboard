var fs = require('fs');
var dts = require('dts-bundle');
 
dts.bundle({
    name: 'simple-keyboard',
    main: 'node_modules/simple-keyboard/build/index.d.ts',
    out: '../../../src/lib/interfaces.d.ts',
    outputAsModuleFolder: true
});

let keyboardInterface = fs.readFileSync('src/lib/interfaces.d.ts', 'utf8');
keyboardInterface = keyboardInterface.replace(/export default (.*);/g, "");
keyboardInterface = keyboardInterface.replace(/import (.*);/g, "");
keyboardInterface = keyboardInterface.replace(/class (.*) {/g, "export interface $1 {");
keyboardInterface = keyboardInterface.replace(/static (.*);/g, "");
keyboardInterface = keyboardInterface.replace(/constructor\((.*)\);/g, "constructor: ($1) => any");
keyboardInterface = keyboardInterface.replace(/\n\s*\n/g, '\n');
keyboardInterface = `
export interface KeyboardReactInterface extends SimpleKeyboard {
    options: SimpleKeyboard["options"] & {
      // eslint-disable-next-line no-unused-vars
      keyboardRef?: (r: any) => void;
    };
  }  
` + keyboardInterface;
fs.writeFileSync('src/lib/interfaces.d.ts', keyboardInterface);