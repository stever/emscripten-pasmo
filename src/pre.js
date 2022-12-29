// noinspection JSUnresolvedVariable

Module['preRun'] = [];

Module['preRun'].push(function () {

    // Write the required assembly input file.
    FS.writeFile('input.asm', Module['asmInput']);

    // Write the binary input file, when used.
    // NOTE: The bin2tap function will set this property.
    if (Module.hasOwnProperty('binInput')) {
        FS.writeFile('input.bin', Module['binInput']);
    }
});
