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
  CreateQueryInQueryHistoryCommand,
  ErrorResponseBody,
  PatchQueryCommentInQueryHistoryCommand,
  QueryHistoryDeleteQueryResponse,
  QueryHistoryResponse,
  QueryHistorySearchResponse,
} from '../models/index';
import {
    CreateQueryInQueryHistoryCommandFromJSON,
    CreateQueryInQueryHistoryCommandToJSON,
    ErrorResponseBodyFromJSON,
    ErrorResponseBodyToJSON,
    PatchQueryCommentInQueryHistoryCommandFromJSON,
    PatchQueryCommentInQueryHistoryCommandToJSON,
    QueryHistoryDeleteQueryResponseFromJSON,
    QueryHistoryDeleteQueryResponseToJSON,
    QueryHistoryResponseFromJSON,
    QueryHistoryResponseToJSON,
    QueryHistorySearchResponseFromJSON,
    QueryHistorySearchResponseToJSON,
} from '../models/index';

export interface QueryHistoryApiCreateQueryRequest {
    body: CreateQueryInQueryHistoryCommand;
}

export interface QueryHistoryApiDeleteQueryRequest {
    queryHistoryUid: string;
}

export interface QueryHistoryApiPatchQueryCommentRequest {
    queryHistoryUid: string;
    body: PatchQueryCommentInQueryHistoryCommand;
}

export interface QueryHistoryApiSearchQueriesRequest {
    datasourceUid?: Array<string>;
    searchString?: string;
    onlyStarred?: boolean;
    sort?: SearchQueriesSortEnum;
    page?: number;
    limit?: number;
    from?: number;
    to?: number;
}

export interface QueryHistoryApiStarQueryRequest {
    queryHistoryUid: string;
}

export interface QueryHistoryApiUnstarQueryRequest {
    queryHistoryUid: string;
}

/**
 * 
 */
export class QueryHistoryApi extends runtime.BaseAPI {

    /**
     * Adds new query to query history.
     * Add query to query history.
     */
    async createQueryRaw(requestParameters: QueryHistoryApiCreateQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryHistoryResponse>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling createQuery().'
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
            path: `/query-history`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateQueryInQueryHistoryCommandToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryHistoryResponseFromJSON(jsonValue));
    }

    /**
     * Adds new query to query history.
     * Add query to query history.
     */
    async createQuery(requestParameters: QueryHistoryApiCreateQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryHistoryResponse> {
        const response = await this.createQueryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes an existing query in query history as specified by the UID. This operation cannot be reverted.
     * Delete query in query history.
     */
    async deleteQueryRaw(requestParameters: QueryHistoryApiDeleteQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryHistoryDeleteQueryResponse>> {
        if (requestParameters['queryHistoryUid'] == null) {
            throw new runtime.RequiredError(
                'queryHistoryUid',
                'Required parameter "queryHistoryUid" was null or undefined when calling deleteQuery().'
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
            path: `/query-history/{query_history_uid}`.replace(`{${"query_history_uid"}}`, encodeURIComponent(String(requestParameters['queryHistoryUid']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryHistoryDeleteQueryResponseFromJSON(jsonValue));
    }

    /**
     * Deletes an existing query in query history as specified by the UID. This operation cannot be reverted.
     * Delete query in query history.
     */
    async deleteQuery(requestParameters: QueryHistoryApiDeleteQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryHistoryDeleteQueryResponse> {
        const response = await this.deleteQueryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates comment for query in query history as specified by the UID.
     * Update comment for query in query history.
     */
    async patchQueryCommentRaw(requestParameters: QueryHistoryApiPatchQueryCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryHistoryResponse>> {
        if (requestParameters['queryHistoryUid'] == null) {
            throw new runtime.RequiredError(
                'queryHistoryUid',
                'Required parameter "queryHistoryUid" was null or undefined when calling patchQueryComment().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling patchQueryComment().'
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
            path: `/query-history/{query_history_uid}`.replace(`{${"query_history_uid"}}`, encodeURIComponent(String(requestParameters['queryHistoryUid']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchQueryCommentInQueryHistoryCommandToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryHistoryResponseFromJSON(jsonValue));
    }

    /**
     * Updates comment for query in query history as specified by the UID.
     * Update comment for query in query history.
     */
    async patchQueryComment(requestParameters: QueryHistoryApiPatchQueryCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryHistoryResponse> {
        const response = await this.patchQueryCommentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of queries in the query history that matches the search criteria. Query history search supports pagination. Use the `limit` parameter to control the maximum number of queries returned; the default limit is 100. You can also use the `page` query parameter to fetch queries from any page other than the first one.
     * Query history search.
     */
    async searchQueriesRaw(requestParameters: QueryHistoryApiSearchQueriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryHistorySearchResponse>> {
        const queryParameters: any = {};

        if (requestParameters['datasourceUid'] != null) {
            queryParameters['datasourceUid'] = requestParameters['datasourceUid'];
        }

        if (requestParameters['searchString'] != null) {
            queryParameters['searchString'] = requestParameters['searchString'];
        }

        if (requestParameters['onlyStarred'] != null) {
            queryParameters['onlyStarred'] = requestParameters['onlyStarred'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['from'] != null) {
            queryParameters['from'] = requestParameters['from'];
        }

        if (requestParameters['to'] != null) {
            queryParameters['to'] = requestParameters['to'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // api_key authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/query-history`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryHistorySearchResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of queries in the query history that matches the search criteria. Query history search supports pagination. Use the `limit` parameter to control the maximum number of queries returned; the default limit is 100. You can also use the `page` query parameter to fetch queries from any page other than the first one.
     * Query history search.
     */
    async searchQueries(requestParameters: QueryHistoryApiSearchQueriesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryHistorySearchResponse> {
        const response = await this.searchQueriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Adds star to query in query history as specified by the UID.
     * Add star to query in query history.
     */
    async starQueryRaw(requestParameters: QueryHistoryApiStarQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryHistoryResponse>> {
        if (requestParameters['queryHistoryUid'] == null) {
            throw new runtime.RequiredError(
                'queryHistoryUid',
                'Required parameter "queryHistoryUid" was null or undefined when calling starQuery().'
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
            path: `/query-history/star/{query_history_uid}`.replace(`{${"query_history_uid"}}`, encodeURIComponent(String(requestParameters['queryHistoryUid']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryHistoryResponseFromJSON(jsonValue));
    }

    /**
     * Adds star to query in query history as specified by the UID.
     * Add star to query in query history.
     */
    async starQuery(requestParameters: QueryHistoryApiStarQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryHistoryResponse> {
        const response = await this.starQueryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removes star from query in query history as specified by the UID.
     * Remove star to query in query history.
     */
    async unstarQueryRaw(requestParameters: QueryHistoryApiUnstarQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryHistoryResponse>> {
        if (requestParameters['queryHistoryUid'] == null) {
            throw new runtime.RequiredError(
                'queryHistoryUid',
                'Required parameter "queryHistoryUid" was null or undefined when calling unstarQuery().'
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
            path: `/query-history/star/{query_history_uid}`.replace(`{${"query_history_uid"}}`, encodeURIComponent(String(requestParameters['queryHistoryUid']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryHistoryResponseFromJSON(jsonValue));
    }

    /**
     * Removes star from query in query history as specified by the UID.
     * Remove star to query in query history.
     */
    async unstarQuery(requestParameters: QueryHistoryApiUnstarQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryHistoryResponse> {
        const response = await this.unstarQueryRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const SearchQueriesSortEnum = {
    Desc: 'time-desc',
    Asc: 'time-asc'
} as const;
export type SearchQueriesSortEnum = typeof SearchQueriesSortEnum[keyof typeof SearchQueriesSortEnum];
