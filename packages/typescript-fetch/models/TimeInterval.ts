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
 * @interface TimeInterval
 */
export interface TimeInterval {
    /**
     * 
     * @type {string}
     * @memberof TimeInterval
     */
    name?: string;
    /**
     * 
     * @type {Array<TimeInterval>}
     * @memberof TimeInterval
     */
    timeIntervals?: Array<TimeInterval>;
}

/**
 * Check if a given object implements the TimeInterval interface.
 */
export function instanceOfTimeInterval(value: object): value is TimeInterval {
    return true;
}

export function TimeIntervalFromJSON(json: any): TimeInterval {
    return TimeIntervalFromJSONTyped(json, false);
}

export function TimeIntervalFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeInterval {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'timeIntervals': json['time_intervals'] == null ? undefined : ((json['time_intervals'] as Array<any>).map(TimeIntervalFromJSON)),
    };
}

export function TimeIntervalToJSON(json: any): TimeInterval {
    return TimeIntervalToJSONTyped(json, false);
}

export function TimeIntervalToJSONTyped(value?: TimeInterval | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'time_intervals': value['timeIntervals'] == null ? undefined : ((value['timeIntervals'] as Array<any>).map(TimeIntervalToJSON)),
    };
}

