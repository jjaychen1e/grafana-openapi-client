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

import { mapValues } from '../runtime.js';
/**
 * 
 * @export
 * @interface PublicDashboardListResponse
 */
export interface PublicDashboardListResponse {
    /**
     * 
     * @type {string}
     * @memberof PublicDashboardListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof PublicDashboardListResponse
     */
    dashboardUid?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PublicDashboardListResponse
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PublicDashboardListResponse
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof PublicDashboardListResponse
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof PublicDashboardListResponse
     */
    uid?: string;
}

/**
 * Check if a given object implements the PublicDashboardListResponse interface.
 */
export function instanceOfPublicDashboardListResponse(value: object): value is PublicDashboardListResponse {
    return true;
}

export function PublicDashboardListResponseFromJSON(json: any): PublicDashboardListResponse {
    return PublicDashboardListResponseFromJSONTyped(json, false);
}

export function PublicDashboardListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicDashboardListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'accessToken': json['accessToken'] == null ? undefined : json['accessToken'],
        'dashboardUid': json['dashboardUid'] == null ? undefined : json['dashboardUid'],
        'isEnabled': json['isEnabled'] == null ? undefined : json['isEnabled'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'title': json['title'] == null ? undefined : json['title'],
        'uid': json['uid'] == null ? undefined : json['uid'],
    };
}

export function PublicDashboardListResponseToJSON(json: any): PublicDashboardListResponse {
    return PublicDashboardListResponseToJSONTyped(json, false);
}

export function PublicDashboardListResponseToJSONTyped(value?: PublicDashboardListResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'accessToken': value['accessToken'],
        'dashboardUid': value['dashboardUid'],
        'isEnabled': value['isEnabled'],
        'slug': value['slug'],
        'title': value['title'],
        'uid': value['uid'],
    };
}
