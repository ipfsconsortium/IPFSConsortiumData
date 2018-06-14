const expect = require('chai').expect;
const mainspec = require('../spec/metadata-spec.json');
const Validator = require('jsonschema').Validator;

describe('JSON schema tests()', function() {
	let v = new Validator();

	it('a consortium file should be validated', () => {
		const instance = require('../examples/metadata-consortium.json');
		let validation = v.validate(instance, mainspec);
		expect(validation.errors, validation.errors).to.be.an('array').that.is.empty;
	});
	it('a manifest file should be validated', function() {
		const instance = require('../examples/metadata-manifest.json');
		let validation = v.validate(instance, mainspec);
		expect(validation.errors, validation.errors).to.be.an('array').that.is.empty;
	});
});
