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
 * @interface MigrateDataResponseItemDTO
 */
export interface MigrateDataResponseItemDTO {
    /**
     * 
     * @type {string}
     * @memberof MigrateDataResponseItemDTO
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof MigrateDataResponseItemDTO
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof MigrateDataResponseItemDTO
     */
    parentName?: string;
    /**
     * 
     * @type {string}
     * @memberof MigrateDataResponseItemDTO
     */
    refId: string;
    /**
     * 
     * @type {string}
     * @memberof MigrateDataResponseItemDTO
     */
    status: MigrateDataResponseItemDTOStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof MigrateDataResponseItemDTO
     */
    type: MigrateDataResponseItemDTOTypeEnum;
}


/**
 * @export
 */
export const MigrateDataResponseItemDTOStatusEnum = {
    Ok: 'OK',
    Warning: 'WARNING',
    Error: 'ERROR',
    Pending: 'PENDING',
    Unknown: 'UNKNOWN'
} as const;
export type MigrateDataResponseItemDTOStatusEnum = typeof MigrateDataResponseItemDTOStatusEnum[keyof typeof MigrateDataResponseItemDTOStatusEnum];

/**
 * @export
 */
export const MigrateDataResponseItemDTOTypeEnum = {
    Dashboard: 'DASHBOARD',
    Datasource: 'DATASOURCE',
    Folder: 'FOLDER',
    LibraryElement: 'LIBRARY_ELEMENT',
    AlertRule: 'ALERT_RULE',
    ContactPoint: 'CONTACT_POINT',
    NotificationPolicy: 'NOTIFICATION_POLICY',
    NotificationTemplate: 'NOTIFICATION_TEMPLATE',
    MuteTiming: 'MUTE_TIMING'
} as const;
export type MigrateDataResponseItemDTOTypeEnum = typeof MigrateDataResponseItemDTOTypeEnum[keyof typeof MigrateDataResponseItemDTOTypeEnum];


/**
 * Check if a given object implements the MigrateDataResponseItemDTO interface.
 */
export function instanceOfMigrateDataResponseItemDTO(value: object): value is MigrateDataResponseItemDTO {
    if (!('refId' in value) || value['refId'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function MigrateDataResponseItemDTOFromJSON(json: any): MigrateDataResponseItemDTO {
    return MigrateDataResponseItemDTOFromJSONTyped(json, false);
}

export function MigrateDataResponseItemDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MigrateDataResponseItemDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'name': json['name'] == null ? undefined : json['name'],
        'parentName': json['parentName'] == null ? undefined : json['parentName'],
        'refId': json['refId'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function MigrateDataResponseItemDTOToJSON(json: any): MigrateDataResponseItemDTO {
    return MigrateDataResponseItemDTOToJSONTyped(json, false);
}

export function MigrateDataResponseItemDTOToJSONTyped(value?: MigrateDataResponseItemDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'name': value['name'],
        'parentName': value['parentName'],
        'refId': value['refId'],
        'status': value['status'],
        'type': value['type'],
    };
}
