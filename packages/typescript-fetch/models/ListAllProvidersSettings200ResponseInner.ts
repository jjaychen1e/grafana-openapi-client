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
 * @interface ListAllProvidersSettings200ResponseInner
 */
export interface ListAllProvidersSettings200ResponseInner {
    /**
     * 
     * @type {string}
     * @memberof ListAllProvidersSettings200ResponseInner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ListAllProvidersSettings200ResponseInner
     */
    provider?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ListAllProvidersSettings200ResponseInner
     */
    settings?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof ListAllProvidersSettings200ResponseInner
     */
    source?: string;
}

/**
 * Check if a given object implements the ListAllProvidersSettings200ResponseInner interface.
 */
export function instanceOfListAllProvidersSettings200ResponseInner(value: object): value is ListAllProvidersSettings200ResponseInner {
    return true;
}

export function ListAllProvidersSettings200ResponseInnerFromJSON(json: any): ListAllProvidersSettings200ResponseInner {
    return ListAllProvidersSettings200ResponseInnerFromJSONTyped(json, false);
}

export function ListAllProvidersSettings200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListAllProvidersSettings200ResponseInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'provider': json['provider'] == null ? undefined : json['provider'],
        'settings': json['settings'] == null ? undefined : json['settings'],
        'source': json['source'] == null ? undefined : json['source'],
    };
}

export function ListAllProvidersSettings200ResponseInnerToJSON(json: any): ListAllProvidersSettings200ResponseInner {
    return ListAllProvidersSettings200ResponseInnerToJSONTyped(json, false);
}

export function ListAllProvidersSettings200ResponseInnerToJSONTyped(value?: ListAllProvidersSettings200ResponseInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'provider': value['provider'],
        'settings': value['settings'],
        'source': value['source'],
    };
}

