/* environment: node */
var Reporter = require('ember-cli-dependency-checker//lib/reporter');
var DC = require ('ember-cli-dependency-checker/lib/dependency-checker');
var existsSync = require('exists-sync');
var assign = require('lodash/assign');
var path = require('path');

// Simulates an ember-cli-project
var project = {
  root: './',
  dependencies: function(pkg, excludeDevDeps) {
    pkg = pkg || this.pkg || {};

    var devDependencies = pkg['devDependencies'];
    if (excludeDevDeps) {
      devDependencies = {};
    }

    return assign({}, devDependencies, pkg['dependencies']);
  },
  bowerDependencies: function(bower) {
    if (!bower) {
      var bowerPath = path.join(this.root, 'bower.json');
      bower = (existsSync(bowerPath)) ? require(bowerPath) : {};
    }
    return assign({}, bower['devDependencies'], bower['dependencies']);
  }
};
var reporter = new Reporter();
var dependencyChecker = new DC(project, reporter);

module.exports.check = function () {
  dependencyChecker.checkDependencies();
};
