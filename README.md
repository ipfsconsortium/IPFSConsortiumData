# IPFSConsortiumData

This repo contains the JSON schemas for the IPFS Pinning Consortium metadata

[![Build Status](https://travis-ci.org/ipfsconsortium/IPFSConsortiumData.svg?branch=master)](https://travis-ci.org/ipfsconsortium/IPFSConsortiumData)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


# Install

`npm install ipfsconsortiumdata`

# Usage

## NodeJS

```
const ipfsconsortiumdata = require('ipfsconsortiumdata');

const s = JSON.parse(<your JSON string>);

ipfsconsortiumdata.validate(s)
	.then(() => {
		// file is valid
	})
	.catch((e) => {
		// file is invalid - e contains the validation errors
	});

```

## Command line

When installing this module you will get a command line utility `ipfsconsortiumvalidate` to validate a JSON file.

```
ipfsconsortiumvalidate examples/metadata-consortium.json
```

This will exit with 0 if the file is valid - 1 if the file is invalid and will print the validation errors on stdout.


# Notes

The schema's are located in `spec`

Examples can be found in `examples`




