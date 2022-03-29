const Module = require('./dist/pasmo.js')

module.exports = (input, print, printErr) => {
    return new Promise((resolve, reject) => {
        Module({
            'print': print,
            'printErr': printErr,
            'input': input,
            'resolve': resolve,
            'arguments': ['--tapbas', 'input.asm', 'output.tap']
        });
    });
}
