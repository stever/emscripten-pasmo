Module['preRun'] = [];
Module['preRun'].push(function() {
  FS.writeFile('input.asm', Module['input']);
});
