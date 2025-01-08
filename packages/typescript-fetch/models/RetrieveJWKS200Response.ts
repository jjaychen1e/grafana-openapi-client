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
import type { JSONWebKey } from './JSONWebKey.js';
import {
    JSONWebKeyFromJSON,
    JSONWebKeyFromJSONTyped,
    JSONWebKeyToJSON,
    JSONWebKeyToJSONTyped,
} from './JSONWebKey.js';

/**
 * 
 * @export
 * @interface RetrieveJWKS200Response
 */
export interface RetrieveJWKS200Response {
    /**
     * 
     * @type {Array<JSONWebKey>}
     * @memberof RetrieveJWKS200Response
     */
    keys?: Array<JSONWebKey>;
}

/**
 * Check if a given object implements the RetrieveJWKS200Response interface.
 */
export function instanceOfRetrieveJWKS200Response(value: object): value is RetrieveJWKS200Response {
    return true;
}

export function RetrieveJWKS200ResponseFromJSON(json: any): RetrieveJWKS200Response {
    return RetrieveJWKS200ResponseFromJSONTyped(json, false);
}

export function RetrieveJWKS200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetrieveJWKS200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'keys': json['keys'] == null ? undefined : ((json['keys'] as Array<any>).map(JSONWebKeyFromJSON)),
    };
}

export function RetrieveJWKS200ResponseToJSON(json: any): RetrieveJWKS200Response {
    return RetrieveJWKS200ResponseToJSONTyped(json, false);
}

export function RetrieveJWKS200ResponseToJSONTyped(value?: RetrieveJWKS200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'keys': value['keys'] == null ? undefined : ((value['keys'] as Array<any>).map(JSONWebKeyToJSON)),
    };
}

