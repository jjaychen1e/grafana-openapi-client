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
import type { SlackConfirmationField } from './SlackConfirmationField.js';
import {
    SlackConfirmationFieldFromJSON,
    SlackConfirmationFieldFromJSONTyped,
    SlackConfirmationFieldToJSON,
    SlackConfirmationFieldToJSONTyped,
} from './SlackConfirmationField.js';

/**
 * See https://api.slack.com/docs/message-attachments#action_fields and https://api.slack.com/docs/message-buttons
 * for more information.
 * @export
 * @interface SlackAction
 */
export interface SlackAction {
    /**
     * 
     * @type {SlackConfirmationField}
     * @memberof SlackAction
     */
    confirm?: SlackConfirmationField;
    /**
     * 
     * @type {string}
     * @memberof SlackAction
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SlackAction
     */
    style?: string;
    /**
     * 
     * @type {string}
     * @memberof SlackAction
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof SlackAction
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof SlackAction
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof SlackAction
     */
    value?: string;
}

/**
 * Check if a given object implements the SlackAction interface.
 */
export function instanceOfSlackAction(value: object): value is SlackAction {
    return true;
}

export function SlackActionFromJSON(json: any): SlackAction {
    return SlackActionFromJSONTyped(json, false);
}

export function SlackActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SlackAction {
    if (json == null) {
        return json;
    }
    return {
        
        'confirm': json['confirm'] == null ? undefined : SlackConfirmationFieldFromJSON(json['confirm']),
        'name': json['name'] == null ? undefined : json['name'],
        'style': json['style'] == null ? undefined : json['style'],
        'text': json['text'] == null ? undefined : json['text'],
        'type': json['type'] == null ? undefined : json['type'],
        'url': json['url'] == null ? undefined : json['url'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function SlackActionToJSON(json: any): SlackAction {
    return SlackActionToJSONTyped(json, false);
}

export function SlackActionToJSONTyped(value?: SlackAction | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'confirm': SlackConfirmationFieldToJSON(value['confirm']),
        'name': value['name'],
        'style': value['style'],
        'text': value['text'],
        'type': value['type'],
        'url': value['url'],
        'value': value['value'],
    };
}

