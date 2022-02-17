const Module = require('./dist/pasmo.js')

module.exports = input => {
    return new Promise((resolve, reject) => {
        Module({
            'input': input,
            'resolve': resolve,
            'arguments': ['--tapbas', 'input.asm', 'output.tap']
        });
    });
}
