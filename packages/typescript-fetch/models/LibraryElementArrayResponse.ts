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
import type { LibraryElementDTO } from './LibraryElementDTO.js';
import {
    LibraryElementDTOFromJSON,
    LibraryElementDTOFromJSONTyped,
    LibraryElementDTOToJSON,
    LibraryElementDTOToJSONTyped,
} from './LibraryElementDTO.js';

/**
 * 
 * @export
 * @interface LibraryElementArrayResponse
 */
export interface LibraryElementArrayResponse {
    /**
     * 
     * @type {Array<LibraryElementDTO>}
     * @memberof LibraryElementArrayResponse
     */
    result?: Array<LibraryElementDTO>;
}

/**
 * Check if a given object implements the LibraryElementArrayResponse interface.
 */
export function instanceOfLibraryElementArrayResponse(value: object): value is LibraryElementArrayResponse {
    return true;
}

export function LibraryElementArrayResponseFromJSON(json: any): LibraryElementArrayResponse {
    return LibraryElementArrayResponseFromJSONTyped(json, false);
}

export function LibraryElementArrayResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LibraryElementArrayResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : ((json['result'] as Array<any>).map(LibraryElementDTOFromJSON)),
    };
}

export function LibraryElementArrayResponseToJSON(json: any): LibraryElementArrayResponse {
    return LibraryElementArrayResponseToJSONTyped(json, false);
}

export function LibraryElementArrayResponseToJSONTyped(value?: LibraryElementArrayResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'result': value['result'] == null ? undefined : ((value['result'] as Array<any>).map(LibraryElementDTOToJSON)),
    };
}

