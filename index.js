const mainspec = require('./spec/metadata-spec.json');
const Validator = require('jsonschema').Validator;

module.exports = {
	validate: (instance) => {
		return new Promise((resolve, reject) => {
			let v = new Validator();
			let result = v.validate(instance, mainspec);
			if (result && result.errors.length === 0) {
				return resolve();
			}
			return reject(new Error(result.errors));
		});
	},
};
