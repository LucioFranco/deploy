var should = require('should');
var parser = require('../lib/parser');

describe('Parser', function() {
  it('Correct config parsed', function () {
    var config = parser.parseConfig('test/configs/default.yaml');
    config.should.be.an.Object;
    config.should.have.properties('config', 'servers', 'pre_deploy', 'pre_deploy_each', 'deploy', 'post_deploy');
  });
});
