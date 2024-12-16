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
 * @interface RolesSearchQuery
 */
export interface RolesSearchQuery {
    /**
     * 
     * @type {boolean}
     * @memberof RolesSearchQuery
     */
    includeHidden?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RolesSearchQuery
     */
    orgId?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof RolesSearchQuery
     */
    teamIds?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof RolesSearchQuery
     */
    userIds?: Array<number>;
}

/**
 * Check if a given object implements the RolesSearchQuery interface.
 */
export function instanceOfRolesSearchQuery(value: object): value is RolesSearchQuery {
    return true;
}

export function RolesSearchQueryFromJSON(json: any): RolesSearchQuery {
    return RolesSearchQueryFromJSONTyped(json, false);
}

export function RolesSearchQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): RolesSearchQuery {
    if (json == null) {
        return json;
    }
    return {
        
        'includeHidden': json['includeHidden'] == null ? undefined : json['includeHidden'],
        'orgId': json['orgId'] == null ? undefined : json['orgId'],
        'teamIds': json['teamIds'] == null ? undefined : json['teamIds'],
        'userIds': json['userIds'] == null ? undefined : json['userIds'],
    };
}

export function RolesSearchQueryToJSON(json: any): RolesSearchQuery {
    return RolesSearchQueryToJSONTyped(json, false);
}

export function RolesSearchQueryToJSONTyped(value?: RolesSearchQuery | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'includeHidden': value['includeHidden'],
        'orgId': value['orgId'],
        'teamIds': value['teamIds'],
        'userIds': value['userIds'],
    };
}

