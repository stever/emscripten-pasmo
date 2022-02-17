Module['postRun'] = [];
Module['postRun'].push(function() {
  var output = FS.readFile('output.tap');
  Module['resolve'](output);
});
