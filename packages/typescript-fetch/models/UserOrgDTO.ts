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
 * @interface UserOrgDTO
 */
export interface UserOrgDTO {
    /**
     * 
     * @type {string}
     * @memberof UserOrgDTO
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof UserOrgDTO
     */
    orgId?: number;
    /**
     * 
     * @type {string}
     * @memberof UserOrgDTO
     */
    role?: UserOrgDTORoleEnum;
}


/**
 * @export
 */
export const UserOrgDTORoleEnum = {
    None: 'None',
    Viewer: 'Viewer',
    Editor: 'Editor',
    Admin: 'Admin'
} as const;
export type UserOrgDTORoleEnum = typeof UserOrgDTORoleEnum[keyof typeof UserOrgDTORoleEnum];


/**
 * Check if a given object implements the UserOrgDTO interface.
 */
export function instanceOfUserOrgDTO(value: object): value is UserOrgDTO {
    return true;
}

export function UserOrgDTOFromJSON(json: any): UserOrgDTO {
    return UserOrgDTOFromJSONTyped(json, false);
}

export function UserOrgDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserOrgDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'orgId': json['orgId'] == null ? undefined : json['orgId'],
        'role': json['role'] == null ? undefined : json['role'],
    };
}

export function UserOrgDTOToJSON(json: any): UserOrgDTO {
    return UserOrgDTOToJSONTyped(json, false);
}

export function UserOrgDTOToJSONTyped(value?: UserOrgDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'orgId': value['orgId'],
        'role': value['role'],
    };
}

