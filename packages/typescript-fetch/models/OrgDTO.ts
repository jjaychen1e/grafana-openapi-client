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
 * @interface OrgDTO
 */
export interface OrgDTO {
    /**
     * 
     * @type {number}
     * @memberof OrgDTO
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof OrgDTO
     */
    name?: string;
}

/**
 * Check if a given object implements the OrgDTO interface.
 */
export function instanceOfOrgDTO(value: object): value is OrgDTO {
    return true;
}

export function OrgDTOFromJSON(json: any): OrgDTO {
    return OrgDTOFromJSONTyped(json, false);
}

export function OrgDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrgDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function OrgDTOToJSON(json: any): OrgDTO {
    return OrgDTOToJSONTyped(json, false);
}

export function OrgDTOToJSONTyped(value?: OrgDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
    };
}

