const expect = require('chai').expect;
const mainspec = require('../spec/metadata-spec.json');
const Validator = require('jsonschema').Validator;

describe('JSON schema tests()', function() {
	it('a manifest file should be validated', function() {
		const instance = require('../examples/metadata-manifest.json');

		let v = new Validator();
		let validation = v.validate(instance, mainspec);

		expect(validation.errors.length).to.equal(0);
	});
});
