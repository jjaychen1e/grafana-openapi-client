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
 * @interface GetSharingOptions200Response
 */
export interface GetSharingOptions200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetSharingOptions200Response
     */
    externalEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetSharingOptions200Response
     */
    externalSnapshotName?: string;
    /**
     * 
     * @type {string}
     * @memberof GetSharingOptions200Response
     */
    externalSnapshotURL?: string;
}

/**
 * Check if a given object implements the GetSharingOptions200Response interface.
 */
export function instanceOfGetSharingOptions200Response(value: object): value is GetSharingOptions200Response {
    return true;
}

export function GetSharingOptions200ResponseFromJSON(json: any): GetSharingOptions200Response {
    return GetSharingOptions200ResponseFromJSONTyped(json, false);
}

export function GetSharingOptions200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSharingOptions200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'externalEnabled': json['externalEnabled'] == null ? undefined : json['externalEnabled'],
        'externalSnapshotName': json['externalSnapshotName'] == null ? undefined : json['externalSnapshotName'],
        'externalSnapshotURL': json['externalSnapshotURL'] == null ? undefined : json['externalSnapshotURL'],
    };
}

export function GetSharingOptions200ResponseToJSON(json: any): GetSharingOptions200Response {
    return GetSharingOptions200ResponseToJSONTyped(json, false);
}

export function GetSharingOptions200ResponseToJSONTyped(value?: GetSharingOptions200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'externalEnabled': value['externalEnabled'],
        'externalSnapshotName': value['externalSnapshotName'],
        'externalSnapshotURL': value['externalSnapshotURL'],
    };
}
