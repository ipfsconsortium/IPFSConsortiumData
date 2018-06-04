const expect = require('chai').expect;
const mainspec = require('../spec/metadata-spec.json');
const Validator = require('jsonschema').Validator;

describe('JSON schema tests()', function() {

	let v = new Validator();

	it('a parameters file should be validated', () => {
		const instance = require('../examples/metadata-parameters.json');
		let validation = v.validate(instance, mainspec);
		expect(validation.errors.length).to.equal(0);
	});
	it('a manifest file should be validated', function() {
		const instance = require('../examples/metadata-manifest.json');
		let validation = v.validate(instance, mainspec);
		expect(validation.errors.length).to.equal(0);
	});
	it('a addmember file should be validated', function() {
		const instance = require('../examples/metadata-addmember.json');
		let validation = v.validate(instance, mainspec);
		expect(validation.errors.length).to.equal(0);
	});
	it('a removemember file should be validated', function() {
		const instance = require('../examples/metadata-removemember.json');
		let validation = v.validate(instance, mainspec);
		expect(validation.errors.length).to.equal(0);
	});
});
