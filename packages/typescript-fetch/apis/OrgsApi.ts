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
  AddOrgUserCommand,
  CreateOrg200Response,
  CreateOrgCommand,
  ErrorResponseBody,
  OrgDTO,
  OrgDetailsDTO,
  OrgUserDTO,
  QuotaDTO,
  SearchOrgUsersQueryResult,
  SuccessResponseBody,
  UpdateOrgAddressForm,
  UpdateOrgForm,
  UpdateOrgUserCommand,
  UpdateQuotaCmd,
} from '../models/index.js';
import {
    AddOrgUserCommandFromJSON,
    AddOrgUserCommandToJSON,
    CreateOrg200ResponseFromJSON,
    CreateOrg200ResponseToJSON,
    CreateOrgCommandFromJSON,
    CreateOrgCommandToJSON,
    ErrorResponseBodyFromJSON,
    ErrorResponseBodyToJSON,
    OrgDTOFromJSON,
    OrgDTOToJSON,
    OrgDetailsDTOFromJSON,
    OrgDetailsDTOToJSON,
    OrgUserDTOFromJSON,
    OrgUserDTOToJSON,
    QuotaDTOFromJSON,
    QuotaDTOToJSON,
    SearchOrgUsersQueryResultFromJSON,
    SearchOrgUsersQueryResultToJSON,
    SuccessResponseBodyFromJSON,
    SuccessResponseBodyToJSON,
    UpdateOrgAddressFormFromJSON,
    UpdateOrgAddressFormToJSON,
    UpdateOrgFormFromJSON,
    UpdateOrgFormToJSON,
    UpdateOrgUserCommandFromJSON,
    UpdateOrgUserCommandToJSON,
    UpdateQuotaCmdFromJSON,
    UpdateQuotaCmdToJSON,
} from '../models/index.js';

export interface OrgsApiAddOrgUserRequest {
    orgId: number;
    body: AddOrgUserCommand;
}

export interface OrgsApiCreateOrgRequest {
    body: CreateOrgCommand;
}

export interface OrgsApiDeleteOrgByIDRequest {
    orgId: number;
}

export interface OrgsApiGetOrgByIDRequest {
    orgId: number;
}

export interface OrgsApiGetOrgByNameRequest {
    orgName: string;
}

export interface OrgsApiGetOrgQuotaRequest {
    orgId: number;
}

export interface OrgsApiGetOrgUsersRequest {
    orgId: number;
}

export interface OrgsApiRemoveOrgUserRequest {
    orgId: number;
    userId: number;
}

export interface OrgsApiSearchOrgUsersRequest {
    orgId: number;
}

export interface OrgsApiSearchOrgsRequest {
    page?: number;
    perpage?: number;
    name?: string;
    query?: string;
}

export interface OrgsApiUpdateOrgRequest {
    orgId: number;
    body: UpdateOrgForm;
}

export interface OrgsApiUpdateOrgAddressRequest {
    orgId: number;
    body: UpdateOrgAddressForm;
}

export interface OrgsApiUpdateOrgQuotaRequest {
    quotaTarget: string;
    orgId: number;
    body: UpdateQuotaCmd;
}

export interface OrgsApiUpdateOrgUserRequest {
    orgId: number;
    userId: number;
    body: UpdateOrgUserCommand;
}

/**
 * 
 */
export class OrgsApi extends runtime.BaseAPI {

    /**
     * Adds a global user to the current organization.  If you are running Grafana Enterprise and have Fine-grained access control enabled you need to have a permission with action: `org.users:add` with scope `users:*`.
     * Add a new user to the current organization.
     */
    async addOrgUserRaw(requestParameters: OrgsApiAddOrgUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        if (requestParameters['orgId'] == null) {
            throw new runtime.RequiredError(
                'orgId',
                'Required parameter "orgId" was null or undefined when calling addOrgUser().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling addOrgUser().'
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
            path: `/orgs/{org_id}/users`.replace(`{${"org_id"}}`, encodeURIComponent(String(requestParameters['orgId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddOrgUserCommandToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * Adds a global user to the current organization.  If you are running Grafana Enterprise and have Fine-grained access control enabled you need to have a permission with action: `org.users:add` with scope `users:*`.
     * Add a new user to the current organization.
     */
    async addOrgUser(requestParameters: OrgsApiAddOrgUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.addOrgUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Only works if [users.allow_org_create](https://grafana.com/docs/grafana/latest/administration/configuration/#allow_org_create) is set.
     * Create Organization.
     */
    async createOrgRaw(requestParameters: OrgsApiCreateOrgRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateOrg200Response>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling createOrg().'
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
            path: `/orgs`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateOrgCommandToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateOrg200ResponseFromJSON(jsonValue));
    }

    /**
     * Only works if [users.allow_org_create](https://grafana.com/docs/grafana/latest/administration/configuration/#allow_org_create) is set.
     * Create Organization.
     */
    async createOrg(requestParameters: OrgsApiCreateOrgRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateOrg200Response> {
        const response = await this.createOrgRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete Organization.
     */
    async deleteOrgByIDRaw(requestParameters: OrgsApiDeleteOrgByIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        if (requestParameters['orgId'] == null) {
            throw new runtime.RequiredError(
                'orgId',
                'Required parameter "orgId" was null or undefined when calling deleteOrgByID().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/orgs/{org_id}`.replace(`{${"org_id"}}`, encodeURIComponent(String(requestParameters['orgId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * Delete Organization.
     */
    async deleteOrgByID(requestParameters: OrgsApiDeleteOrgByIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.deleteOrgByIDRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Organization by ID.
     */
    async getOrgByIDRaw(requestParameters: OrgsApiGetOrgByIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrgDetailsDTO>> {
        if (requestParameters['orgId'] == null) {
            throw new runtime.RequiredError(
                'orgId',
                'Required parameter "orgId" was null or undefined when calling getOrgByID().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/orgs/{org_id}`.replace(`{${"org_id"}}`, encodeURIComponent(String(requestParameters['orgId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrgDetailsDTOFromJSON(jsonValue));
    }

    /**
     * Get Organization by ID.
     */
    async getOrgByID(requestParameters: OrgsApiGetOrgByIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrgDetailsDTO> {
        const response = await this.getOrgByIDRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Organization by ID.
     */
    async getOrgByNameRaw(requestParameters: OrgsApiGetOrgByNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrgDetailsDTO>> {
        if (requestParameters['orgName'] == null) {
            throw new runtime.RequiredError(
                'orgName',
                'Required parameter "orgName" was null or undefined when calling getOrgByName().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/orgs/name/{org_name}`.replace(`{${"org_name"}}`, encodeURIComponent(String(requestParameters['orgName']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrgDetailsDTOFromJSON(jsonValue));
    }

    /**
     * Get Organization by ID.
     */
    async getOrgByName(requestParameters: OrgsApiGetOrgByNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrgDetailsDTO> {
        const response = await this.getOrgByNameRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `orgs.quotas:read` and scope `org:id:1` (orgIDScope).
     * Fetch Organization quota.
     */
    async getOrgQuotaRaw(requestParameters: OrgsApiGetOrgQuotaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<QuotaDTO>>> {
        if (requestParameters['orgId'] == null) {
            throw new runtime.RequiredError(
                'orgId',
                'Required parameter "orgId" was null or undefined when calling getOrgQuota().'
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
            path: `/orgs/{org_id}/quotas`.replace(`{${"org_id"}}`, encodeURIComponent(String(requestParameters['orgId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(QuotaDTOFromJSON));
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `orgs.quotas:read` and scope `org:id:1` (orgIDScope).
     * Fetch Organization quota.
     */
    async getOrgQuota(requestParameters: OrgsApiGetOrgQuotaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<QuotaDTO>> {
        const response = await this.getOrgQuotaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled you need to have a permission with action: `org.users:read` with scope `users:*`.
     * Get Users in Organization.
     */
    async getOrgUsersRaw(requestParameters: OrgsApiGetOrgUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<OrgUserDTO>>> {
        if (requestParameters['orgId'] == null) {
            throw new runtime.RequiredError(
                'orgId',
                'Required parameter "orgId" was null or undefined when calling getOrgUsers().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/orgs/{org_id}/users`.replace(`{${"org_id"}}`, encodeURIComponent(String(requestParameters['orgId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OrgUserDTOFromJSON));
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled you need to have a permission with action: `org.users:read` with scope `users:*`.
     * Get Users in Organization.
     */
    async getOrgUsers(requestParameters: OrgsApiGetOrgUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<OrgUserDTO>> {
        const response = await this.getOrgUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled you need to have a permission with action: `org.users:remove` with scope `users:*`.
     * Delete user in current organization.
     */
    async removeOrgUserRaw(requestParameters: OrgsApiRemoveOrgUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        if (requestParameters['orgId'] == null) {
            throw new runtime.RequiredError(
                'orgId',
                'Required parameter "orgId" was null or undefined when calling removeOrgUser().'
            );
        }

        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling removeOrgUser().'
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
            path: `/orgs/{org_id}/users/{user_id}`.replace(`{${"org_id"}}`, encodeURIComponent(String(requestParameters['orgId']))).replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled you need to have a permission with action: `org.users:remove` with scope `users:*`.
     * Delete user in current organization.
     */
    async removeOrgUser(requestParameters: OrgsApiRemoveOrgUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.removeOrgUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled you need to have a permission with action: `org.users:read` with scope `users:*`.
     * Search Users in Organization.
     */
    async searchOrgUsersRaw(requestParameters: OrgsApiSearchOrgUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchOrgUsersQueryResult>> {
        if (requestParameters['orgId'] == null) {
            throw new runtime.RequiredError(
                'orgId',
                'Required parameter "orgId" was null or undefined when calling searchOrgUsers().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/orgs/{org_id}/users/search`.replace(`{${"org_id"}}`, encodeURIComponent(String(requestParameters['orgId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SearchOrgUsersQueryResultFromJSON(jsonValue));
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled you need to have a permission with action: `org.users:read` with scope `users:*`.
     * Search Users in Organization.
     */
    async searchOrgUsers(requestParameters: OrgsApiSearchOrgUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchOrgUsersQueryResult> {
        const response = await this.searchOrgUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search all Organizations.
     */
    async searchOrgsRaw(requestParameters: OrgsApiSearchOrgsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<OrgDTO>>> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['perpage'] != null) {
            queryParameters['perpage'] = requestParameters['perpage'];
        }

        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/orgs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OrgDTOFromJSON));
    }

    /**
     * Search all Organizations.
     */
    async searchOrgs(requestParameters: OrgsApiSearchOrgsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<OrgDTO>> {
        const response = await this.searchOrgsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Organization.
     */
    async updateOrgRaw(requestParameters: OrgsApiUpdateOrgRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        if (requestParameters['orgId'] == null) {
            throw new runtime.RequiredError(
                'orgId',
                'Required parameter "orgId" was null or undefined when calling updateOrg().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling updateOrg().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/orgs/{org_id}`.replace(`{${"org_id"}}`, encodeURIComponent(String(requestParameters['orgId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateOrgFormToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * Update Organization.
     */
    async updateOrg(requestParameters: OrgsApiUpdateOrgRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.updateOrgRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Organization\'s address.
     */
    async updateOrgAddressRaw(requestParameters: OrgsApiUpdateOrgAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        if (requestParameters['orgId'] == null) {
            throw new runtime.RequiredError(
                'orgId',
                'Required parameter "orgId" was null or undefined when calling updateOrgAddress().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling updateOrgAddress().'
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
            path: `/orgs/{org_id}/address`.replace(`{${"org_id"}}`, encodeURIComponent(String(requestParameters['orgId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateOrgAddressFormToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * Update Organization\'s address.
     */
    async updateOrgAddress(requestParameters: OrgsApiUpdateOrgAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.updateOrgAddressRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `orgs.quotas:write` and scope `org:id:1` (orgIDScope).
     * Update user quota.
     */
    async updateOrgQuotaRaw(requestParameters: OrgsApiUpdateOrgQuotaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        if (requestParameters['quotaTarget'] == null) {
            throw new runtime.RequiredError(
                'quotaTarget',
                'Required parameter "quotaTarget" was null or undefined when calling updateOrgQuota().'
            );
        }

        if (requestParameters['orgId'] == null) {
            throw new runtime.RequiredError(
                'orgId',
                'Required parameter "orgId" was null or undefined when calling updateOrgQuota().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling updateOrgQuota().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/orgs/{org_id}/quotas/{quota_target}`.replace(`{${"quota_target"}}`, encodeURIComponent(String(requestParameters['quotaTarget']))).replace(`{${"org_id"}}`, encodeURIComponent(String(requestParameters['orgId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateQuotaCmdToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `orgs.quotas:write` and scope `org:id:1` (orgIDScope).
     * Update user quota.
     */
    async updateOrgQuota(requestParameters: OrgsApiUpdateOrgQuotaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.updateOrgQuotaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled you need to have a permission with action: `org.users.role:update` with scope `users:*`.
     * Update Users in Organization.
     */
    async updateOrgUserRaw(requestParameters: OrgsApiUpdateOrgUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        if (requestParameters['orgId'] == null) {
            throw new runtime.RequiredError(
                'orgId',
                'Required parameter "orgId" was null or undefined when calling updateOrgUser().'
            );
        }

        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling updateOrgUser().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling updateOrgUser().'
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
            path: `/orgs/{org_id}/users/{user_id}`.replace(`{${"org_id"}}`, encodeURIComponent(String(requestParameters['orgId']))).replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateOrgUserCommandToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled you need to have a permission with action: `org.users.role:update` with scope `users:*`.
     * Update Users in Organization.
     */
    async updateOrgUser(requestParameters: OrgsApiUpdateOrgUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.updateOrgUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

}