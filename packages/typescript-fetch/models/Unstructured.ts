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
 * Unstructured allows objects that do not have Golang structs registered to be manipulated
 * generically.
 * @export
 * @interface Unstructured
 */
export interface Unstructured {
    /**
     * Object is a JSON compatible map with string, float, int, bool, []interface{},
     * or map[string]interface{} children.
     * @type {{ [key: string]: object; }}
     * @memberof Unstructured
     */
    object?: { [key: string]: object; };
}

/**
 * Check if a given object implements the Unstructured interface.
 */
export function instanceOfUnstructured(value: object): value is Unstructured {
    return true;
}

export function UnstructuredFromJSON(json: any): Unstructured {
    return UnstructuredFromJSONTyped(json, false);
}

export function UnstructuredFromJSONTyped(json: any, ignoreDiscriminator: boolean): Unstructured {
    if (json == null) {
        return json;
    }
    return {
        
        'object': json['Object'] == null ? undefined : json['Object'],
    };
}

export function UnstructuredToJSON(json: any): Unstructured {
    return UnstructuredToJSONTyped(json, false);
}

export function UnstructuredToJSONTyped(value?: Unstructured | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Object': value['object'],
    };
}
