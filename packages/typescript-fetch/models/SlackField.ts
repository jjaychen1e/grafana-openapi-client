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
 * Each field must contain a title, value, and optionally, a boolean value to indicate if the field
 * is short enough to be displayed next to other fields designated as short.
 * See https://api.slack.com/docs/message-attachments#fields for more information.
 * @export
 * @interface SlackField
 */
export interface SlackField {
    /**
     * 
     * @type {boolean}
     * @memberof SlackField
     */
    _short?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SlackField
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof SlackField
     */
    value?: string;
}

/**
 * Check if a given object implements the SlackField interface.
 */
export function instanceOfSlackField(value: object): value is SlackField {
    return true;
}

export function SlackFieldFromJSON(json: any): SlackField {
    return SlackFieldFromJSONTyped(json, false);
}

export function SlackFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): SlackField {
    if (json == null) {
        return json;
    }
    return {
        
        '_short': json['short'] == null ? undefined : json['short'],
        'title': json['title'] == null ? undefined : json['title'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function SlackFieldToJSON(json: any): SlackField {
    return SlackFieldToJSONTyped(json, false);
}

export function SlackFieldToJSONTyped(value?: SlackField | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'short': value['_short'],
        'title': value['title'],
        'value': value['value'],
    };
}
