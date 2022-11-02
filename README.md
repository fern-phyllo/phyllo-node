# Phyllo Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/phyllo)](https://www.npmjs.com/package/@fern-api/phyllo)

## Documentation

API documentation is available at <https://docs.getphyllo.com/>

## Usage

```typescript
import { PhylloConnectApiClient } from '@fern-api/phyllo';

const client = new PhylloConnectApiClient({
  environment: 'Production',
  auth: {
    credentials: {
      username: 'my-username',
      password: 'my-password',
    },
  },
});

const response = await client.connect.createUser({
  name: 'achintya-gupta',
  externalId: 'abc123',
});

console.log(
  'Received response from Phyllo!',
  JSON.stringify(response, undefined, 4)
);

```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-phyllo/phyllo-node) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
