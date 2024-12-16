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
import type { Permission } from './Permission';
import {
    PermissionFromJSON,
    PermissionFromJSONTyped,
    PermissionToJSON,
    PermissionToJSONTyped,
} from './Permission';

/**
 * 
 * @export
 * @interface UpdateRoleCommand
 */
export interface UpdateRoleCommand {
    /**
     * 
     * @type {string}
     * @memberof UpdateRoleCommand
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateRoleCommand
     */
    displayName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateRoleCommand
     */
    global?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateRoleCommand
     */
    group?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateRoleCommand
     */
    hidden?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateRoleCommand
     */
    name?: string;
    /**
     * 
     * @type {Array<Permission>}
     * @memberof UpdateRoleCommand
     */
    permissions?: Array<Permission>;
    /**
     * 
     * @type {number}
     * @memberof UpdateRoleCommand
     */
    version?: number;
}

/**
 * Check if a given object implements the UpdateRoleCommand interface.
 */
export function instanceOfUpdateRoleCommand(value: object): value is UpdateRoleCommand {
    return true;
}

export function UpdateRoleCommandFromJSON(json: any): UpdateRoleCommand {
    return UpdateRoleCommandFromJSONTyped(json, false);
}

export function UpdateRoleCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRoleCommand {
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
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function UpdateRoleCommandToJSON(json: any): UpdateRoleCommand {
    return UpdateRoleCommandToJSONTyped(json, false);
}

export function UpdateRoleCommandToJSONTyped(value?: UpdateRoleCommand | null, ignoreDiscriminator: boolean = false): any {
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
        'version': value['version'],
    };
}

