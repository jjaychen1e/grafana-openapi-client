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
 * @interface CreateSnapshotResponseDTO
 */
export interface CreateSnapshotResponseDTO {
    /**
     * 
     * @type {string}
     * @memberof CreateSnapshotResponseDTO
     */
    uid?: string;
}

/**
 * Check if a given object implements the CreateSnapshotResponseDTO interface.
 */
export function instanceOfCreateSnapshotResponseDTO(value: object): value is CreateSnapshotResponseDTO {
    return true;
}

export function CreateSnapshotResponseDTOFromJSON(json: any): CreateSnapshotResponseDTO {
    return CreateSnapshotResponseDTOFromJSONTyped(json, false);
}

export function CreateSnapshotResponseDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSnapshotResponseDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'uid': json['uid'] == null ? undefined : json['uid'],
    };
}

export function CreateSnapshotResponseDTOToJSON(json: any): CreateSnapshotResponseDTO {
    return CreateSnapshotResponseDTOToJSONTyped(json, false);
}

export function CreateSnapshotResponseDTOToJSONTyped(value?: CreateSnapshotResponseDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'uid': value['uid'],
    };
}
