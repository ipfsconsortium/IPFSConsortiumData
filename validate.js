#!/usr/bin/env node

const validator = require('./index');
const path = require('path');

if (!process.argv[2]) {
	console.log('Usage: ' + path.basename(process.argv[1]) + ' <filename>');
	console.log('.      Validate a JSON file against the current IPFSConsortium schema');
}

const input = require(path.resolve('.', process.argv[2]));
validator.validate(input).then(() => {
	console.log('input is valid');
	process.exit(0);
}).catch((e) => {
	console.log('invalid file', e.message);
	process.exit(1);
});
