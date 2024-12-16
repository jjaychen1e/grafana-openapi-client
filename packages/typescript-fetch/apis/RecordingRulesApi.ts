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
  PrometheusRemoteWriteTargetJSON,
  RecordingRuleJSON,
  SuccessResponseBody,
} from '../models/index';
import {
    ErrorResponseBodyFromJSON,
    ErrorResponseBodyToJSON,
    PrometheusRemoteWriteTargetJSONFromJSON,
    PrometheusRemoteWriteTargetJSONToJSON,
    RecordingRuleJSONFromJSON,
    RecordingRuleJSONToJSON,
    SuccessResponseBodyFromJSON,
    SuccessResponseBodyToJSON,
} from '../models/index';

export interface RecordingRulesApiCreateRecordingRuleRequest {
    body: RecordingRuleJSON;
}

export interface RecordingRulesApiCreateRecordingRuleWriteTargetRequest {
    body: PrometheusRemoteWriteTargetJSON;
}

export interface RecordingRulesApiDeleteRecordingRuleRequest {
    recordingRuleID: number;
}

export interface RecordingRulesApiTestCreateRecordingRuleRequest {
    body: RecordingRuleJSON;
}

export interface RecordingRulesApiUpdateRecordingRuleRequest {
    body: RecordingRuleJSON;
}

/**
 * 
 */
export class RecordingRulesApi extends runtime.BaseAPI {

    /**
     * Create a recording rule that is then registered and started.
     */
    async createRecordingRuleRaw(requestParameters: RecordingRulesApiCreateRecordingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RecordingRuleJSON>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling createRecordingRule().'
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
            path: `/recording-rules`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RecordingRuleJSONToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecordingRuleJSONFromJSON(jsonValue));
    }

    /**
     * Create a recording rule that is then registered and started.
     */
    async createRecordingRule(requestParameters: RecordingRulesApiCreateRecordingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RecordingRuleJSON> {
        const response = await this.createRecordingRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * It returns a 422 if there is not an existing prometheus data source configured.
     * Create a remote write target.
     */
    async createRecordingRuleWriteTargetRaw(requestParameters: RecordingRulesApiCreateRecordingRuleWriteTargetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PrometheusRemoteWriteTargetJSON>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling createRecordingRuleWriteTarget().'
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
            path: `/recording-rules/writer`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PrometheusRemoteWriteTargetJSONToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PrometheusRemoteWriteTargetJSONFromJSON(jsonValue));
    }

    /**
     * It returns a 422 if there is not an existing prometheus data source configured.
     * Create a remote write target.
     */
    async createRecordingRuleWriteTarget(requestParameters: RecordingRulesApiCreateRecordingRuleWriteTargetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PrometheusRemoteWriteTargetJSON> {
        const response = await this.createRecordingRuleWriteTargetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete removes the rule from the registry and stops it.
     */
    async deleteRecordingRuleRaw(requestParameters: RecordingRulesApiDeleteRecordingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        if (requestParameters['recordingRuleID'] == null) {
            throw new runtime.RequiredError(
                'recordingRuleID',
                'Required parameter "recordingRuleID" was null or undefined when calling deleteRecordingRule().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/recording-rules/{recordingRuleID}`.replace(`{${"recordingRuleID"}}`, encodeURIComponent(String(requestParameters['recordingRuleID']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * Delete removes the rule from the registry and stops it.
     */
    async deleteRecordingRule(requestParameters: RecordingRulesApiDeleteRecordingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.deleteRecordingRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete the remote write target.
     */
    async deleteRecordingRuleWriteTargetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/recording-rules/writer`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * Delete the remote write target.
     */
    async deleteRecordingRuleWriteTarget(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.deleteRecordingRuleWriteTargetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Return the prometheus remote write target.
     */
    async getRecordingRuleWriteTargetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PrometheusRemoteWriteTargetJSON>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/recording-rules/writer`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PrometheusRemoteWriteTargetJSONFromJSON(jsonValue));
    }

    /**
     * Return the prometheus remote write target.
     */
    async getRecordingRuleWriteTarget(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PrometheusRemoteWriteTargetJSON> {
        const response = await this.getRecordingRuleWriteTargetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Lists all rules in the database: active or deleted.
     */
    async listRecordingRulesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RecordingRuleJSON>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/recording-rules`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RecordingRuleJSONFromJSON));
    }

    /**
     * Lists all rules in the database: active or deleted.
     */
    async listRecordingRules(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RecordingRuleJSON>> {
        const response = await this.listRecordingRulesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Test a recording rule.
     */
    async testCreateRecordingRuleRaw(requestParameters: RecordingRulesApiTestCreateRecordingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling testCreateRecordingRule().'
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
            path: `/recording-rules/test`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RecordingRuleJSONToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * Test a recording rule.
     */
    async testCreateRecordingRule(requestParameters: RecordingRulesApiTestCreateRecordingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.testCreateRecordingRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the active status of a rule.
     */
    async updateRecordingRuleRaw(requestParameters: RecordingRulesApiUpdateRecordingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RecordingRuleJSON>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling updateRecordingRule().'
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
            path: `/recording-rules`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RecordingRuleJSONToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecordingRuleJSONFromJSON(jsonValue));
    }

    /**
     * Update the active status of a rule.
     */
    async updateRecordingRule(requestParameters: RecordingRulesApiUpdateRecordingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RecordingRuleJSON> {
        const response = await this.updateRecordingRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
