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
 * @interface ActiveUserStats
 */
export interface ActiveUserStats {
    /**
     * 
     * @type {number}
     * @memberof ActiveUserStats
     */
    activeAdminsAndEditors?: number;
    /**
     * 
     * @type {number}
     * @memberof ActiveUserStats
     */
    activeAnonymousDevices?: number;
    /**
     * 
     * @type {number}
     * @memberof ActiveUserStats
     */
    activeUsers?: number;
    /**
     * 
     * @type {number}
     * @memberof ActiveUserStats
     */
    activeViewers?: number;
}

/**
 * Check if a given object implements the ActiveUserStats interface.
 */
export function instanceOfActiveUserStats(value: object): value is ActiveUserStats {
    return true;
}

export function ActiveUserStatsFromJSON(json: any): ActiveUserStats {
    return ActiveUserStatsFromJSONTyped(json, false);
}

export function ActiveUserStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActiveUserStats {
    if (json == null) {
        return json;
    }
    return {
        
        'activeAdminsAndEditors': json['active_admins_and_editors'] == null ? undefined : json['active_admins_and_editors'],
        'activeAnonymousDevices': json['active_anonymous_devices'] == null ? undefined : json['active_anonymous_devices'],
        'activeUsers': json['active_users'] == null ? undefined : json['active_users'],
        'activeViewers': json['active_viewers'] == null ? undefined : json['active_viewers'],
    };
}

export function ActiveUserStatsToJSON(json: any): ActiveUserStats {
    return ActiveUserStatsToJSONTyped(json, false);
}

export function ActiveUserStatsToJSONTyped(value?: ActiveUserStats | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'active_admins_and_editors': value['activeAdminsAndEditors'],
        'active_anonymous_devices': value['activeAnonymousDevices'],
        'active_users': value['activeUsers'],
        'active_viewers': value['activeViewers'],
    };
}

