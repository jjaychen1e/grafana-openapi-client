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
 * @interface DiscoveryBase
 */
export interface DiscoveryBase {
    /**
     * 
     * @type {string}
     * @memberof DiscoveryBase
     */
    error?: string;
    /**
     * 
     * @type {string}
     * @memberof DiscoveryBase
     */
    errorType?: string;
    /**
     * 
     * @type {string}
     * @memberof DiscoveryBase
     */
    status: string;
}

/**
 * Check if a given object implements the DiscoveryBase interface.
 */
export function instanceOfDiscoveryBase(value: object): value is DiscoveryBase {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function DiscoveryBaseFromJSON(json: any): DiscoveryBase {
    return DiscoveryBaseFromJSONTyped(json, false);
}

export function DiscoveryBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscoveryBase {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'] == null ? undefined : json['error'],
        'errorType': json['errorType'] == null ? undefined : json['errorType'],
        'status': json['status'],
    };
}

export function DiscoveryBaseToJSON(json: any): DiscoveryBase {
    return DiscoveryBaseToJSONTyped(json, false);
}

export function DiscoveryBaseToJSONTyped(value?: DiscoveryBase | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'error': value['error'],
        'errorType': value['errorType'],
        'status': value['status'],
    };
}
