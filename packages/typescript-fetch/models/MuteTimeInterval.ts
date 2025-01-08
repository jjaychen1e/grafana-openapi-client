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
import type { TimeInterval } from './TimeInterval.js';
import {
    TimeIntervalFromJSON,
    TimeIntervalFromJSONTyped,
    TimeIntervalToJSON,
    TimeIntervalToJSONTyped,
} from './TimeInterval.js';

/**
 * 
 * @export
 * @interface MuteTimeInterval
 */
export interface MuteTimeInterval {
    /**
     * 
     * @type {string}
     * @memberof MuteTimeInterval
     */
    name?: string;
    /**
     * 
     * @type {Array<TimeInterval>}
     * @memberof MuteTimeInterval
     */
    timeIntervals?: Array<TimeInterval>;
}

/**
 * Check if a given object implements the MuteTimeInterval interface.
 */
export function instanceOfMuteTimeInterval(value: object): value is MuteTimeInterval {
    return true;
}

export function MuteTimeIntervalFromJSON(json: any): MuteTimeInterval {
    return MuteTimeIntervalFromJSONTyped(json, false);
}

export function MuteTimeIntervalFromJSONTyped(json: any, ignoreDiscriminator: boolean): MuteTimeInterval {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'timeIntervals': json['time_intervals'] == null ? undefined : ((json['time_intervals'] as Array<any>).map(TimeIntervalFromJSON)),
    };
}

export function MuteTimeIntervalToJSON(json: any): MuteTimeInterval {
    return MuteTimeIntervalToJSONTyped(json, false);
}

export function MuteTimeIntervalToJSONTyped(value?: MuteTimeInterval | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'time_intervals': value['timeIntervals'] == null ? undefined : ((value['timeIntervals'] as Array<any>).map(TimeIntervalToJSON)),
    };
}

