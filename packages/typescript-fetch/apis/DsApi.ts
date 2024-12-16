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
  MetricRequest,
  QueryDataResponse,
} from '../models/index';
import {
    ErrorResponseBodyFromJSON,
    ErrorResponseBodyToJSON,
    MetricRequestFromJSON,
    MetricRequestToJSON,
    QueryDataResponseFromJSON,
    QueryDataResponseToJSON,
} from '../models/index';

export interface DsApiQueryMetricsWithExpressionsRequest {
    body: MetricRequest;
}

/**
 * 
 */
export class DsApi extends runtime.BaseAPI {

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled you need to have a permission with action: `datasources:query`.
     * DataSource query metrics with expressions.
     */
    async queryMetricsWithExpressionsRaw(requestParameters: DsApiQueryMetricsWithExpressionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryDataResponse>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling queryMetricsWithExpressions().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/ds/query`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MetricRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryDataResponseFromJSON(jsonValue));
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled you need to have a permission with action: `datasources:query`.
     * DataSource query metrics with expressions.
     */
    async queryMetricsWithExpressions(requestParameters: DsApiQueryMetricsWithExpressionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryDataResponse> {
        const response = await this.queryMetricsWithExpressionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
