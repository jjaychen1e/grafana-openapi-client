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
 * @interface MigrateDataResponseListDTO
 */
export interface MigrateDataResponseListDTO {
    /**
     * 
     * @type {string}
     * @memberof MigrateDataResponseListDTO
     */
    uid?: string;
}

/**
 * Check if a given object implements the MigrateDataResponseListDTO interface.
 */
export function instanceOfMigrateDataResponseListDTO(value: object): value is MigrateDataResponseListDTO {
    return true;
}

export function MigrateDataResponseListDTOFromJSON(json: any): MigrateDataResponseListDTO {
    return MigrateDataResponseListDTOFromJSONTyped(json, false);
}

export function MigrateDataResponseListDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MigrateDataResponseListDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'uid': json['uid'] == null ? undefined : json['uid'],
    };
}

export function MigrateDataResponseListDTOToJSON(json: any): MigrateDataResponseListDTO {
    return MigrateDataResponseListDTOToJSONTyped(json, false);
}

export function MigrateDataResponseListDTOToJSONTyped(value?: MigrateDataResponseListDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'uid': value['uid'],
    };
}

