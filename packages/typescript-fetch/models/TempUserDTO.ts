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
 * @interface TempUserDTO
 */
export interface TempUserDTO {
    /**
     * 
     * @type {string}
     * @memberof TempUserDTO
     */
    code?: string;
    /**
     * 
     * @type {Date}
     * @memberof TempUserDTO
     */
    createdOn?: Date;
    /**
     * 
     * @type {string}
     * @memberof TempUserDTO
     */
    email?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TempUserDTO
     */
    emailSent?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof TempUserDTO
     */
    emailSentOn?: Date;
    /**
     * 
     * @type {number}
     * @memberof TempUserDTO
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TempUserDTO
     */
    invitedByEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof TempUserDTO
     */
    invitedByLogin?: string;
    /**
     * 
     * @type {string}
     * @memberof TempUserDTO
     */
    invitedByName?: string;
    /**
     * 
     * @type {string}
     * @memberof TempUserDTO
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof TempUserDTO
     */
    orgId?: number;
    /**
     * 
     * @type {string}
     * @memberof TempUserDTO
     */
    role?: TempUserDTORoleEnum;
    /**
     * 
     * @type {string}
     * @memberof TempUserDTO
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof TempUserDTO
     */
    url?: string;
}


/**
 * @export
 */
export const TempUserDTORoleEnum = {
    None: 'None',
    Viewer: 'Viewer',
    Editor: 'Editor',
    Admin: 'Admin'
} as const;
export type TempUserDTORoleEnum = typeof TempUserDTORoleEnum[keyof typeof TempUserDTORoleEnum];


/**
 * Check if a given object implements the TempUserDTO interface.
 */
export function instanceOfTempUserDTO(value: object): value is TempUserDTO {
    return true;
}

export function TempUserDTOFromJSON(json: any): TempUserDTO {
    return TempUserDTOFromJSONTyped(json, false);
}

export function TempUserDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TempUserDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'email': json['email'] == null ? undefined : json['email'],
        'emailSent': json['emailSent'] == null ? undefined : json['emailSent'],
        'emailSentOn': json['emailSentOn'] == null ? undefined : (new Date(json['emailSentOn'])),
        'id': json['id'] == null ? undefined : json['id'],
        'invitedByEmail': json['invitedByEmail'] == null ? undefined : json['invitedByEmail'],
        'invitedByLogin': json['invitedByLogin'] == null ? undefined : json['invitedByLogin'],
        'invitedByName': json['invitedByName'] == null ? undefined : json['invitedByName'],
        'name': json['name'] == null ? undefined : json['name'],
        'orgId': json['orgId'] == null ? undefined : json['orgId'],
        'role': json['role'] == null ? undefined : json['role'],
        'status': json['status'] == null ? undefined : json['status'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function TempUserDTOToJSON(json: any): TempUserDTO {
    return TempUserDTOToJSONTyped(json, false);
}

export function TempUserDTOToJSONTyped(value?: TempUserDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'createdOn': value['createdOn'] == null ? undefined : ((value['createdOn']).toISOString()),
        'email': value['email'],
        'emailSent': value['emailSent'],
        'emailSentOn': value['emailSentOn'] == null ? undefined : ((value['emailSentOn']).toISOString()),
        'id': value['id'],
        'invitedByEmail': value['invitedByEmail'],
        'invitedByLogin': value['invitedByLogin'],
        'invitedByName': value['invitedByName'],
        'name': value['name'],
        'orgId': value['orgId'],
        'role': value['role'],
        'status': value['status'],
        'url': value['url'],
    };
}

