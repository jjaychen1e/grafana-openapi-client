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
  SearchUserQueryResult,
  SuccessResponseBody,
  TeamDTO,
  UpdateUserCommand,
  UserOrgDTO,
  UserProfileDTO,
  UserSearchHitDTO,
} from '../models/index';
import {
    ErrorResponseBodyFromJSON,
    ErrorResponseBodyToJSON,
    SearchUserQueryResultFromJSON,
    SearchUserQueryResultToJSON,
    SuccessResponseBodyFromJSON,
    SuccessResponseBodyToJSON,
    TeamDTOFromJSON,
    TeamDTOToJSON,
    UpdateUserCommandFromJSON,
    UpdateUserCommandToJSON,
    UserOrgDTOFromJSON,
    UserOrgDTOToJSON,
    UserProfileDTOFromJSON,
    UserProfileDTOToJSON,
    UserSearchHitDTOFromJSON,
    UserSearchHitDTOToJSON,
} from '../models/index';

export interface UsersApiGetUserByIDRequest {
    userId: number;
}

export interface UsersApiGetUserByLoginOrEmailRequest {
    loginOrEmail: string;
}

export interface UsersApiGetUserOrgListRequest {
    userId: number;
}

export interface UsersApiGetUserTeamsRequest {
    userId: number;
}

export interface UsersApiSearchUsersRequest {
    perpage?: number;
    page?: number;
}

export interface UsersApiUpdateUserRequest {
    userId: number;
    body: UpdateUserCommand;
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     * Get user by id.
     */
    async getUserByIDRaw(requestParameters: UsersApiGetUserByIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProfileDTO>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getUserByID().'
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
            path: `/users/{user_id}`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileDTOFromJSON(jsonValue));
    }

    /**
     * Get user by id.
     */
    async getUserByID(requestParameters: UsersApiGetUserByIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProfileDTO> {
        const response = await this.getUserByIDRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get user by login or email.
     */
    async getUserByLoginOrEmailRaw(requestParameters: UsersApiGetUserByLoginOrEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProfileDTO>> {
        if (requestParameters['loginOrEmail'] == null) {
            throw new runtime.RequiredError(
                'loginOrEmail',
                'Required parameter "loginOrEmail" was null or undefined when calling getUserByLoginOrEmail().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['loginOrEmail'] != null) {
            queryParameters['loginOrEmail'] = requestParameters['loginOrEmail'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/users/lookup`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileDTOFromJSON(jsonValue));
    }

    /**
     * Get user by login or email.
     */
    async getUserByLoginOrEmail(requestParameters: UsersApiGetUserByLoginOrEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProfileDTO> {
        const response = await this.getUserByLoginOrEmailRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get organizations for user identified by id.
     * Get organizations for user.
     */
    async getUserOrgListRaw(requestParameters: UsersApiGetUserOrgListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<UserOrgDTO>>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getUserOrgList().'
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
            path: `/users/{user_id}/orgs`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserOrgDTOFromJSON));
    }

    /**
     * Get organizations for user identified by id.
     * Get organizations for user.
     */
    async getUserOrgList(requestParameters: UsersApiGetUserOrgListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<UserOrgDTO>> {
        const response = await this.getUserOrgListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get teams for user identified by id.
     * Get teams for user.
     */
    async getUserTeamsRaw(requestParameters: UsersApiGetUserTeamsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TeamDTO>>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getUserTeams().'
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
            path: `/users/{user_id}/teams`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TeamDTOFromJSON));
    }

    /**
     * Get teams for user identified by id.
     * Get teams for user.
     */
    async getUserTeams(requestParameters: UsersApiGetUserTeamsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TeamDTO>> {
        const response = await this.getUserTeamsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all users that the authenticated user has permission to view, admin permission required.
     * Get users.
     */
    async searchUsersRaw(requestParameters: UsersApiSearchUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<UserSearchHitDTO>>> {
        const queryParameters: any = {};

        if (requestParameters['perpage'] != null) {
            queryParameters['perpage'] = requestParameters['perpage'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserSearchHitDTOFromJSON));
    }

    /**
     * Returns all users that the authenticated user has permission to view, admin permission required.
     * Get users.
     */
    async searchUsers(requestParameters: UsersApiSearchUsersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<UserSearchHitDTO>> {
        const response = await this.searchUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get users with paging.
     */
    async searchUsersWithPagingRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchUserQueryResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/users/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SearchUserQueryResultFromJSON(jsonValue));
    }

    /**
     * Get users with paging.
     */
    async searchUsersWithPaging(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchUserQueryResult> {
        const response = await this.searchUsersWithPagingRaw(initOverrides);
        return await response.value();
    }

    /**
     * Update the user identified by id.
     * Update user.
     */
    async updateUserRaw(requestParameters: UsersApiUpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling updateUser().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling updateUser().'
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
            path: `/users/{user_id}`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateUserCommandToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * Update the user identified by id.
     * Update user.
     */
    async updateUser(requestParameters: UsersApiUpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.updateUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
