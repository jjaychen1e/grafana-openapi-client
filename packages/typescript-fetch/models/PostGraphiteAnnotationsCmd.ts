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
 * @interface PostGraphiteAnnotationsCmd
 */
export interface PostGraphiteAnnotationsCmd {
    /**
     * 
     * @type {string}
     * @memberof PostGraphiteAnnotationsCmd
     */
    data?: string;
    /**
     * 
     * @type {object}
     * @memberof PostGraphiteAnnotationsCmd
     */
    tags?: object;
    /**
     * 
     * @type {string}
     * @memberof PostGraphiteAnnotationsCmd
     */
    what?: string;
    /**
     * 
     * @type {number}
     * @memberof PostGraphiteAnnotationsCmd
     */
    when?: number;
}

/**
 * Check if a given object implements the PostGraphiteAnnotationsCmd interface.
 */
export function instanceOfPostGraphiteAnnotationsCmd(value: object): value is PostGraphiteAnnotationsCmd {
    return true;
}

export function PostGraphiteAnnotationsCmdFromJSON(json: any): PostGraphiteAnnotationsCmd {
    return PostGraphiteAnnotationsCmdFromJSONTyped(json, false);
}

export function PostGraphiteAnnotationsCmdFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostGraphiteAnnotationsCmd {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : json['data'],
        'tags': json['tags'] == null ? undefined : json['tags'],
        'what': json['what'] == null ? undefined : json['what'],
        'when': json['when'] == null ? undefined : json['when'],
    };
}

export function PostGraphiteAnnotationsCmdToJSON(json: any): PostGraphiteAnnotationsCmd {
    return PostGraphiteAnnotationsCmdToJSONTyped(json, false);
}

export function PostGraphiteAnnotationsCmdToJSONTyped(value?: PostGraphiteAnnotationsCmd | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'],
        'tags': value['tags'],
        'what': value['what'],
        'when': value['when'],
    };
}

