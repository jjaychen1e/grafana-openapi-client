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
 * RelativeTimeRange is the per query start and end time
 * for requests.
 * @export
 * @interface RelativeTimeRange
 */
export interface RelativeTimeRange {
    /**
     * A Duration represents the elapsed time between two instants
     * as an int64 nanosecond count. The representation limits the
     * largest representable duration to approximately 290 years.
     * @type {number}
     * @memberof RelativeTimeRange
     */
    from?: number;
    /**
     * A Duration represents the elapsed time between two instants
     * as an int64 nanosecond count. The representation limits the
     * largest representable duration to approximately 290 years.
     * @type {number}
     * @memberof RelativeTimeRange
     */
    to?: number;
}

/**
 * Check if a given object implements the RelativeTimeRange interface.
 */
export function instanceOfRelativeTimeRange(value: object): value is RelativeTimeRange {
    return true;
}

export function RelativeTimeRangeFromJSON(json: any): RelativeTimeRange {
    return RelativeTimeRangeFromJSONTyped(json, false);
}

export function RelativeTimeRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelativeTimeRange {
    if (json == null) {
        return json;
    }
    return {
        
        'from': json['from'] == null ? undefined : json['from'],
        'to': json['to'] == null ? undefined : json['to'],
    };
}

export function RelativeTimeRangeToJSON(json: any): RelativeTimeRange {
    return RelativeTimeRangeToJSONTyped(json, false);
}

export function RelativeTimeRangeToJSONTyped(value?: RelativeTimeRange | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'from': value['from'],
        'to': value['to'],
    };
}

