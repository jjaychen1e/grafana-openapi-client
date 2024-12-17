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
  CalculateDashboardDiffRequest,
  DashboardFullWithMeta,
  DashboardTagCloudItem,
  DeleteDashboardByUID200Response,
  ErrorResponseBody,
  GetHomeDashboardResponse,
  ImportDashboardRequest,
  ImportDashboardResponse,
  PostDashboard200Response,
  RestoreDeletedDashboardCommand,
  SaveDashboardCommand,
} from '../models/index';
import {
    CalculateDashboardDiffRequestFromJSON,
    CalculateDashboardDiffRequestToJSON,
    DashboardFullWithMetaFromJSON,
    DashboardFullWithMetaToJSON,
    DashboardTagCloudItemFromJSON,
    DashboardTagCloudItemToJSON,
    DeleteDashboardByUID200ResponseFromJSON,
    DeleteDashboardByUID200ResponseToJSON,
    ErrorResponseBodyFromJSON,
    ErrorResponseBodyToJSON,
    GetHomeDashboardResponseFromJSON,
    GetHomeDashboardResponseToJSON,
    ImportDashboardRequestFromJSON,
    ImportDashboardRequestToJSON,
    ImportDashboardResponseFromJSON,
    ImportDashboardResponseToJSON,
    PostDashboard200ResponseFromJSON,
    PostDashboard200ResponseToJSON,
    RestoreDeletedDashboardCommandFromJSON,
    RestoreDeletedDashboardCommandToJSON,
    SaveDashboardCommandFromJSON,
    SaveDashboardCommandToJSON,
} from '../models/index';

export interface DashboardsApiCalculateDashboardDiffOperationRequest {
    body: CalculateDashboardDiffRequest;
}

export interface DashboardsApiDeleteDashboardByUIDRequest {
    uid: string;
}

export interface DashboardsApiGetDashboardByUIDRequest {
    uid: string;
}

export interface DashboardsApiHardDeleteDashboardByUIDRequest {
    uid: string;
}

export interface DashboardsApiImportDashboardOperationRequest {
    body: ImportDashboardRequest;
}

export interface DashboardsApiPostDashboardRequest {
    body: SaveDashboardCommand;
}

export interface DashboardsApiRestoreDeletedDashboardByUIDRequest {
    uid: string;
    body: RestoreDeletedDashboardCommand;
}

/**
 * 
 */
export class DashboardsApi extends runtime.BaseAPI {

    /**
     * Perform diff on two dashboards.
     */
    async calculateDashboardDiffRaw(requestParameters: DashboardsApiCalculateDashboardDiffOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<number>>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling calculateDashboardDiff().'
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
            path: `/dashboards/calculate-diff`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CalculateDashboardDiffRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Perform diff on two dashboards.
     */
    async calculateDashboardDiff(requestParameters: DashboardsApiCalculateDashboardDiffOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<number>> {
        const response = await this.calculateDashboardDiffRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Will delete the dashboard given the specified unique identifier (uid).
     * Delete dashboard by uid.
     */
    async deleteDashboardByUIDRaw(requestParameters: DashboardsApiDeleteDashboardByUIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteDashboardByUID200Response>> {
        if (requestParameters['uid'] == null) {
            throw new runtime.RequiredError(
                'uid',
                'Required parameter "uid" was null or undefined when calling deleteDashboardByUID().'
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
            path: `/dashboards/uid/{uid}`.replace(`{${"uid"}}`, encodeURIComponent(String(requestParameters['uid']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteDashboardByUID200ResponseFromJSON(jsonValue));
    }

    /**
     * Will delete the dashboard given the specified unique identifier (uid).
     * Delete dashboard by uid.
     */
    async deleteDashboardByUID(requestParameters: DashboardsApiDeleteDashboardByUIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteDashboardByUID200Response> {
        const response = await this.deleteDashboardByUIDRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Will return the dashboard given the dashboard unique identifier (uid).
     * Get dashboard by uid.
     */
    async getDashboardByUIDRaw(requestParameters: DashboardsApiGetDashboardByUIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DashboardFullWithMeta>> {
        if (requestParameters['uid'] == null) {
            throw new runtime.RequiredError(
                'uid',
                'Required parameter "uid" was null or undefined when calling getDashboardByUID().'
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
            path: `/dashboards/uid/{uid}`.replace(`{${"uid"}}`, encodeURIComponent(String(requestParameters['uid']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DashboardFullWithMetaFromJSON(jsonValue));
    }

    /**
     * Will return the dashboard given the dashboard unique identifier (uid).
     * Get dashboard by uid.
     */
    async getDashboardByUID(requestParameters: DashboardsApiGetDashboardByUIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DashboardFullWithMeta> {
        const response = await this.getDashboardByUIDRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all dashboards tags of an organisation.
     */
    async getDashboardTagsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<DashboardTagCloudItem>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/dashboards/tags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DashboardTagCloudItemFromJSON));
    }

    /**
     * Get all dashboards tags of an organisation.
     */
    async getDashboardTags(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<DashboardTagCloudItem>> {
        const response = await this.getDashboardTagsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get home dashboard.
     */
    async getHomeDashboardRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetHomeDashboardResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/dashboards/home`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetHomeDashboardResponseFromJSON(jsonValue));
    }

    /**
     * Get home dashboard.
     */
    async getHomeDashboard(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetHomeDashboardResponse> {
        const response = await this.getHomeDashboardRaw(initOverrides);
        return await response.value();
    }

    /**
     * Will delete the dashboard given the specified unique identifier (uid).
     * Hard delete dashboard by uid.
     */
    async hardDeleteDashboardByUIDRaw(requestParameters: DashboardsApiHardDeleteDashboardByUIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteDashboardByUID200Response>> {
        if (requestParameters['uid'] == null) {
            throw new runtime.RequiredError(
                'uid',
                'Required parameter "uid" was null or undefined when calling hardDeleteDashboardByUID().'
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
            path: `/dashboards/uid/{uid}/trash`.replace(`{${"uid"}}`, encodeURIComponent(String(requestParameters['uid']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteDashboardByUID200ResponseFromJSON(jsonValue));
    }

    /**
     * Will delete the dashboard given the specified unique identifier (uid).
     * Hard delete dashboard by uid.
     */
    async hardDeleteDashboardByUID(requestParameters: DashboardsApiHardDeleteDashboardByUIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteDashboardByUID200Response> {
        const response = await this.hardDeleteDashboardByUIDRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Import dashboard.
     */
    async importDashboardRaw(requestParameters: DashboardsApiImportDashboardOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ImportDashboardResponse>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling importDashboard().'
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
            path: `/dashboards/import`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ImportDashboardRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ImportDashboardResponseFromJSON(jsonValue));
    }

    /**
     * Import dashboard.
     */
    async importDashboard(requestParameters: DashboardsApiImportDashboardOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImportDashboardResponse> {
        const response = await this.importDashboardRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new dashboard or updates an existing dashboard. Note: This endpoint is not intended for creating folders, use `POST /api/folders` for that.
     * Create / Update dashboard
     */
    async postDashboardRaw(requestParameters: DashboardsApiPostDashboardRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostDashboard200Response>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling postDashboard().'
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
            path: `/dashboards/db`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SaveDashboardCommandToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostDashboard200ResponseFromJSON(jsonValue));
    }

    /**
     * Creates a new dashboard or updates an existing dashboard. Note: This endpoint is not intended for creating folders, use `POST /api/folders` for that.
     * Create / Update dashboard
     */
    async postDashboard(requestParameters: DashboardsApiPostDashboardRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostDashboard200Response> {
        const response = await this.postDashboardRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Restore a dashboard to a given dashboard version using UID.
     */
    async restoreDeletedDashboardByUIDRaw(requestParameters: DashboardsApiRestoreDeletedDashboardByUIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostDashboard200Response>> {
        if (requestParameters['uid'] == null) {
            throw new runtime.RequiredError(
                'uid',
                'Required parameter "uid" was null or undefined when calling restoreDeletedDashboardByUID().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling restoreDeletedDashboardByUID().'
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
            path: `/dashboards/uid/{uid}/trash`.replace(`{${"uid"}}`, encodeURIComponent(String(requestParameters['uid']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: RestoreDeletedDashboardCommandToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostDashboard200ResponseFromJSON(jsonValue));
    }

    /**
     * Restore a dashboard to a given dashboard version using UID.
     */
    async restoreDeletedDashboardByUID(requestParameters: DashboardsApiRestoreDeletedDashboardByUIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostDashboard200Response> {
        const response = await this.restoreDeletedDashboardByUIDRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
