# Phyllo Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/phyllo)](https://www.npmjs.com/package/@fern-api/phyllo)

## Documentation

API documentation is available at <https://docs.getphyllo.com/>.

## Usage

```typescript
import { PhylloConnectApi } from "@fern-api/phyllo";

const clientId = process.env.PHYLLO_CLIENT_ID;
if (clientId == null) {
  console.error("PHYLLO_CLIENT_ID is not set in your environment.");
  return;
}

const phylloSecret = process.env.PHYLLO_SECRET;
if (phylloSecret == null) {
  console.error("PHYLLO_SECRET is not set in your environment.");
  return;
}

const phyllo = new PhylloConnectApi.Client({
  _origin: "api.getphyllo.com",
  _credentials: {
    username: clientId,
    password: phylloSecret
  }
});

const createResponse = await phyllo.connect.createUser({
  name: "myName",
  externalId: "user_abc123"
});

if (!createResponse.ok) {
  console.error("Failed to create user", createResponse.error)
} else {
  console.log(`Created user! The user ID is ${createResponse.body.id}`);
}
```

## Sample app

Check out the [sample app](.sample-app/app.ts) which consumes this SDK!

```bash
export PHYLLO_CLIENT_ID=...
export PHYLLO_SECRET=...

cd .sample-app
yarn install
yarn start
```

## SDK Examples

Below are a few examples of how to use the SDK to hit different endpoints. Check out our [API Reference](https://docs.getphyllo.com/) to see all of our endpoints.

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-phyllo/phyllo-node) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
