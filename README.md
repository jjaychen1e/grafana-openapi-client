# Grafana OpenAPI Client

TypeScript clients for the Grafana HTTP API, automatically generated from Grafana's OpenAPI specification using [OpenAPI Generator](https://openapi-generator.tech/).

> **Disclaimer**: **This is not an official Grafana HTTP client**. Since Grafana does not provide the official HTTP client for JavaScript / TypeScript, I created these packages for the community to use. If you need more packages for specific versions, please let me know.

## Packages

This repository contains multiple packages:

- `@grafana-openapi-client/axios` - Axios-based HTTP client
- `@grafana-openapi-client/fetch` - Fetch-based HTTP client

The version number is the Grafana version that the client is generated from.

You can check the source code and the README for each package from [Releases](https://github.com/jjaychen1e/grafana-openapi-client/releases), or just check the `packages` folder in the corresponding branch (e.g., [release/11.4.0](https://github.com/jjaychen1e/grafana-openapi-client/tree/release/11.4.0)).

## Installation

Choose your preferred HTTP client implementation (`axios` or `fetch`):

Using npm:

```bash
npm install @grafana-openapi-client/axios@11.0.0
# or
npm install @grafana-openapi-client/fetch@11.0.0
```

Using yarn:

```bash
yarn add @grafana-openapi-client/axios@11.0.0
# or
yarn add @grafana-openapi-client/fetch@11.0.0
```

Using pnpm:

```bash
pnpm add @grafana-openapi-client/axios@11.0.0
# or
pnpm add @grafana-openapi-client/fetch@11.0.0
```

## Development

### Prerequisites

- Node.js
- Yarn
- GitHub CLI (for releases)

### Commands

- `yarn generate <version>`: Generate API clients for a specific Grafana version.
  - For example, `yarn generate 11.0.0` will generate clients for Grafana 11.0.0.
- `yarn build`: Build packages in the `packages` folder, after generating the clients.
- `yarn release <version> [package_name]`: Create a new release.
  - For example, `yarn release 11.0.0` will create a new release for Grafana 11.0.0.

Check helper scripts under [scripts](https://github.com/jjaychen1e/grafana-openapi-client/tree/main/scripts) for more details.

## License

Apache License 2.0 - See [LICENSE](./LICENSE) for more details.
