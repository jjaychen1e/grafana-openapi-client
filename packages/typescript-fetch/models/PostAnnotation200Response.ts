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
 * @interface PostAnnotation200Response
 */
export interface PostAnnotation200Response {
    /**
     * ID Identifier of the created annotation.
     * @type {number}
     * @memberof PostAnnotation200Response
     */
    id: number;
    /**
     * Message Message of the created annotation.
     * @type {string}
     * @memberof PostAnnotation200Response
     */
    message: string;
}

/**
 * Check if a given object implements the PostAnnotation200Response interface.
 */
export function instanceOfPostAnnotation200Response(value: object): value is PostAnnotation200Response {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function PostAnnotation200ResponseFromJSON(json: any): PostAnnotation200Response {
    return PostAnnotation200ResponseFromJSONTyped(json, false);
}

export function PostAnnotation200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostAnnotation200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'message': json['message'],
    };
}

export function PostAnnotation200ResponseToJSON(json: any): PostAnnotation200Response {
    return PostAnnotation200ResponseToJSONTyped(json, false);
}

export function PostAnnotation200ResponseToJSONTyped(value?: PostAnnotation200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'message': value['message'],
    };
}
