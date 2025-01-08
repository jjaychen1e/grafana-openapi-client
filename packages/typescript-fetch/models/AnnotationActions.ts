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
 * @interface AnnotationActions
 */
export interface AnnotationActions {
    /**
     * 
     * @type {boolean}
     * @memberof AnnotationActions
     */
    canAdd?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AnnotationActions
     */
    canDelete?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AnnotationActions
     */
    canEdit?: boolean;
}

/**
 * Check if a given object implements the AnnotationActions interface.
 */
export function instanceOfAnnotationActions(value: object): value is AnnotationActions {
    return true;
}

export function AnnotationActionsFromJSON(json: any): AnnotationActions {
    return AnnotationActionsFromJSONTyped(json, false);
}

export function AnnotationActionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnnotationActions {
    if (json == null) {
        return json;
    }
    return {
        
        'canAdd': json['canAdd'] == null ? undefined : json['canAdd'],
        'canDelete': json['canDelete'] == null ? undefined : json['canDelete'],
        'canEdit': json['canEdit'] == null ? undefined : json['canEdit'],
    };
}

export function AnnotationActionsToJSON(json: any): AnnotationActions {
    return AnnotationActionsToJSONTyped(json, false);
}

export function AnnotationActionsToJSONTyped(value?: AnnotationActions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'canAdd': value['canAdd'],
        'canDelete': value['canDelete'],
        'canEdit': value['canEdit'],
    };
}

