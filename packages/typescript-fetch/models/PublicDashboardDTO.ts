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
 * @interface PublicDashboardDTO
 */
export interface PublicDashboardDTO {
    /**
     * 
     * @type {string}
     * @memberof PublicDashboardDTO
     */
    accessToken?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PublicDashboardDTO
     */
    annotationsEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PublicDashboardDTO
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PublicDashboardDTO
     */
    share?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PublicDashboardDTO
     */
    timeSelectionEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PublicDashboardDTO
     */
    uid?: string;
}

/**
 * Check if a given object implements the PublicDashboardDTO interface.
 */
export function instanceOfPublicDashboardDTO(value: object): value is PublicDashboardDTO {
    return true;
}

export function PublicDashboardDTOFromJSON(json: any): PublicDashboardDTO {
    return PublicDashboardDTOFromJSONTyped(json, false);
}

export function PublicDashboardDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicDashboardDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'accessToken': json['accessToken'] == null ? undefined : json['accessToken'],
        'annotationsEnabled': json['annotationsEnabled'] == null ? undefined : json['annotationsEnabled'],
        'isEnabled': json['isEnabled'] == null ? undefined : json['isEnabled'],
        'share': json['share'] == null ? undefined : json['share'],
        'timeSelectionEnabled': json['timeSelectionEnabled'] == null ? undefined : json['timeSelectionEnabled'],
        'uid': json['uid'] == null ? undefined : json['uid'],
    };
}

export function PublicDashboardDTOToJSON(json: any): PublicDashboardDTO {
    return PublicDashboardDTOToJSONTyped(json, false);
}

export function PublicDashboardDTOToJSONTyped(value?: PublicDashboardDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'accessToken': value['accessToken'],
        'annotationsEnabled': value['annotationsEnabled'],
        'isEnabled': value['isEnabled'],
        'share': value['share'],
        'timeSelectionEnabled': value['timeSelectionEnabled'],
        'uid': value['uid'],
    };
}

