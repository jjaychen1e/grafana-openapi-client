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
 * @interface SuccessResponseBody
 */
export interface SuccessResponseBody {
    /**
     * 
     * @type {string}
     * @memberof SuccessResponseBody
     */
    message?: string;
}

/**
 * Check if a given object implements the SuccessResponseBody interface.
 */
export function instanceOfSuccessResponseBody(value: object): value is SuccessResponseBody {
    return true;
}

export function SuccessResponseBodyFromJSON(json: any): SuccessResponseBody {
    return SuccessResponseBodyFromJSONTyped(json, false);
}

export function SuccessResponseBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuccessResponseBody {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function SuccessResponseBodyToJSON(json: any): SuccessResponseBody {
    return SuccessResponseBodyToJSONTyped(json, false);
}

export function SuccessResponseBodyToJSONTyped(value?: SuccessResponseBody | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
    };
}
