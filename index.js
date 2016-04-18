/* environment: node */
var Reporter = require('ember-cli-dependency-checker//lib/reporter');
var DC = require ('ember-cli-dependency-checker/lib/dependency-checker');
var existsSync = require('exists-sync');
var assign = require('lodash/assign');
var path = require('path');
var process = require('process');
var appDir = process.cwd();
// Simulates an ember-cli-project
var project = {
  root: appDir,
  dependencies: function() {
    var packagePath = path.join(this.root, 'package.json');
    var pkg = (existsSync(packagePath)) ? require(packagePath) : {};
    return assign({}, pkg['devDependencies'], pkg['dependencies']);
  },
  bowerDependencies: function() {
    var bowerPath = path.join(this.root, 'bower.json');
    var bower = (existsSync(bowerPath)) ? require(bowerPath) : {};
    return assign({}, bower['devDependencies'], bower['dependencies']);
  }
};

var reporter = new Reporter();
var dependencyChecker = new DC(project, reporter);

module.exports = function () {
  dependencyChecker.checkDependencies();
};
