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
  ListAllProvidersSettings200ResponseInner,
  SuccessResponseBody,
  UpdateProviderSettingsRequest,
} from '../models/index';
import {
    ErrorResponseBodyFromJSON,
    ErrorResponseBodyToJSON,
    ListAllProvidersSettings200ResponseInnerFromJSON,
    ListAllProvidersSettings200ResponseInnerToJSON,
    SuccessResponseBodyFromJSON,
    SuccessResponseBodyToJSON,
    UpdateProviderSettingsRequestFromJSON,
    UpdateProviderSettingsRequestToJSON,
} from '../models/index';

export interface SsoSettingsApiGetProviderSettingsRequest {
    key: string;
}

export interface SsoSettingsApiRemoveProviderSettingsRequest {
    key: string;
}

export interface SsoSettingsApiUpdateProviderSettingsOperationRequest {
    key: string;
    body: UpdateProviderSettingsRequest;
}

/**
 * 
 */
export class SsoSettingsApi extends runtime.BaseAPI {

    /**
     * You need to have a permission with action `settings:read` with scope `settings:auth.<provider>:*`.
     * Get an SSO Settings entry by Key
     */
    async getProviderSettingsRaw(requestParameters: SsoSettingsApiGetProviderSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListAllProvidersSettings200ResponseInner>> {
        if (requestParameters['key'] == null) {
            throw new runtime.RequiredError(
                'key',
                'Required parameter "key" was null or undefined when calling getProviderSettings().'
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
            path: `/v1/sso-settings/{key}`.replace(`{${"key"}}`, encodeURIComponent(String(requestParameters['key']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListAllProvidersSettings200ResponseInnerFromJSON(jsonValue));
    }

    /**
     * You need to have a permission with action `settings:read` with scope `settings:auth.<provider>:*`.
     * Get an SSO Settings entry by Key
     */
    async getProviderSettings(requestParameters: SsoSettingsApiGetProviderSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListAllProvidersSettings200ResponseInner> {
        const response = await this.getProviderSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * You need to have a permission with action `settings:read` with scope `settings:auth.<provider>:*`.
     * List all SSO Settings entries
     */
    async listAllProvidersSettingsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ListAllProvidersSettings200ResponseInner>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v1/sso-settings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ListAllProvidersSettings200ResponseInnerFromJSON));
    }

    /**
     * You need to have a permission with action `settings:read` with scope `settings:auth.<provider>:*`.
     * List all SSO Settings entries
     */
    async listAllProvidersSettings(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ListAllProvidersSettings200ResponseInner>> {
        const response = await this.listAllProvidersSettingsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Removes the SSO Settings for a provider.  You need to have a permission with action `settings:write` and scope `settings:auth.<provider>:*`.
     * Remove SSO Settings
     */
    async removeProviderSettingsRaw(requestParameters: SsoSettingsApiRemoveProviderSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        if (requestParameters['key'] == null) {
            throw new runtime.RequiredError(
                'key',
                'Required parameter "key" was null or undefined when calling removeProviderSettings().'
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
            path: `/v1/sso-settings/{key}`.replace(`{${"key"}}`, encodeURIComponent(String(requestParameters['key']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * Removes the SSO Settings for a provider.  You need to have a permission with action `settings:write` and scope `settings:auth.<provider>:*`.
     * Remove SSO Settings
     */
    async removeProviderSettings(requestParameters: SsoSettingsApiRemoveProviderSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.removeProviderSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Inserts or updates the SSO Settings for a provider.  You need to have a permission with action `settings:write` and scope `settings:auth.<provider>:*`.
     * Update SSO Settings
     */
    async updateProviderSettingsRaw(requestParameters: SsoSettingsApiUpdateProviderSettingsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        if (requestParameters['key'] == null) {
            throw new runtime.RequiredError(
                'key',
                'Required parameter "key" was null or undefined when calling updateProviderSettings().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling updateProviderSettings().'
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
            path: `/v1/sso-settings/{key}`.replace(`{${"key"}}`, encodeURIComponent(String(requestParameters['key']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateProviderSettingsRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * Inserts or updates the SSO Settings for a provider.  You need to have a permission with action `settings:write` and scope `settings:auth.<provider>:*`.
     * Update SSO Settings
     */
    async updateProviderSettings(requestParameters: SsoSettingsApiUpdateProviderSettingsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.updateProviderSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
