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
import type { AnnotationActions } from './AnnotationActions.js';
import {
    AnnotationActionsFromJSON,
    AnnotationActionsFromJSONTyped,
    AnnotationActionsToJSON,
    AnnotationActionsToJSONTyped,
} from './AnnotationActions.js';

/**
 * 
 * @export
 * @interface AnnotationPermission
 */
export interface AnnotationPermission {
    /**
     * 
     * @type {AnnotationActions}
     * @memberof AnnotationPermission
     */
    dashboard?: AnnotationActions;
    /**
     * 
     * @type {AnnotationActions}
     * @memberof AnnotationPermission
     */
    organization?: AnnotationActions;
}

/**
 * Check if a given object implements the AnnotationPermission interface.
 */
export function instanceOfAnnotationPermission(value: object): value is AnnotationPermission {
    return true;
}

export function AnnotationPermissionFromJSON(json: any): AnnotationPermission {
    return AnnotationPermissionFromJSONTyped(json, false);
}

export function AnnotationPermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnnotationPermission {
    if (json == null) {
        return json;
    }
    return {
        
        'dashboard': json['dashboard'] == null ? undefined : AnnotationActionsFromJSON(json['dashboard']),
        'organization': json['organization'] == null ? undefined : AnnotationActionsFromJSON(json['organization']),
    };
}

export function AnnotationPermissionToJSON(json: any): AnnotationPermission {
    return AnnotationPermissionToJSONTyped(json, false);
}

export function AnnotationPermissionToJSONTyped(value?: AnnotationPermission | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'dashboard': AnnotationActionsToJSON(value['dashboard']),
        'organization': AnnotationActionsToJSON(value['organization']),
    };
}
