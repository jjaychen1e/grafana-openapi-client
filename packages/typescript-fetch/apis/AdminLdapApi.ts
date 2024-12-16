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
  SuccessResponseBody,
} from '../models/index';
import {
    ErrorResponseBodyFromJSON,
    ErrorResponseBodyToJSON,
    SuccessResponseBodyFromJSON,
    SuccessResponseBodyToJSON,
} from '../models/index';

export interface AdminLdapApiGetUserFromLDAPRequest {
    userName: string;
}

export interface AdminLdapApiPostSyncUserWithLDAPRequest {
    userId: number;
}

/**
 * 
 */
export class AdminLdapApi extends runtime.BaseAPI {

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `ldap.status:read`.
     * Attempts to connect to all the configured LDAP servers and returns information on whenever they\'re available or not.
     */
    async getLDAPStatusRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/admin/ldap/status`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `ldap.status:read`.
     * Attempts to connect to all the configured LDAP servers and returns information on whenever they\'re available or not.
     */
    async getLDAPStatus(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.getLDAPStatusRaw(initOverrides);
        return await response.value();
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `ldap.user:read`.
     * Finds an user based on a username in LDAP. This helps illustrate how would the particular user be mapped in Grafana when synced.
     */
    async getUserFromLDAPRaw(requestParameters: AdminLdapApiGetUserFromLDAPRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        if (requestParameters['userName'] == null) {
            throw new runtime.RequiredError(
                'userName',
                'Required parameter "userName" was null or undefined when calling getUserFromLDAP().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/admin/ldap/{user_name}`.replace(`{${"user_name"}}`, encodeURIComponent(String(requestParameters['userName']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `ldap.user:read`.
     * Finds an user based on a username in LDAP. This helps illustrate how would the particular user be mapped in Grafana when synced.
     */
    async getUserFromLDAP(requestParameters: AdminLdapApiGetUserFromLDAPRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.getUserFromLDAPRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `ldap.user:sync`.
     * Enables a single Grafana user to be synchronized against LDAP.
     */
    async postSyncUserWithLDAPRaw(requestParameters: AdminLdapApiPostSyncUserWithLDAPRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling postSyncUserWithLDAP().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/admin/ldap/sync/{user_id}`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `ldap.user:sync`.
     * Enables a single Grafana user to be synchronized against LDAP.
     */
    async postSyncUserWithLDAP(requestParameters: AdminLdapApiPostSyncUserWithLDAPRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.postSyncUserWithLDAPRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `ldap.config:reload`.
     * Reloads the LDAP configuration.
     */
    async reloadLDAPCfgRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponseBody>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/admin/ldap/reload`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseBodyFromJSON(jsonValue));
    }

    /**
     * If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `ldap.config:reload`.
     * Reloads the LDAP configuration.
     */
    async reloadLDAPCfg(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponseBody> {
        const response = await this.reloadLDAPCfgRaw(initOverrides);
        return await response.value();
    }

}
