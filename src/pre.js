Module['preRun'] = [];
Module['preRun'].push(function () {

    // NOTE: Always using assembly input file.
    FS.writeFile('input.asm', Module['asmInput']);

    // NOTE: The bin2tap function will set this property.
    if (Module.hasOwnProperty('binInput')) {
        FS.writeFile('input.bin', Module['binInput']);
    }
});
