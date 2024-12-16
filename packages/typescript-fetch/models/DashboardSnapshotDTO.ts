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
 * DashboardSnapshotDTO without dashboard map
 * @export
 * @interface DashboardSnapshotDTO
 */
export interface DashboardSnapshotDTO {
    /**
     * 
     * @type {Date}
     * @memberof DashboardSnapshotDTO
     */
    created?: Date;
    /**
     * 
     * @type {Date}
     * @memberof DashboardSnapshotDTO
     */
    expires?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof DashboardSnapshotDTO
     */
    external?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DashboardSnapshotDTO
     */
    externalUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof DashboardSnapshotDTO
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof DashboardSnapshotDTO
     */
    name?: string;
    /**
     * 
     * @type {Date}
     * @memberof DashboardSnapshotDTO
     */
    updated?: Date;
}

/**
 * Check if a given object implements the DashboardSnapshotDTO interface.
 */
export function instanceOfDashboardSnapshotDTO(value: object): value is DashboardSnapshotDTO {
    return true;
}

export function DashboardSnapshotDTOFromJSON(json: any): DashboardSnapshotDTO {
    return DashboardSnapshotDTOFromJSONTyped(json, false);
}

export function DashboardSnapshotDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): DashboardSnapshotDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'created': json['created'] == null ? undefined : (new Date(json['created'])),
        'expires': json['expires'] == null ? undefined : (new Date(json['expires'])),
        'external': json['external'] == null ? undefined : json['external'],
        'externalUrl': json['externalUrl'] == null ? undefined : json['externalUrl'],
        'key': json['key'] == null ? undefined : json['key'],
        'name': json['name'] == null ? undefined : json['name'],
        'updated': json['updated'] == null ? undefined : (new Date(json['updated'])),
    };
}

export function DashboardSnapshotDTOToJSON(json: any): DashboardSnapshotDTO {
    return DashboardSnapshotDTOToJSONTyped(json, false);
}

export function DashboardSnapshotDTOToJSONTyped(value?: DashboardSnapshotDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'created': value['created'] == null ? undefined : ((value['created']).toISOString()),
        'expires': value['expires'] == null ? undefined : ((value['expires']).toISOString()),
        'external': value['external'],
        'externalUrl': value['externalUrl'],
        'key': value['key'],
        'name': value['name'],
        'updated': value['updated'] == null ? undefined : ((value['updated']).toISOString()),
    };
}

