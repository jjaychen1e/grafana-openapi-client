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
 * AlertmanagerConfig alertmanager config
 * @export
 * @interface AlertmanagerConfig
 */
export interface AlertmanagerConfig {
    /**
     * original
     * @type {string}
     * @memberof AlertmanagerConfig
     */
    original: string;
}

/**
 * Check if a given object implements the AlertmanagerConfig interface.
 */
export function instanceOfAlertmanagerConfig(value: object): value is AlertmanagerConfig {
    if (!('original' in value) || value['original'] === undefined) return false;
    return true;
}

export function AlertmanagerConfigFromJSON(json: any): AlertmanagerConfig {
    return AlertmanagerConfigFromJSONTyped(json, false);
}

export function AlertmanagerConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertmanagerConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'original': json['original'],
    };
}

export function AlertmanagerConfigToJSON(json: any): AlertmanagerConfig {
    return AlertmanagerConfigToJSONTyped(json, false);
}

export function AlertmanagerConfigToJSONTyped(value?: AlertmanagerConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'original': value['original'],
    };
}

