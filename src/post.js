Module['postRun'] = [];
Module['postRun'].push(function () {
    const output = FS.readFile('output.tap');
    Module['resolve'](output);
});
