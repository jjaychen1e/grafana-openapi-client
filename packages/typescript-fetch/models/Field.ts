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
import type { FieldConfig } from './FieldConfig';
import {
    FieldConfigFromJSON,
    FieldConfigFromJSONTyped,
    FieldConfigToJSON,
    FieldConfigToJSONTyped,
} from './FieldConfig';

/**
 * A Field is essentially a slice of various types with extra properties and methods.
 * See NewField() for supported types.
 * 
 * The slice data in the Field is a not exported, so methods on the Field are used to to manipulate its data.
 * @export
 * @interface Field
 */
export interface Field {
    /**
     * 
     * @type {FieldConfig}
     * @memberof Field
     */
    config?: FieldConfig;
    /**
     * Labels are used to add metadata to an object.  The JSON will always be sorted keys
     * @type {{ [key: string]: string; }}
     * @memberof Field
     */
    labels?: { [key: string]: string; };
    /**
     * Name is default identifier of the field. The name does not have to be unique, but the combination
     * of name and Labels should be unique for proper behavior in all situations.
     * @type {string}
     * @memberof Field
     */
    name?: string;
}

/**
 * Check if a given object implements the Field interface.
 */
export function instanceOfField(value: object): value is Field {
    return true;
}

export function FieldFromJSON(json: any): Field {
    return FieldFromJSONTyped(json, false);
}

export function FieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): Field {
    if (json == null) {
        return json;
    }
    return {
        
        'config': json['config'] == null ? undefined : FieldConfigFromJSON(json['config']),
        'labels': json['labels'] == null ? undefined : json['labels'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function FieldToJSON(json: any): Field {
    return FieldToJSONTyped(json, false);
}

export function FieldToJSONTyped(value?: Field | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'config': FieldConfigToJSON(value['config']),
        'labels': value['labels'],
        'name': value['name'],
    };
}

