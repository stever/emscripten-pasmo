// noinspection JSUnresolvedVariable

Module['postRun'] = [];

/**
 * Ensures that a required file is always created.
 * This is done by open and closing a file in append mode.
 * @param filename
 */
function ensureFileExists(filename) {
    const file = FS.open(filename, 'a');
    FS.close(file);
}

Module['postRun'].push(function () {
    const tapFilename = 'output.tap';
    ensureFileExists(tapFilename);
    const tap = FS.readFile(tapFilename);

    // Command is successful if the output has content, fails otherwise.
    if (tap.length > 0) {
        Module['resolve'](tap);
    } else {
        const out = Module['out'];
        Module['reject'](out);
    }
});
