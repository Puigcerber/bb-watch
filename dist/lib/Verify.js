'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _tcpPing = require('tcp-ping');

var _tcpPing2 = _interopRequireDefault(_tcpPing);

var _Notify = require('./Notify');

var _Notify2 = _interopRequireDefault(_Notify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Verify that there is a model.xml present
 *
 * @return {boolean}
 */
var model = function model() {
	// only execute model.xml-check if not inside the src or prebuilt directory
	var basename = _path2.default.basename(process.cwd());
	if (basename == 'src' || basename == 'prebuilt') {
		return true;
	}

	if (!_fs2.default.existsSync(process.cwd() + '/model.xml')) {
		_Notify2.default.welcome();
		_Notify2.default.error('model.xml not found. Are you running the watcher from the correct folder? \n');
		return false;
	}

	return true;
};

/**
 * Verify is localhost:{Config.port} is running
 *
 * @return {void}
 */
var online = function online() {
	_tcpPing2.default.probe('127.0.0.1', Config.port, function (err, available) {
		if (!available) {
			_Notify2.default.offline();
			process.exit();
		}
	});
};

module.exports = {
	model: model,
	online: online
};