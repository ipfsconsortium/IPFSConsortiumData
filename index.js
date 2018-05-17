const mainspec = require('./spec/metadata-spec.json');
const Validator = require('jsonschema').Validator;

module.exports = {
	validate: (instance) => {
		let v = new Validator();
		return v.validate(instance, mainspec);
	},
};

