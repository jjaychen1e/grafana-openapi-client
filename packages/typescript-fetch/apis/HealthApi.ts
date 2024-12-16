/* tslint:disable */
/* eslint-disable */
/**
 * Grafana HTTP API.
 * The Grafana backend exposes an HTTP API, the same API is used by the frontend to do everything from saving dashboards, creating users and updating data sources.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: hello@grafana.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ErrorResponseBody,
  HealthResponse,
} from '../models/index';
import {
    ErrorResponseBodyFromJSON,
    ErrorResponseBodyToJSON,
    HealthResponseFromJSON,
    HealthResponseToJSON,
} from '../models/index';

/**
 * 
 */
export class HealthApi extends runtime.BaseAPI {

    /**
     * apiHealthHandler will return ok if Grafana\'s web server is running and it can access the database. If the database cannot be accessed it will return http status code 503.
     */
    async getHealthRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HealthResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/health`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HealthResponseFromJSON(jsonValue));
    }

    /**
     * apiHealthHandler will return ok if Grafana\'s web server is running and it can access the database. If the database cannot be accessed it will return http status code 503.
     */
    async getHealth(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HealthResponse> {
        const response = await this.getHealthRaw(initOverrides);
        return await response.value();
    }

}
