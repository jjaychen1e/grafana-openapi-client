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
import type { CloudMigrationSessionResponseDTO } from './CloudMigrationSessionResponseDTO.js';
import {
    CloudMigrationSessionResponseDTOFromJSON,
    CloudMigrationSessionResponseDTOFromJSONTyped,
    CloudMigrationSessionResponseDTOToJSON,
    CloudMigrationSessionResponseDTOToJSONTyped,
} from './CloudMigrationSessionResponseDTO.js';

/**
 * 
 * @export
 * @interface CloudMigrationSessionListResponseDTO
 */
export interface CloudMigrationSessionListResponseDTO {
    /**
     * 
     * @type {Array<CloudMigrationSessionResponseDTO>}
     * @memberof CloudMigrationSessionListResponseDTO
     */
    sessions?: Array<CloudMigrationSessionResponseDTO>;
}

/**
 * Check if a given object implements the CloudMigrationSessionListResponseDTO interface.
 */
export function instanceOfCloudMigrationSessionListResponseDTO(value: object): value is CloudMigrationSessionListResponseDTO {
    return true;
}

export function CloudMigrationSessionListResponseDTOFromJSON(json: any): CloudMigrationSessionListResponseDTO {
    return CloudMigrationSessionListResponseDTOFromJSONTyped(json, false);
}

export function CloudMigrationSessionListResponseDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CloudMigrationSessionListResponseDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'sessions': json['sessions'] == null ? undefined : ((json['sessions'] as Array<any>).map(CloudMigrationSessionResponseDTOFromJSON)),
    };
}

export function CloudMigrationSessionListResponseDTOToJSON(json: any): CloudMigrationSessionListResponseDTO {
    return CloudMigrationSessionListResponseDTOToJSONTyped(json, false);
}

export function CloudMigrationSessionListResponseDTOToJSONTyped(value?: CloudMigrationSessionListResponseDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sessions': value['sessions'] == null ? undefined : ((value['sessions'] as Array<any>).map(CloudMigrationSessionResponseDTOToJSON)),
    };
}
