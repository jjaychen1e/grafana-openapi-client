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
import type { Threshold } from './Threshold.js';
import {
    ThresholdFromJSON,
    ThresholdFromJSONTyped,
    ThresholdToJSON,
    ThresholdToJSONTyped,
} from './Threshold.js';

/**
 * ThresholdsConfig setup thresholds
 * @export
 * @interface ThresholdsConfig
 */
export interface ThresholdsConfig {
    /**
     * ThresholdsMode absolute or percentage
     * @type {string}
     * @memberof ThresholdsConfig
     */
    mode?: string;
    /**
     * Must be sorted by 'value', first value is always -Infinity
     * @type {Array<Threshold>}
     * @memberof ThresholdsConfig
     */
    steps?: Array<Threshold>;
}

/**
 * Check if a given object implements the ThresholdsConfig interface.
 */
export function instanceOfThresholdsConfig(value: object): value is ThresholdsConfig {
    return true;
}

export function ThresholdsConfigFromJSON(json: any): ThresholdsConfig {
    return ThresholdsConfigFromJSONTyped(json, false);
}

export function ThresholdsConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThresholdsConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'mode': json['mode'] == null ? undefined : json['mode'],
        'steps': json['steps'] == null ? undefined : ((json['steps'] as Array<any>).map(ThresholdFromJSON)),
    };
}

export function ThresholdsConfigToJSON(json: any): ThresholdsConfig {
    return ThresholdsConfigToJSONTyped(json, false);
}

export function ThresholdsConfigToJSONTyped(value?: ThresholdsConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'mode': value['mode'],
        'steps': value['steps'] == null ? undefined : ((value['steps'] as Array<any>).map(ThresholdToJSON)),
    };
}

