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
 * 
 * @export
 * @interface ChangeUserPasswordCommand
 */
export interface ChangeUserPasswordCommand {
    /**
     * 
     * @type {string}
     * @memberof ChangeUserPasswordCommand
     */
    newPassword?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeUserPasswordCommand
     */
    oldPassword?: string;
}

/**
 * Check if a given object implements the ChangeUserPasswordCommand interface.
 */
export function instanceOfChangeUserPasswordCommand(value: object): value is ChangeUserPasswordCommand {
    return true;
}

export function ChangeUserPasswordCommandFromJSON(json: any): ChangeUserPasswordCommand {
    return ChangeUserPasswordCommandFromJSONTyped(json, false);
}

export function ChangeUserPasswordCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeUserPasswordCommand {
    if (json == null) {
        return json;
    }
    return {
        
        'newPassword': json['newPassword'] == null ? undefined : json['newPassword'],
        'oldPassword': json['oldPassword'] == null ? undefined : json['oldPassword'],
    };
}

export function ChangeUserPasswordCommandToJSON(json: any): ChangeUserPasswordCommand {
    return ChangeUserPasswordCommandToJSONTyped(json, false);
}

export function ChangeUserPasswordCommandToJSONTyped(value?: ChangeUserPasswordCommand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'newPassword': value['newPassword'],
        'oldPassword': value['oldPassword'],
    };
}

