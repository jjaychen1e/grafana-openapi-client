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
 * @interface DashboardRedirect
 */
export interface DashboardRedirect {
    /**
     * 
     * @type {string}
     * @memberof DashboardRedirect
     */
    redirectUri?: string;
}

/**
 * Check if a given object implements the DashboardRedirect interface.
 */
export function instanceOfDashboardRedirect(value: object): value is DashboardRedirect {
    return true;
}

export function DashboardRedirectFromJSON(json: any): DashboardRedirect {
    return DashboardRedirectFromJSONTyped(json, false);
}

export function DashboardRedirectFromJSONTyped(json: any, ignoreDiscriminator: boolean): DashboardRedirect {
    if (json == null) {
        return json;
    }
    return {
        
        'redirectUri': json['redirectUri'] == null ? undefined : json['redirectUri'],
    };
}

export function DashboardRedirectToJSON(json: any): DashboardRedirect {
    return DashboardRedirectToJSONTyped(json, false);
}

export function DashboardRedirectToJSONTyped(value?: DashboardRedirect | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'redirectUri': value['redirectUri'],
    };
}
