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
import type { GettableApiAlertingConfig } from './GettableApiAlertingConfig.js';
import {
    GettableApiAlertingConfigFromJSON,
    GettableApiAlertingConfigFromJSONTyped,
    GettableApiAlertingConfigToJSON,
    GettableApiAlertingConfigToJSONTyped,
} from './GettableApiAlertingConfig.js';

/**
 * 
 * @export
 * @interface GettableUserConfig
 */
export interface GettableUserConfig {
    /**
     * 
     * @type {GettableApiAlertingConfig}
     * @memberof GettableUserConfig
     */
    alertmanagerConfig?: GettableApiAlertingConfig;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof GettableUserConfig
     */
    templateFileProvenances?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof GettableUserConfig
     */
    templateFiles?: { [key: string]: string; };
}

/**
 * Check if a given object implements the GettableUserConfig interface.
 */
export function instanceOfGettableUserConfig(value: object): value is GettableUserConfig {
    return true;
}

export function GettableUserConfigFromJSON(json: any): GettableUserConfig {
    return GettableUserConfigFromJSONTyped(json, false);
}

export function GettableUserConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): GettableUserConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'alertmanagerConfig': json['alertmanager_config'] == null ? undefined : GettableApiAlertingConfigFromJSON(json['alertmanager_config']),
        'templateFileProvenances': json['template_file_provenances'] == null ? undefined : json['template_file_provenances'],
        'templateFiles': json['template_files'] == null ? undefined : json['template_files'],
    };
}

export function GettableUserConfigToJSON(json: any): GettableUserConfig {
    return GettableUserConfigToJSONTyped(json, false);
}

export function GettableUserConfigToJSONTyped(value?: GettableUserConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'alertmanager_config': GettableApiAlertingConfigToJSON(value['alertmanagerConfig']),
        'template_file_provenances': value['templateFileProvenances'],
        'template_files': value['templateFiles'],
    };
}
