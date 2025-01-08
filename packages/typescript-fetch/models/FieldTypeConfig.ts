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
import type { EnumFieldConfig } from './EnumFieldConfig.js';
import {
    EnumFieldConfigFromJSON,
    EnumFieldConfigFromJSONTyped,
    EnumFieldConfigToJSON,
    EnumFieldConfigToJSONTyped,
} from './EnumFieldConfig.js';

/**
 * FieldTypeConfig has type specific configs, only one should be active at a time
 * @export
 * @interface FieldTypeConfig
 */
export interface FieldTypeConfig {
    /**
     * 
     * @type {EnumFieldConfig}
     * @memberof FieldTypeConfig
     */
    _enum?: EnumFieldConfig;
}

/**
 * Check if a given object implements the FieldTypeConfig interface.
 */
export function instanceOfFieldTypeConfig(value: object): value is FieldTypeConfig {
    return true;
}

export function FieldTypeConfigFromJSON(json: any): FieldTypeConfig {
    return FieldTypeConfigFromJSONTyped(json, false);
}

export function FieldTypeConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldTypeConfig {
    if (json == null) {
        return json;
    }
    return {
        
        '_enum': json['enum'] == null ? undefined : EnumFieldConfigFromJSON(json['enum']),
    };
}

export function FieldTypeConfigToJSON(json: any): FieldTypeConfig {
    return FieldTypeConfigToJSONTyped(json, false);
}

export function FieldTypeConfigToJSONTyped(value?: FieldTypeConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'enum': EnumFieldConfigToJSON(value['_enum']),
    };
}

