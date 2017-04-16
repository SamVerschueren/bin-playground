#!/usr/bin/env node
'use strict';
const execa = require('execa');
const chrome = require('./');

const input = process.argv.slice(2);

execa(chrome, input, {stdio: 'inherit'})
	.catch(err => {
		console.error(err);
		process.exit(-1);
	});
