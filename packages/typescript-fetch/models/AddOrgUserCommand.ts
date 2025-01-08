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
 * @interface AddOrgUserCommand
 */
export interface AddOrgUserCommand {
    /**
     * 
     * @type {string}
     * @memberof AddOrgUserCommand
     */
    loginOrEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof AddOrgUserCommand
     */
    role?: AddOrgUserCommandRoleEnum;
}


/**
 * @export
 */
export const AddOrgUserCommandRoleEnum = {
    None: 'None',
    Viewer: 'Viewer',
    Editor: 'Editor',
    Admin: 'Admin'
} as const;
export type AddOrgUserCommandRoleEnum = typeof AddOrgUserCommandRoleEnum[keyof typeof AddOrgUserCommandRoleEnum];


/**
 * Check if a given object implements the AddOrgUserCommand interface.
 */
export function instanceOfAddOrgUserCommand(value: object): value is AddOrgUserCommand {
    return true;
}

export function AddOrgUserCommandFromJSON(json: any): AddOrgUserCommand {
    return AddOrgUserCommandFromJSONTyped(json, false);
}

export function AddOrgUserCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddOrgUserCommand {
    if (json == null) {
        return json;
    }
    return {
        
        'loginOrEmail': json['loginOrEmail'] == null ? undefined : json['loginOrEmail'],
        'role': json['role'] == null ? undefined : json['role'],
    };
}

export function AddOrgUserCommandToJSON(json: any): AddOrgUserCommand {
    return AddOrgUserCommandToJSONTyped(json, false);
}

export function AddOrgUserCommandToJSONTyped(value?: AddOrgUserCommand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'loginOrEmail': value['loginOrEmail'],
        'role': value['role'],
    };
}

