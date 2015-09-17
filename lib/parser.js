var yaml = require('js-yaml');
var fs   = require('fs');

exports.parseConfig = function (path) {
  try {
    var doc = yaml.safeLoad(fs.readFileSync(path, 'utf8'));
    return doc;
  } catch (e) {
    console.error(e);
  }
}
