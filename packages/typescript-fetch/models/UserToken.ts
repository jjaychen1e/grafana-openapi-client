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
 * UserToken represents a user token
 * @export
 * @interface UserToken
 */
export interface UserToken {
    /**
     * 
     * @type {string}
     * @memberof UserToken
     */
    authToken?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserToken
     */
    authTokenSeen?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserToken
     */
    clientIp?: string;
    /**
     * 
     * @type {number}
     * @memberof UserToken
     */
    createdAt?: number;
    /**
     * 
     * @type {number}
     * @memberof UserToken
     */
    externalSessionId?: number;
    /**
     * 
     * @type {number}
     * @memberof UserToken
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof UserToken
     */
    prevAuthToken?: string;
    /**
     * 
     * @type {number}
     * @memberof UserToken
     */
    revokedAt?: number;
    /**
     * 
     * @type {number}
     * @memberof UserToken
     */
    rotatedAt?: number;
    /**
     * 
     * @type {number}
     * @memberof UserToken
     */
    seenAt?: number;
    /**
     * 
     * @type {string}
     * @memberof UserToken
     */
    unhashedToken?: string;
    /**
     * 
     * @type {number}
     * @memberof UserToken
     */
    updatedAt?: number;
    /**
     * 
     * @type {string}
     * @memberof UserToken
     */
    userAgent?: string;
    /**
     * 
     * @type {number}
     * @memberof UserToken
     */
    userId?: number;
}

/**
 * Check if a given object implements the UserToken interface.
 */
export function instanceOfUserToken(value: object): value is UserToken {
    return true;
}

export function UserTokenFromJSON(json: any): UserToken {
    return UserTokenFromJSONTyped(json, false);
}

export function UserTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserToken {
    if (json == null) {
        return json;
    }
    return {
        
        'authToken': json['AuthToken'] == null ? undefined : json['AuthToken'],
        'authTokenSeen': json['AuthTokenSeen'] == null ? undefined : json['AuthTokenSeen'],
        'clientIp': json['ClientIp'] == null ? undefined : json['ClientIp'],
        'createdAt': json['CreatedAt'] == null ? undefined : json['CreatedAt'],
        'externalSessionId': json['ExternalSessionId'] == null ? undefined : json['ExternalSessionId'],
        'id': json['Id'] == null ? undefined : json['Id'],
        'prevAuthToken': json['PrevAuthToken'] == null ? undefined : json['PrevAuthToken'],
        'revokedAt': json['RevokedAt'] == null ? undefined : json['RevokedAt'],
        'rotatedAt': json['RotatedAt'] == null ? undefined : json['RotatedAt'],
        'seenAt': json['SeenAt'] == null ? undefined : json['SeenAt'],
        'unhashedToken': json['UnhashedToken'] == null ? undefined : json['UnhashedToken'],
        'updatedAt': json['UpdatedAt'] == null ? undefined : json['UpdatedAt'],
        'userAgent': json['UserAgent'] == null ? undefined : json['UserAgent'],
        'userId': json['UserId'] == null ? undefined : json['UserId'],
    };
}

export function UserTokenToJSON(json: any): UserToken {
    return UserTokenToJSONTyped(json, false);
}

export function UserTokenToJSONTyped(value?: UserToken | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'AuthToken': value['authToken'],
        'AuthTokenSeen': value['authTokenSeen'],
        'ClientIp': value['clientIp'],
        'CreatedAt': value['createdAt'],
        'ExternalSessionId': value['externalSessionId'],
        'Id': value['id'],
        'PrevAuthToken': value['prevAuthToken'],
        'RevokedAt': value['revokedAt'],
        'RotatedAt': value['rotatedAt'],
        'SeenAt': value['seenAt'],
        'UnhashedToken': value['unhashedToken'],
        'UpdatedAt': value['updatedAt'],
        'UserAgent': value['userAgent'],
        'UserId': value['userId'],
    };
}
