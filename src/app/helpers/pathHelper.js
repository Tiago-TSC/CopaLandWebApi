const path = require('path');

exports.templatesPath = path.resolve(
  path.dirname(process.mainModule.filename),
  'resources',
  'templates',
);
exports.tmpPath = path.resolve(path.dirname(process.mainModule.filename), '..', 'tmp');
