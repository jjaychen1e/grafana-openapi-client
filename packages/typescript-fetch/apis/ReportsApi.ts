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


import * as runtime from '../runtime.js';
import type {
  CreateOrUpdateReport,
  CreateReport200Response,
  ErrorResponseBody,
  Report,
  ReportEmail,
  ReportSettings,
  SuccessResponseBody,
} from '../models/index.js';
import {
    CreateOrUpdateReportFromJSON,
    CreateOrUpdateReportToJSON,
    CreateReport200ResponseFromJSON,
    CreateReport200ResponseToJSON,
    ErrorResponseBodyFromJSON,
    ErrorResponseBodyToJSON,
    ReportFromJSON,
    ReportToJSON,
    ReportEmailFromJSON,
    ReportEmailToJSON,
    ReportSettingsFromJSON,
    ReportSettingsToJSON,
    SuccessResponseBodyFromJSON,
    SuccessResponseBodyToJSON,
} from '../models/index.js';

export interface ReportsApiCreateReportRequest {
    body: CreateOrUpdateReport;
}

export interface ReportsApiDeleteReportRequest {
    id: number;
}

export interface ReportsApiGetReportRequest {
    id: number;
}

export interface ReportsApiRenderReportCSVsRequest {
    dashboards?: string;
    title?: string;
}

export interface ReportsApiRenderReportPDFsRequest {
    dashboards?: string;
    orientation?: string;
    layout?: string;
    title?: string;
    scaleFactor?: string;
    includeTables?: string;
}

export interface ReportsApiSaveReportSettingsRequest {
    body: ReportSettings;
}

export interface ReportsApiSendReportRequest {
    body: ReportEmail;
}

export interface ReportsApiSendTestEmailRequest {
    body: CreateOrUpdateReport;
}

export interface ReportsApiUpdateReportRequest {
    id: number;
    body: CreateOrUpdateReport;
}

/**
 * 
 */
export class ReportsApi extends runtime.BaseAPI {

    /**
     * Available to org admins only and with a valid license.  You need to have a permission with action `reports.admin:create`.
     * Create a report.
     */
    async createReportRaw(requestParameters: ReportsApiCreateReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateReport200Response>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling createReport().'
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
            path: `/reports`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateOrUpdateReportToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateReport200ResponseFromJSON(jsonValue));
    }

    /**
     * Available to org admins only and with a valid license.  You need to have a permission with action `reports.admin:create`.
     * Create a report.
     */
    async createReport(requestParameters: ReportsApiCreateReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateReport200Response> {
        const response = await this.createReportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Available to org admins only and with a valid or expired license.  You need to have a permission with action `reports.delete` with scope `reports:id:<report ID>`.
     * Delete a report.
     */
    async deleteReportRaw(requestParameters: ReportsApiDeleteReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteReport().'
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
            path: `/reports/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * Available to org admins only and with a valid or expired license.  You need to have a permission with action `reports.delete` with scope `reports:id:<report ID>`.
     * Delete a report.
     */
    async deleteReport(requestParameters: ReportsApiDeleteReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.deleteReportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Available to org admins only and with a valid or expired license.  You need to have a permission with action `reports:read` with scope `reports:id:<report ID>`.
     * Get a report.
     */
    async getReportRaw(requestParameters: ReportsApiGetReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Report>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getReport().'
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
            path: `/reports/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReportFromJSON(jsonValue));
    }

    /**
     * Available to org admins only and with a valid or expired license.  You need to have a permission with action `reports:read` with scope `reports:id:<report ID>`.
     * Get a report.
     */
    async getReport(requestParameters: ReportsApiGetReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Report> {
        const response = await this.getReportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Available to org admins only and with a valid or expired license.  You need to have a permission with action `reports.settings:read`x.
     * Get report settings.
     */
    async getReportSettingsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReportSettings>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/reports/settings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReportSettingsFromJSON(jsonValue));
    }

    /**
     * Available to org admins only and with a valid or expired license.  You need to have a permission with action `reports.settings:read`x.
     * Get report settings.
     */
    async getReportSettings(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReportSettings> {
        const response = await this.getReportSettingsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Available to org admins only and with a valid or expired license.  You need to have a permission with action `reports:read` with scope `reports:*`.
     * List reports.
     */
    async getReportsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Report>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/reports`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ReportFromJSON));
    }

    /**
     * Available to org admins only and with a valid or expired license.  You need to have a permission with action `reports:read` with scope `reports:*`.
     * List reports.
     */
    async getReports(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Report>> {
        const response = await this.getReportsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Available to org admins only and with a valid or expired license.  You need to have a permission with action `reports.settings:read`.
     * Get custom branding report image.
     */
    async getSettingsImageRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<number>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/reports/images/:image`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Available to org admins only and with a valid or expired license.  You need to have a permission with action `reports.settings:read`.
     * Get custom branding report image.
     */
    async getSettingsImage(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<number>> {
        const response = await this.getSettingsImageRaw(initOverrides);
        return await response.value();
    }

    /**
     * Available to all users and with a valid license.
     * Download a CSV report.
     */
    async renderReportCSVsRaw(requestParameters: ReportsApiRenderReportCSVsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<number>>> {
        const queryParameters: any = {};

        if (requestParameters['dashboards'] != null) {
            queryParameters['dashboards'] = requestParameters['dashboards'];
        }

        if (requestParameters['title'] != null) {
            queryParameters['title'] = requestParameters['title'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/reports/render/csvs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Available to all users and with a valid license.
     * Download a CSV report.
     */
    async renderReportCSVs(requestParameters: ReportsApiRenderReportCSVsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<number>> {
        const response = await this.renderReportCSVsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Available to all users and with a valid license.
     * Render report for multiple dashboards.
     */
    async renderReportPDFsRaw(requestParameters: ReportsApiRenderReportPDFsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<number>>> {
        const queryParameters: any = {};

        if (requestParameters['dashboards'] != null) {
            queryParameters['dashboards'] = requestParameters['dashboards'];
        }

        if (requestParameters['orientation'] != null) {
            queryParameters['orientation'] = requestParameters['orientation'];
        }

        if (requestParameters['layout'] != null) {
            queryParameters['layout'] = requestParameters['layout'];
        }

        if (requestParameters['title'] != null) {
            queryParameters['title'] = requestParameters['title'];
        }

        if (requestParameters['scaleFactor'] != null) {
            queryParameters['scaleFactor'] = requestParameters['scaleFactor'];
        }

        if (requestParameters['includeTables'] != null) {
            queryParameters['includeTables'] = requestParameters['includeTables'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/reports/render/pdfs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Available to all users and with a valid license.
     * Render report for multiple dashboards.
     */
    async renderReportPDFs(requestParameters: ReportsApiRenderReportPDFsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<number>> {
        const response = await this.renderReportPDFsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Available to org admins only and with a valid or expired license.  You need to have a permission with action `reports.settings:write`xx.
     * Save settings.
     */
    async saveReportSettingsRaw(requestParameters: ReportsApiSaveReportSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling saveReportSettings().'
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
            path: `/reports/settings`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReportSettingsToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * Available to org admins only and with a valid or expired license.  You need to have a permission with action `reports.settings:write`xx.
     * Save settings.
     */
    async saveReportSettings(requestParameters: ReportsApiSaveReportSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.saveReportSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Generate and send a report. This API waits for the report to be generated before returning. We recommend that you set the client’s timeout to at least 60 seconds. Available to org admins only and with a valid license.  Only available in Grafana Enterprise v7.0+. This API endpoint is experimental and may be deprecated in a future release. On deprecation, a migration strategy will be provided and the endpoint will remain functional until the next major release of Grafana.  You need to have a permission with action `reports:send`.
     * Send a report.
     */
    async sendReportRaw(requestParameters: ReportsApiSendReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling sendReport().'
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
            path: `/reports/email`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReportEmailToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * Generate and send a report. This API waits for the report to be generated before returning. We recommend that you set the client’s timeout to at least 60 seconds. Available to org admins only and with a valid license.  Only available in Grafana Enterprise v7.0+. This API endpoint is experimental and may be deprecated in a future release. On deprecation, a migration strategy will be provided and the endpoint will remain functional until the next major release of Grafana.  You need to have a permission with action `reports:send`.
     * Send a report.
     */
    async sendReport(requestParameters: ReportsApiSendReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.sendReportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Available to org admins only and with a valid license.  You need to have a permission with action `reports:send`.
     * Send test report via email.
     */
    async sendTestEmailRaw(requestParameters: ReportsApiSendTestEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling sendTestEmail().'
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
            path: `/reports/test-email`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateOrUpdateReportToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * Available to org admins only and with a valid license.  You need to have a permission with action `reports:send`.
     * Send test report via email.
     */
    async sendTestEmail(requestParameters: ReportsApiSendTestEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.sendTestEmailRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Available to org admins only and with a valid or expired license.  You need to have a permission with action `reports.admin:write` with scope `reports:id:<report ID>`.
     * Update a report.
     */
    async updateReportRaw(requestParameters: ReportsApiUpdateReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateReport().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling updateReport().'
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
            path: `/reports/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CreateOrUpdateReportToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * Available to org admins only and with a valid or expired license.  You need to have a permission with action `reports.admin:write` with scope `reports:id:<report ID>`.
     * Update a report.
     */
    async updateReport(requestParameters: ReportsApiUpdateReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.updateReportRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
