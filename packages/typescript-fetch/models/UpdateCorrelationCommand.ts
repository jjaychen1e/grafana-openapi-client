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
import type { CorrelationConfigUpdateDTO } from './CorrelationConfigUpdateDTO.js';
import {
    CorrelationConfigUpdateDTOFromJSON,
    CorrelationConfigUpdateDTOFromJSONTyped,
    CorrelationConfigUpdateDTOToJSON,
    CorrelationConfigUpdateDTOToJSONTyped,
} from './CorrelationConfigUpdateDTO.js';

/**
 * UpdateCorrelationCommand is the command for updating a correlation
 * @export
 * @interface UpdateCorrelationCommand
 */
export interface UpdateCorrelationCommand {
    /**
     * 
     * @type {CorrelationConfigUpdateDTO}
     * @memberof UpdateCorrelationCommand
     */
    config?: CorrelationConfigUpdateDTO;
    /**
     * Optional description of the correlation
     * @type {string}
     * @memberof UpdateCorrelationCommand
     */
    description?: string;
    /**
     * Optional label identifying the correlation
     * @type {string}
     * @memberof UpdateCorrelationCommand
     */
    label?: string;
    /**
     * the type of correlation, either query for containing query information, or external for containing an external URL
     * +enum
     * @type {string}
     * @memberof UpdateCorrelationCommand
     */
    type?: string;
}

/**
 * Check if a given object implements the UpdateCorrelationCommand interface.
 */
export function instanceOfUpdateCorrelationCommand(value: object): value is UpdateCorrelationCommand {
    return true;
}

export function UpdateCorrelationCommandFromJSON(json: any): UpdateCorrelationCommand {
    return UpdateCorrelationCommandFromJSONTyped(json, false);
}

export function UpdateCorrelationCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCorrelationCommand {
    if (json == null) {
        return json;
    }
    return {
        
        'config': json['config'] == null ? undefined : CorrelationConfigUpdateDTOFromJSON(json['config']),
        'description': json['description'] == null ? undefined : json['description'],
        'label': json['label'] == null ? undefined : json['label'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}

export function UpdateCorrelationCommandToJSON(json: any): UpdateCorrelationCommand {
    return UpdateCorrelationCommandToJSONTyped(json, false);
}

export function UpdateCorrelationCommandToJSONTyped(value?: UpdateCorrelationCommand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'config': CorrelationConfigUpdateDTOToJSON(value['config']),
        'description': value['description'],
        'label': value['label'],
        'type': value['type'],
    };
}

