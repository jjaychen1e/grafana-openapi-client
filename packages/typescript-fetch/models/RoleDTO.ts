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
 * @interface RoleDTO
 */
export interface RoleDTO {
    /**
     * 
     * @type {Date}
     * @memberof RoleDTO
     */
    created?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof RoleDTO
     */
    delegatable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RoleDTO
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RoleDTO
     */
    displayName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RoleDTO
     */
    global?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RoleDTO
     */
    group?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RoleDTO
     */
    hidden?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RoleDTO
     */
    name?: string;
    /**
     * 
     * @type {Array<Permission>}
     * @memberof RoleDTO
     */
    permissions?: Array<Permission>;
    /**
     * 
     * @type {string}
     * @memberof RoleDTO
     */
    uid?: string;
    /**
     * 
     * @type {Date}
     * @memberof RoleDTO
     */
    updated?: Date;
    /**
     * 
     * @type {number}
     * @memberof RoleDTO
     */
    version?: number;
}

/**
 * Check if a given object implements the RoleDTO interface.
 */
export function instanceOfRoleDTO(value: object): value is RoleDTO {
    return true;
}

export function RoleDTOFromJSON(json: any): RoleDTO {
    return RoleDTOFromJSONTyped(json, false);
}

export function RoleDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoleDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'created': json['created'] == null ? undefined : (new Date(json['created'])),
        'delegatable': json['delegatable'] == null ? undefined : json['delegatable'],
        'description': json['description'] == null ? undefined : json['description'],
        'displayName': json['displayName'] == null ? undefined : json['displayName'],
        'global': json['global'] == null ? undefined : json['global'],
        'group': json['group'] == null ? undefined : json['group'],
        'hidden': json['hidden'] == null ? undefined : json['hidden'],
        'name': json['name'] == null ? undefined : json['name'],
        'permissions': json['permissions'] == null ? undefined : ((json['permissions'] as Array<any>).map(PermissionFromJSON)),
        'uid': json['uid'] == null ? undefined : json['uid'],
        'updated': json['updated'] == null ? undefined : (new Date(json['updated'])),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function RoleDTOToJSON(json: any): RoleDTO {
    return RoleDTOToJSONTyped(json, false);
}

export function RoleDTOToJSONTyped(value?: RoleDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'created': value['created'] == null ? undefined : ((value['created']).toISOString()),
        'delegatable': value['delegatable'],
        'description': value['description'],
        'displayName': value['displayName'],
        'global': value['global'],
        'group': value['group'],
        'hidden': value['hidden'],
        'name': value['name'],
        'permissions': value['permissions'] == null ? undefined : ((value['permissions'] as Array<any>).map(PermissionToJSON)),
        'uid': value['uid'],
        'updated': value['updated'] == null ? undefined : ((value['updated']).toISOString()),
        'version': value['version'],
    };
}

