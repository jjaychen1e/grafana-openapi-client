# @grafana-openapi-client/fetch-client

TypeScript OpenAPI client for Grafana HTTP API using fetch.

## Installation

Using npm:

```bash
npm install @grafana-openapi-client/fetch-client
```

Using yarn:

```bash
yarn add @grafana-openapi-client/fetch-client
```

Using pnpm:

```bash
pnpm add @grafana-openapi-client/fetch-client
```

## Usage

First, create a configuration object with your Grafana server base path and provide authentication details:

```typescript
interface ConfigurationParameters {
  basePath?: string;
  fetchApi?: FetchAPI;
  middleware?: Middleware[];
  queryParamsStringify?: (params: HTTPQuery) => string;
  username?: string;
  password?: string;
  apiKey?:
    | string
    | Promise<string>
    | ((name: string) => string | Promise<string>);
  accessToken?:
    | string
    | Promise<string>
    | ((name?: string, scopes?: string[]) => string | Promise<string>);
  headers?: HTTPHeaders;
  credentials?: RequestCredentials;
}
```

Note how `apiKey` is handled in the generated code:

```typescript
// ...
get apiKey(): ((name: string) => string | Promise<string>) | undefined {
    const apiKey = this.configuration.apiKey;
    if (apiKey) {
        return typeof apiKey === 'function' ? apiKey : () => apiKey;
    }
    return undefined;
}

// ...
if (this.configuration && this.configuration.apiKey) {
  headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
}
```

We need to use `Bearer your-api-key-here` if `apiKey` is a string:

```typescript
import {
  Configuration,
  DashboardsApi,
  SearchApi,
  SearchTypeEnum,
} from "@grafana-openapi-client/fetch-client";

const config = new Configuration({
  basePath: "http://localhost:3000/api", // Your Grafana server API URL
  apiKey: "Bearer your-api-key-here", // Replace with your API key
});
```

And then you can use different APIs:

```typescript
// Initialize the Dashboards API client
const dashboardsApi = new DashboardsApi(config);

// Example function to get a dashboard by UID
async function getDashboard(uid: string) {
  try {
    const response = await dashboardsApi.getDashboardByUID({ uid });
    console.log("Dashboard:", response);
    return response;
  } catch (error) {
    console.error("Error fetching dashboard:", error);
    throw error;
  }
}
```

## Documentation

For more information about the Grafana HTTP API, please visit the [official Grafana API documentation](https://grafana.com/docs/grafana/latest/developers/http_api/). Also refer to the generated code for more details.
