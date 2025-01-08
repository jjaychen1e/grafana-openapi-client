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
import type { CalculateDiffTarget } from './CalculateDiffTarget.js';
import {
    CalculateDiffTargetFromJSON,
    CalculateDiffTargetFromJSONTyped,
    CalculateDiffTargetToJSON,
    CalculateDiffTargetToJSONTyped,
} from './CalculateDiffTarget.js';

/**
 * 
 * @export
 * @interface CalculateDashboardDiffRequest
 */
export interface CalculateDashboardDiffRequest {
    /**
     * 
     * @type {CalculateDiffTarget}
     * @memberof CalculateDashboardDiffRequest
     */
    base?: CalculateDiffTarget;
    /**
     * The type of diff to return
     * Description:
     * `basic`
     * `json`
     * @type {string}
     * @memberof CalculateDashboardDiffRequest
     */
    diffType?: CalculateDashboardDiffRequestDiffTypeEnum;
    /**
     * 
     * @type {CalculateDiffTarget}
     * @memberof CalculateDashboardDiffRequest
     */
    _new?: CalculateDiffTarget;
}


/**
 * @export
 */
export const CalculateDashboardDiffRequestDiffTypeEnum = {
    Basic: 'basic',
    Json: 'json'
} as const;
export type CalculateDashboardDiffRequestDiffTypeEnum = typeof CalculateDashboardDiffRequestDiffTypeEnum[keyof typeof CalculateDashboardDiffRequestDiffTypeEnum];


/**
 * Check if a given object implements the CalculateDashboardDiffRequest interface.
 */
export function instanceOfCalculateDashboardDiffRequest(value: object): value is CalculateDashboardDiffRequest {
    return true;
}

export function CalculateDashboardDiffRequestFromJSON(json: any): CalculateDashboardDiffRequest {
    return CalculateDashboardDiffRequestFromJSONTyped(json, false);
}

export function CalculateDashboardDiffRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CalculateDashboardDiffRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'base': json['base'] == null ? undefined : CalculateDiffTargetFromJSON(json['base']),
        'diffType': json['diffType'] == null ? undefined : json['diffType'],
        '_new': json['new'] == null ? undefined : CalculateDiffTargetFromJSON(json['new']),
    };
}

export function CalculateDashboardDiffRequestToJSON(json: any): CalculateDashboardDiffRequest {
    return CalculateDashboardDiffRequestToJSONTyped(json, false);
}

export function CalculateDashboardDiffRequestToJSONTyped(value?: CalculateDashboardDiffRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'base': CalculateDiffTargetToJSON(value['base']),
        'diffType': value['diffType'],
        'new': CalculateDiffTargetToJSON(value['_new']),
    };
}

