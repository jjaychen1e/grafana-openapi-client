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
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
    AddressToJSONTyped,
} from './Address';

/**
 * 
 * @export
 * @interface OrgDetailsDTO
 */
export interface OrgDetailsDTO {
    /**
     * 
     * @type {Address}
     * @memberof OrgDetailsDTO
     */
    address?: Address;
    /**
     * 
     * @type {number}
     * @memberof OrgDetailsDTO
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof OrgDetailsDTO
     */
    name?: string;
}

/**
 * Check if a given object implements the OrgDetailsDTO interface.
 */
export function instanceOfOrgDetailsDTO(value: object): value is OrgDetailsDTO {
    return true;
}

export function OrgDetailsDTOFromJSON(json: any): OrgDetailsDTO {
    return OrgDetailsDTOFromJSONTyped(json, false);
}

export function OrgDetailsDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrgDetailsDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'] == null ? undefined : AddressFromJSON(json['address']),
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function OrgDetailsDTOToJSON(json: any): OrgDetailsDTO {
    return OrgDetailsDTOToJSONTyped(json, false);
}

export function OrgDetailsDTOToJSONTyped(value?: OrgDetailsDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address': AddressToJSON(value['address']),
        'id': value['id'],
        'name': value['name'],
    };
}

