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
 * Threshold a single step on the threshold list
 * @export
 * @interface Threshold
 */
export interface Threshold {
    /**
     * 
     * @type {string}
     * @memberof Threshold
     */
    color?: string;
    /**
     * 
     * @type {string}
     * @memberof Threshold
     */
    state?: string;
    /**
     * ConfFloat64 is a float64. It Marshals float64 values of NaN of Inf
     * to null.
     * @type {number}
     * @memberof Threshold
     */
    value?: number;
}

/**
 * Check if a given object implements the Threshold interface.
 */
export function instanceOfThreshold(value: object): value is Threshold {
    return true;
}

export function ThresholdFromJSON(json: any): Threshold {
    return ThresholdFromJSONTyped(json, false);
}

export function ThresholdFromJSONTyped(json: any, ignoreDiscriminator: boolean): Threshold {
    if (json == null) {
        return json;
    }
    return {
        
        'color': json['color'] == null ? undefined : json['color'],
        'state': json['state'] == null ? undefined : json['state'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function ThresholdToJSON(json: any): Threshold {
    return ThresholdToJSONTyped(json, false);
}

export function ThresholdToJSONTyped(value?: Threshold | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'color': value['color'],
        'state': value['state'],
        'value': value['value'],
    };
}

