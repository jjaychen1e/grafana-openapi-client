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
 * @interface NewApiKeyResult
 */
export interface NewApiKeyResult {
    /**
     * 
     * @type {number}
     * @memberof NewApiKeyResult
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof NewApiKeyResult
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof NewApiKeyResult
     */
    name?: string;
}

/**
 * Check if a given object implements the NewApiKeyResult interface.
 */
export function instanceOfNewApiKeyResult(value: object): value is NewApiKeyResult {
    return true;
}

export function NewApiKeyResultFromJSON(json: any): NewApiKeyResult {
    return NewApiKeyResultFromJSONTyped(json, false);
}

export function NewApiKeyResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewApiKeyResult {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'key': json['key'] == null ? undefined : json['key'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function NewApiKeyResultToJSON(json: any): NewApiKeyResult {
    return NewApiKeyResultToJSONTyped(json, false);
}

export function NewApiKeyResultToJSONTyped(value?: NewApiKeyResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'key': value['key'],
        'name': value['name'],
    };
}

