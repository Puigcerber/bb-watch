'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Enable / Disable debug mode
 *
 * @type {Boolean}
 */
var debug = true;

/**
 * Default package name, used for packaging and importing
 *
 * @type {string}
 */
var packageName = 'package.zip';

var excludeExtentions = ['.zip'];

/**
 * Do you want to get notification spam? (its a joke)
 *
 * @type {Boolean}
 */
var notifications = true;

/**
 * Global messages
 *
 * @type {Object}
 */
var messages = {
  "START": "\n\n --- Now watching: " + process.cwd().split('/').pop(),
  "STOPPED": "\n --- Stopped watching...",
  "RESTART": "\n --- File change detected, running again..."
};

var port = '7777';

var welcome = ["Hello!", "Simple watcher to run bb-package && bb-import.", "Have a nice day!"];

exports.port = port;
exports.debug = debug;
exports.welcome = welcome;
exports.excludeExtentions = excludeExtentions;
exports.messages = messages;
exports.notifications = notifications;
exports.packageName = packageName;
exports['default'] = module.exports;
exports.default = module.exports;