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
import type { TagsDTO } from './TagsDTO.js';
import {
    TagsDTOFromJSON,
    TagsDTOFromJSONTyped,
    TagsDTOToJSON,
    TagsDTOToJSONTyped,
} from './TagsDTO.js';

/**
 * 
 * @export
 * @interface FindTagsResult
 */
export interface FindTagsResult {
    /**
     * 
     * @type {Array<TagsDTO>}
     * @memberof FindTagsResult
     */
    tags?: Array<TagsDTO>;
}

/**
 * Check if a given object implements the FindTagsResult interface.
 */
export function instanceOfFindTagsResult(value: object): value is FindTagsResult {
    return true;
}

export function FindTagsResultFromJSON(json: any): FindTagsResult {
    return FindTagsResultFromJSONTyped(json, false);
}

export function FindTagsResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): FindTagsResult {
    if (json == null) {
        return json;
    }
    return {
        
        'tags': json['tags'] == null ? undefined : ((json['tags'] as Array<any>).map(TagsDTOFromJSON)),
    };
}

export function FindTagsResultToJSON(json: any): FindTagsResult {
    return FindTagsResultToJSONTyped(json, false);
}

export function FindTagsResultToJSONTyped(value?: FindTagsResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'tags': value['tags'] == null ? undefined : ((value['tags'] as Array<any>).map(TagsDTOToJSON)),
    };
}

