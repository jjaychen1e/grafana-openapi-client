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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ReportDashboardID
 */
export interface ReportDashboardID {
    /**
     * 
     * @type {number}
     * @memberof ReportDashboardID
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ReportDashboardID
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportDashboardID
     */
    uid?: string;
}

/**
 * Check if a given object implements the ReportDashboardID interface.
 */
export function instanceOfReportDashboardID(value: object): value is ReportDashboardID {
    return true;
}

export function ReportDashboardIDFromJSON(json: any): ReportDashboardID {
    return ReportDashboardIDFromJSONTyped(json, false);
}

export function ReportDashboardIDFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportDashboardID {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'uid': json['uid'] == null ? undefined : json['uid'],
    };
}

export function ReportDashboardIDToJSON(json: any): ReportDashboardID {
    return ReportDashboardIDToJSONTyped(json, false);
}

export function ReportDashboardIDToJSONTyped(value?: ReportDashboardID | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'uid': value['uid'],
    };
}

