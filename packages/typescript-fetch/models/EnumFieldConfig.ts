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
 * Enum field config
 * Vector values are used as lookup keys into the enum fields
 * @export
 * @interface EnumFieldConfig
 */
export interface EnumFieldConfig {
    /**
     * Color is the color value for a given index (empty is undefined)
     * @type {Array<string>}
     * @memberof EnumFieldConfig
     */
    color?: Array<string>;
    /**
     * Description of the enum state
     * @type {Array<string>}
     * @memberof EnumFieldConfig
     */
    description?: Array<string>;
    /**
     * Icon supports setting an icon for a given index value
     * @type {Array<string>}
     * @memberof EnumFieldConfig
     */
    icon?: Array<string>;
    /**
     * Value is the string display value for a given index
     * @type {Array<string>}
     * @memberof EnumFieldConfig
     */
    text?: Array<string>;
}

/**
 * Check if a given object implements the EnumFieldConfig interface.
 */
export function instanceOfEnumFieldConfig(value: object): value is EnumFieldConfig {
    return true;
}

export function EnumFieldConfigFromJSON(json: any): EnumFieldConfig {
    return EnumFieldConfigFromJSONTyped(json, false);
}

export function EnumFieldConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnumFieldConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'color': json['color'] == null ? undefined : json['color'],
        'description': json['description'] == null ? undefined : json['description'],
        'icon': json['icon'] == null ? undefined : json['icon'],
        'text': json['text'] == null ? undefined : json['text'],
    };
}

export function EnumFieldConfigToJSON(json: any): EnumFieldConfig {
    return EnumFieldConfigToJSONTyped(json, false);
}

export function EnumFieldConfigToJSONTyped(value?: EnumFieldConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'color': value['color'],
        'description': value['description'],
        'icon': value['icon'],
        'text': value['text'],
    };
}

