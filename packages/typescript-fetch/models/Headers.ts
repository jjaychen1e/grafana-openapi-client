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
import type { Header } from './Header.js';
import {
    HeaderFromJSON,
    HeaderFromJSONTyped,
    HeaderToJSON,
    HeaderToJSONTyped,
} from './Header.js';

/**
 * 
 * @export
 * @interface Headers
 */
export interface Headers {
    /**
     * 
     * @type {{ [key: string]: Header; }}
     * @memberof Headers
     */
    headers?: { [key: string]: Header; };
}

/**
 * Check if a given object implements the Headers interface.
 */
export function instanceOfHeaders(value: object): value is Headers {
    return true;
}

export function HeadersFromJSON(json: any): Headers {
    return HeadersFromJSONTyped(json, false);
}

export function HeadersFromJSONTyped(json: any, ignoreDiscriminator: boolean): Headers {
    if (json == null) {
        return json;
    }
    return {
        
        'headers': json['Headers'] == null ? undefined : (mapValues(json['Headers'], HeaderFromJSON)),
    };
}

export function HeadersToJSON(json: any): Headers {
    return HeadersToJSONTyped(json, false);
}

export function HeadersToJSONTyped(value?: Headers | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Headers': value['headers'] == null ? undefined : (mapValues(value['headers'], HeaderToJSON)),
    };
}

