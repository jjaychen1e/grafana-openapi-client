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
 * @interface PostableNGalertConfig
 */
export interface PostableNGalertConfig {
    /**
     * 
     * @type {string}
     * @memberof PostableNGalertConfig
     */
    alertmanagersChoice?: PostableNGalertConfigAlertmanagersChoiceEnum;
}


/**
 * @export
 */
export const PostableNGalertConfigAlertmanagersChoiceEnum = {
    All: 'all',
    Internal: 'internal',
    External: 'external'
} as const;
export type PostableNGalertConfigAlertmanagersChoiceEnum = typeof PostableNGalertConfigAlertmanagersChoiceEnum[keyof typeof PostableNGalertConfigAlertmanagersChoiceEnum];


/**
 * Check if a given object implements the PostableNGalertConfig interface.
 */
export function instanceOfPostableNGalertConfig(value: object): value is PostableNGalertConfig {
    return true;
}

export function PostableNGalertConfigFromJSON(json: any): PostableNGalertConfig {
    return PostableNGalertConfigFromJSONTyped(json, false);
}

export function PostableNGalertConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostableNGalertConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'alertmanagersChoice': json['alertmanagersChoice'] == null ? undefined : json['alertmanagersChoice'],
    };
}

export function PostableNGalertConfigToJSON(json: any): PostableNGalertConfig {
    return PostableNGalertConfigToJSONTyped(json, false);
}

export function PostableNGalertConfigToJSONTyped(value?: PostableNGalertConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'alertmanagersChoice': value['alertmanagersChoice'],
    };
}

