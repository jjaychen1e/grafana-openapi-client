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
 * @interface Header
 */
export interface Header {
    /**
     * 
     * @type {Array<string>}
     * @memberof Header
     */
    files?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Header
     */
    secrets?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Header
     */
    values?: Array<string>;
}

/**
 * Check if a given object implements the Header interface.
 */
export function instanceOfHeader(value: object): value is Header {
    return true;
}

export function HeaderFromJSON(json: any): Header {
    return HeaderFromJSONTyped(json, false);
}

export function HeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Header {
    if (json == null) {
        return json;
    }
    return {
        
        'files': json['files'] == null ? undefined : json['files'],
        'secrets': json['secrets'] == null ? undefined : json['secrets'],
        'values': json['values'] == null ? undefined : json['values'],
    };
}

export function HeaderToJSON(json: any): Header {
    return HeaderToJSONTyped(json, false);
}

export function HeaderToJSONTyped(value?: Header | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'files': value['files'],
        'secrets': value['secrets'],
        'values': value['values'],
    };
}

