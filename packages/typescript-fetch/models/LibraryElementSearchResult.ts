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
 * @interface LibraryElementSearchResult
 */
export interface LibraryElementSearchResult {
    /**
     * 
     * @type {Array<LibraryElementDTO>}
     * @memberof LibraryElementSearchResult
     */
    elements?: Array<LibraryElementDTO>;
    /**
     * 
     * @type {number}
     * @memberof LibraryElementSearchResult
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof LibraryElementSearchResult
     */
    perPage?: number;
    /**
     * 
     * @type {number}
     * @memberof LibraryElementSearchResult
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the LibraryElementSearchResult interface.
 */
export function instanceOfLibraryElementSearchResult(value: object): value is LibraryElementSearchResult {
    return true;
}

export function LibraryElementSearchResultFromJSON(json: any): LibraryElementSearchResult {
    return LibraryElementSearchResultFromJSONTyped(json, false);
}

export function LibraryElementSearchResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): LibraryElementSearchResult {
    if (json == null) {
        return json;
    }
    return {
        
        'elements': json['elements'] == null ? undefined : ((json['elements'] as Array<any>).map(LibraryElementDTOFromJSON)),
        'page': json['page'] == null ? undefined : json['page'],
        'perPage': json['perPage'] == null ? undefined : json['perPage'],
        'totalCount': json['totalCount'] == null ? undefined : json['totalCount'],
    };
}

export function LibraryElementSearchResultToJSON(json: any): LibraryElementSearchResult {
    return LibraryElementSearchResultToJSONTyped(json, false);
}

export function LibraryElementSearchResultToJSONTyped(value?: LibraryElementSearchResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'elements': value['elements'] == null ? undefined : ((value['elements'] as Array<any>).map(LibraryElementDTOToJSON)),
        'page': value['page'],
        'perPage': value['perPage'],
        'totalCount': value['totalCount'],
    };
}
