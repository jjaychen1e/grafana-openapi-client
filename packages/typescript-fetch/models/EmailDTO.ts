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
 * @interface EmailDTO
 */
export interface EmailDTO {
    /**
     * 
     * @type {string}
     * @memberof EmailDTO
     */
    recipient?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailDTO
     */
    uid?: string;
}

/**
 * Check if a given object implements the EmailDTO interface.
 */
export function instanceOfEmailDTO(value: object): value is EmailDTO {
    return true;
}

export function EmailDTOFromJSON(json: any): EmailDTO {
    return EmailDTOFromJSONTyped(json, false);
}

export function EmailDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'recipient': json['recipient'] == null ? undefined : json['recipient'],
        'uid': json['uid'] == null ? undefined : json['uid'],
    };
}

export function EmailDTOToJSON(json: any): EmailDTO {
    return EmailDTOToJSONTyped(json, false);
}

export function EmailDTOToJSONTyped(value?: EmailDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'recipient': value['recipient'],
        'uid': value['uid'],
    };
}
