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
 * @interface UserSearchHitDTO
 */
export interface UserSearchHitDTO {
    /**
     * 
     * @type {Array<string>}
     * @memberof UserSearchHitDTO
     */
    authLabels?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof UserSearchHitDTO
     */
    avatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSearchHitDTO
     */
    email?: string;
    /**
     * 
     * @type {number}
     * @memberof UserSearchHitDTO
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof UserSearchHitDTO
     */
    isAdmin?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserSearchHitDTO
     */
    isDisabled?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof UserSearchHitDTO
     */
    lastSeenAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof UserSearchHitDTO
     */
    lastSeenAtAge?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSearchHitDTO
     */
    login?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSearchHitDTO
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSearchHitDTO
     */
    uid?: string;
}

/**
 * Check if a given object implements the UserSearchHitDTO interface.
 */
export function instanceOfUserSearchHitDTO(value: object): value is UserSearchHitDTO {
    return true;
}

export function UserSearchHitDTOFromJSON(json: any): UserSearchHitDTO {
    return UserSearchHitDTOFromJSONTyped(json, false);
}

export function UserSearchHitDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSearchHitDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'authLabels': json['authLabels'] == null ? undefined : json['authLabels'],
        'avatarUrl': json['avatarUrl'] == null ? undefined : json['avatarUrl'],
        'email': json['email'] == null ? undefined : json['email'],
        'id': json['id'] == null ? undefined : json['id'],
        'isAdmin': json['isAdmin'] == null ? undefined : json['isAdmin'],
        'isDisabled': json['isDisabled'] == null ? undefined : json['isDisabled'],
        'lastSeenAt': json['lastSeenAt'] == null ? undefined : (new Date(json['lastSeenAt'])),
        'lastSeenAtAge': json['lastSeenAtAge'] == null ? undefined : json['lastSeenAtAge'],
        'login': json['login'] == null ? undefined : json['login'],
        'name': json['name'] == null ? undefined : json['name'],
        'uid': json['uid'] == null ? undefined : json['uid'],
    };
}

export function UserSearchHitDTOToJSON(json: any): UserSearchHitDTO {
    return UserSearchHitDTOToJSONTyped(json, false);
}

export function UserSearchHitDTOToJSONTyped(value?: UserSearchHitDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'authLabels': value['authLabels'],
        'avatarUrl': value['avatarUrl'],
        'email': value['email'],
        'id': value['id'],
        'isAdmin': value['isAdmin'],
        'isDisabled': value['isDisabled'],
        'lastSeenAt': value['lastSeenAt'] == null ? undefined : ((value['lastSeenAt']).toISOString()),
        'lastSeenAtAge': value['lastSeenAtAge'],
        'login': value['login'],
        'name': value['name'],
        'uid': value['uid'],
    };
}
