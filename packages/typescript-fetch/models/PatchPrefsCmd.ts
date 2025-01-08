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
import type { NavbarPreference } from './NavbarPreference.js';
import {
    NavbarPreferenceFromJSON,
    NavbarPreferenceFromJSONTyped,
    NavbarPreferenceToJSON,
    NavbarPreferenceToJSONTyped,
} from './NavbarPreference.js';
import type { QueryHistoryPreference } from './QueryHistoryPreference.js';
import {
    QueryHistoryPreferenceFromJSON,
    QueryHistoryPreferenceFromJSONTyped,
    QueryHistoryPreferenceToJSON,
    QueryHistoryPreferenceToJSONTyped,
} from './QueryHistoryPreference.js';

/**
 * 
 * @export
 * @interface PatchPrefsCmd
 */
export interface PatchPrefsCmd {
    /**
     * 
     * @type {Array<string>}
     * @memberof PatchPrefsCmd
     */
    cookies?: Array<string>;
    /**
     * The numerical :id of a favorited dashboard
     * @type {number}
     * @memberof PatchPrefsCmd
     */
    homeDashboardId?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchPrefsCmd
     */
    homeDashboardUID?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchPrefsCmd
     */
    language?: string;
    /**
     * 
     * @type {NavbarPreference}
     * @memberof PatchPrefsCmd
     */
    navbar?: NavbarPreference;
    /**
     * 
     * @type {QueryHistoryPreference}
     * @memberof PatchPrefsCmd
     */
    queryHistory?: QueryHistoryPreference;
    /**
     * 
     * @type {string}
     * @memberof PatchPrefsCmd
     */
    theme?: PatchPrefsCmdThemeEnum;
    /**
     * 
     * @type {string}
     * @memberof PatchPrefsCmd
     */
    timezone?: PatchPrefsCmdTimezoneEnum;
    /**
     * 
     * @type {string}
     * @memberof PatchPrefsCmd
     */
    weekStart?: string;
}


/**
 * @export
 */
export const PatchPrefsCmdThemeEnum = {
    Light: 'light',
    Dark: 'dark'
} as const;
export type PatchPrefsCmdThemeEnum = typeof PatchPrefsCmdThemeEnum[keyof typeof PatchPrefsCmdThemeEnum];

/**
 * @export
 */
export const PatchPrefsCmdTimezoneEnum = {
    Utc: 'utc',
    Browser: 'browser'
} as const;
export type PatchPrefsCmdTimezoneEnum = typeof PatchPrefsCmdTimezoneEnum[keyof typeof PatchPrefsCmdTimezoneEnum];


/**
 * Check if a given object implements the PatchPrefsCmd interface.
 */
export function instanceOfPatchPrefsCmd(value: object): value is PatchPrefsCmd {
    return true;
}

export function PatchPrefsCmdFromJSON(json: any): PatchPrefsCmd {
    return PatchPrefsCmdFromJSONTyped(json, false);
}

export function PatchPrefsCmdFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchPrefsCmd {
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

export function PatchPrefsCmdToJSON(json: any): PatchPrefsCmd {
    return PatchPrefsCmdToJSONTyped(json, false);
}

export function PatchPrefsCmdToJSONTyped(value?: PatchPrefsCmd | null, ignoreDiscriminator: boolean = false): any {
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

