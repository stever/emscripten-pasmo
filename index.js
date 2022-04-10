const Module = require('./dist/pasmo.js');

// TODO: Command error handling!

export default function compile(asmInput) {
    return new Promise((resolve/*, reject*/) => {
        Module({
            'print': console.log,
            'printErr': console.error,
            'asmInput': asmInput,
            'resolve': resolve,
            'arguments': ['--tapbas', 'input.asm', 'output.tap']
        });
    });
}

export function bin2tap(binInput) {
    const asmInput = `ORG 0x8000
INCBIN input.bin
END 0x8000`;
    return new Promise((resolve/*, reject*/) => {
        Module({
            'asmInput': asmInput,
            'binInput': binInput,
            'resolve': resolve,
            'arguments': ['--tapbas', 'input.asm', 'output.tap']
        });
    });
}
