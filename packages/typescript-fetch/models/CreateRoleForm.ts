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
import type { Permission } from './Permission.js';
import {
    PermissionFromJSON,
    PermissionFromJSONTyped,
    PermissionToJSON,
    PermissionToJSONTyped,
} from './Permission.js';

/**
 * 
 * @export
 * @interface CreateRoleForm
 */
export interface CreateRoleForm {
    /**
     * 
     * @type {string}
     * @memberof CreateRoleForm
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateRoleForm
     */
    displayName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateRoleForm
     */
    global?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateRoleForm
     */
    group?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateRoleForm
     */
    hidden?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateRoleForm
     */
    name?: string;
    /**
     * 
     * @type {Array<Permission>}
     * @memberof CreateRoleForm
     */
    permissions?: Array<Permission>;
    /**
     * 
     * @type {string}
     * @memberof CreateRoleForm
     */
    uid?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateRoleForm
     */
    version?: number;
}

/**
 * Check if a given object implements the CreateRoleForm interface.
 */
export function instanceOfCreateRoleForm(value: object): value is CreateRoleForm {
    return true;
}

export function CreateRoleFormFromJSON(json: any): CreateRoleForm {
    return CreateRoleFormFromJSONTyped(json, false);
}

export function CreateRoleFormFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateRoleForm {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'displayName': json['displayName'] == null ? undefined : json['displayName'],
        'global': json['global'] == null ? undefined : json['global'],
        'group': json['group'] == null ? undefined : json['group'],
        'hidden': json['hidden'] == null ? undefined : json['hidden'],
        'name': json['name'] == null ? undefined : json['name'],
        'permissions': json['permissions'] == null ? undefined : ((json['permissions'] as Array<any>).map(PermissionFromJSON)),
        'uid': json['uid'] == null ? undefined : json['uid'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function CreateRoleFormToJSON(json: any): CreateRoleForm {
    return CreateRoleFormToJSONTyped(json, false);
}

export function CreateRoleFormToJSONTyped(value?: CreateRoleForm | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'description': value['description'],
        'displayName': value['displayName'],
        'global': value['global'],
        'group': value['group'],
        'hidden': value['hidden'],
        'name': value['name'],
        'permissions': value['permissions'] == null ? undefined : ((value['permissions'] as Array<any>).map(PermissionToJSON)),
        'uid': value['uid'],
        'version': value['version'],
    };
}
