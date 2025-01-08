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
 * @interface DashboardTagCloudItem
 */
export interface DashboardTagCloudItem {
    /**
     * 
     * @type {number}
     * @memberof DashboardTagCloudItem
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof DashboardTagCloudItem
     */
    term?: string;
}

/**
 * Check if a given object implements the DashboardTagCloudItem interface.
 */
export function instanceOfDashboardTagCloudItem(value: object): value is DashboardTagCloudItem {
    return true;
}

export function DashboardTagCloudItemFromJSON(json: any): DashboardTagCloudItem {
    return DashboardTagCloudItemFromJSONTyped(json, false);
}

export function DashboardTagCloudItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): DashboardTagCloudItem {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
        'term': json['term'] == null ? undefined : json['term'],
    };
}

export function DashboardTagCloudItemToJSON(json: any): DashboardTagCloudItem {
    return DashboardTagCloudItemToJSONTyped(json, false);
}

export function DashboardTagCloudItemToJSONTyped(value?: DashboardTagCloudItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'count': value['count'],
        'term': value['term'],
    };
}

