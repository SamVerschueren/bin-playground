'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');

const url = `https://raw.githubusercontent.com/SamVerschueren/${pkg.name}/v${pkg.version}/vendor/`;

module.exports = new BinWrapper()
	.src(url + 'macos', 'darwin')
	.dest(path.join(__dirname, '../vendor'))
	.use('bin/chrome');
