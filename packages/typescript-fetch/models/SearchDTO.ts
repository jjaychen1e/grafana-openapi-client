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
 * @interface SearchDTO
 */
export interface SearchDTO {
    /**
     * 
     * @type {string}
     * @memberof SearchDTO
     */
    action?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchDTO
     */
    basicRole?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SearchDTO
     */
    onlyRoles?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SearchDTO
     */
    roleName?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchDTO
     */
    scope?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchDTO
     */
    teamId?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchDTO
     */
    userId?: string;
}

/**
 * Check if a given object implements the SearchDTO interface.
 */
export function instanceOfSearchDTO(value: object): value is SearchDTO {
    return true;
}

export function SearchDTOFromJSON(json: any): SearchDTO {
    return SearchDTOFromJSONTyped(json, false);
}

export function SearchDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'action': json['action'] == null ? undefined : json['action'],
        'basicRole': json['basicRole'] == null ? undefined : json['basicRole'],
        'onlyRoles': json['onlyRoles'] == null ? undefined : json['onlyRoles'],
        'roleName': json['roleName'] == null ? undefined : json['roleName'],
        'scope': json['scope'] == null ? undefined : json['scope'],
        'teamId': json['teamId'] == null ? undefined : json['teamId'],
        'userId': json['userId'] == null ? undefined : json['userId'],
    };
}

export function SearchDTOToJSON(json: any): SearchDTO {
    return SearchDTOToJSONTyped(json, false);
}

export function SearchDTOToJSONTyped(value?: SearchDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'action': value['action'],
        'basicRole': value['basicRole'],
        'onlyRoles': value['onlyRoles'],
        'roleName': value['roleName'],
        'scope': value['scope'],
        'teamId': value['teamId'],
        'userId': value['userId'],
    };
}
