const Module = require('./dist/pasmo.js');

/**
 * Compiles a .TAP file given assembly source input.
 * @param asmInput
 * @returns {Promise<function>}
 */
export default function compile(asmInput) {

    // Prepare args for the pasmo command.
    const args = [];
    // args.push('-v');
    args.push('--tapbas');
    args.push('input.asm');
    args.push('output.tap');

    // Collect output.
    const out = [];

    // Call the pasmo module with data for command.
    return new Promise((resolve, reject) => {
        Module({
            arguments: args,
            asmInput,
            out,
            resolve,
            reject,
            print: (text) => {
                // console.log(`[stdout] ${text}`);
                out.push({type: 'out', text});
            },
            printErr: (text) => {
                // console.log(`[stderr] ${text}`);
                out.push({type: 'err', text});
            }
        });
    });
}

/**
 * Compiles a .TAP file by adding a loader (in assembly) given a binary input.
 * @param binInput
 * @returns {Promise<function>}
 */
export function bin2tap(binInput) {

    // Prepare args for the pasmo command.
    const args = [];
    // args.push('-v');
    args.push('--tapbas');
    args.push('input.asm');
    args.push('output.tap');

    // Collect output.
    const out = [];

    // Assembler code to prepare the program.
    const asmInput = `ORG 0x8000
INCBIN input.bin
END 0x8000`;

    // Call the pasmo module with data for command.
    return new Promise((resolve, reject) => {
        Module({
            arguments: args,
            asmInput,
            binInput,
            out,
            resolve,
            reject,
            print: (text) => {
                // console.log(`[stdout] ${text}`);
                out.push({type: 'out', text});
            },
            printErr: (text) => {
                // console.log(`[stderr] ${text}`);
                out.push({type: 'err', text});
            }
        });
    });
}
