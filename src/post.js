Module['postRun'] = [];
Module['postRun'].push(function() {
  var output = FS.readFile('output.tap'/*, { encoding: 'utf8' }*/);
  Module['resolve'](output);
});
