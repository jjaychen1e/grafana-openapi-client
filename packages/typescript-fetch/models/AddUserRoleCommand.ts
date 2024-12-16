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
 * @interface AddUserRoleCommand
 */
export interface AddUserRoleCommand {
    /**
     * 
     * @type {boolean}
     * @memberof AddUserRoleCommand
     */
    global?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AddUserRoleCommand
     */
    roleUid?: string;
}

/**
 * Check if a given object implements the AddUserRoleCommand interface.
 */
export function instanceOfAddUserRoleCommand(value: object): value is AddUserRoleCommand {
    return true;
}

export function AddUserRoleCommandFromJSON(json: any): AddUserRoleCommand {
    return AddUserRoleCommandFromJSONTyped(json, false);
}

export function AddUserRoleCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddUserRoleCommand {
    if (json == null) {
        return json;
    }
    return {
        
        'global': json['global'] == null ? undefined : json['global'],
        'roleUid': json['roleUid'] == null ? undefined : json['roleUid'],
    };
}

export function AddUserRoleCommandToJSON(json: any): AddUserRoleCommand {
    return AddUserRoleCommandToJSONTyped(json, false);
}

export function AddUserRoleCommandToJSONTyped(value?: AddUserRoleCommand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'global': value['global'],
        'roleUid': value['roleUid'],
    };
}

