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
import type { NavbarPreference } from './NavbarPreference';
import {
    NavbarPreferenceFromJSON,
    NavbarPreferenceFromJSONTyped,
    NavbarPreferenceToJSON,
    NavbarPreferenceToJSONTyped,
} from './NavbarPreference';
import type { QueryHistoryPreference } from './QueryHistoryPreference';
import {
    QueryHistoryPreferenceFromJSON,
    QueryHistoryPreferenceFromJSONTyped,
    QueryHistoryPreferenceToJSON,
    QueryHistoryPreferenceToJSONTyped,
} from './QueryHistoryPreference';

/**
 * 
 * @export
 * @interface UpdatePrefsCmd
 */
export interface UpdatePrefsCmd {
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdatePrefsCmd
     */
    cookies?: Array<string>;
    /**
     * The numerical :id of a favorited dashboard
     * @type {number}
     * @memberof UpdatePrefsCmd
     */
    homeDashboardId?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdatePrefsCmd
     */
    homeDashboardUID?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdatePrefsCmd
     */
    language?: string;
    /**
     * 
     * @type {NavbarPreference}
     * @memberof UpdatePrefsCmd
     */
    navbar?: NavbarPreference;
    /**
     * 
     * @type {QueryHistoryPreference}
     * @memberof UpdatePrefsCmd
     */
    queryHistory?: QueryHistoryPreference;
    /**
     * 
     * @type {string}
     * @memberof UpdatePrefsCmd
     */
    theme?: UpdatePrefsCmdThemeEnum;
    /**
     * 
     * @type {string}
     * @memberof UpdatePrefsCmd
     */
    timezone?: UpdatePrefsCmdTimezoneEnum;
    /**
     * 
     * @type {string}
     * @memberof UpdatePrefsCmd
     */
    weekStart?: string;
}


/**
 * @export
 */
export const UpdatePrefsCmdThemeEnum = {
    Light: 'light',
    Dark: 'dark',
    System: 'system'
} as const;
export type UpdatePrefsCmdThemeEnum = typeof UpdatePrefsCmdThemeEnum[keyof typeof UpdatePrefsCmdThemeEnum];

/**
 * @export
 */
export const UpdatePrefsCmdTimezoneEnum = {
    Utc: 'utc',
    Browser: 'browser'
} as const;
export type UpdatePrefsCmdTimezoneEnum = typeof UpdatePrefsCmdTimezoneEnum[keyof typeof UpdatePrefsCmdTimezoneEnum];


/**
 * Check if a given object implements the UpdatePrefsCmd interface.
 */
export function instanceOfUpdatePrefsCmd(value: object): value is UpdatePrefsCmd {
    return true;
}

export function UpdatePrefsCmdFromJSON(json: any): UpdatePrefsCmd {
    return UpdatePrefsCmdFromJSONTyped(json, false);
}

export function UpdatePrefsCmdFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdatePrefsCmd {
    if (json == null) {
        return json;
    }
    return {
        
        'cookies': json['cookies'] == null ? undefined : json['cookies'],
        'homeDashboardId': json['homeDashboardId'] == null ? undefined : json['homeDashboardId'],
        'homeDashboardUID': json['homeDashboardUID'] == null ? undefined : json['homeDashboardUID'],
        'language': json['language'] == null ? undefined : json['language'],
        'navbar': json['navbar'] == null ? undefined : NavbarPreferenceFromJSON(json['navbar']),
        'queryHistory': json['queryHistory'] == null ? undefined : QueryHistoryPreferenceFromJSON(json['queryHistory']),
        'theme': json['theme'] == null ? undefined : json['theme'],
        'timezone': json['timezone'] == null ? undefined : json['timezone'],
        'weekStart': json['weekStart'] == null ? undefined : json['weekStart'],
    };
}

export function UpdatePrefsCmdToJSON(json: any): UpdatePrefsCmd {
    return UpdatePrefsCmdToJSONTyped(json, false);
}

export function UpdatePrefsCmdToJSONTyped(value?: UpdatePrefsCmd | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'cookies': value['cookies'],
        'homeDashboardId': value['homeDashboardId'],
        'homeDashboardUID': value['homeDashboardUID'],
        'language': value['language'],
        'navbar': NavbarPreferenceToJSON(value['navbar']),
        'queryHistory': QueryHistoryPreferenceToJSON(value['queryHistory']),
        'theme': value['theme'],
        'timezone': value['timezone'],
        'weekStart': value['weekStart'],
    };
}

