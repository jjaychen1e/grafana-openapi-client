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
 * @interface TeamGroupDTO
 */
export interface TeamGroupDTO {
    /**
     * 
     * @type {string}
     * @memberof TeamGroupDTO
     */
    groupId?: string;
    /**
     * 
     * @type {number}
     * @memberof TeamGroupDTO
     */
    orgId?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamGroupDTO
     */
    teamId?: number;
}

/**
 * Check if a given object implements the TeamGroupDTO interface.
 */
export function instanceOfTeamGroupDTO(value: object): value is TeamGroupDTO {
    return true;
}

export function TeamGroupDTOFromJSON(json: any): TeamGroupDTO {
    return TeamGroupDTOFromJSONTyped(json, false);
}

export function TeamGroupDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeamGroupDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'groupId': json['groupId'] == null ? undefined : json['groupId'],
        'orgId': json['orgId'] == null ? undefined : json['orgId'],
        'teamId': json['teamId'] == null ? undefined : json['teamId'],
    };
}

export function TeamGroupDTOToJSON(json: any): TeamGroupDTO {
    return TeamGroupDTOToJSONTyped(json, false);
}

export function TeamGroupDTOToJSONTyped(value?: TeamGroupDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'groupId': value['groupId'],
        'orgId': value['orgId'],
        'teamId': value['teamId'],
    };
}
