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
 * @interface AddServiceAccountTokenCommand
 */
export interface AddServiceAccountTokenCommand {
    /**
     * 
     * @type {string}
     * @memberof AddServiceAccountTokenCommand
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof AddServiceAccountTokenCommand
     */
    secondsToLive?: number;
}

/**
 * Check if a given object implements the AddServiceAccountTokenCommand interface.
 */
export function instanceOfAddServiceAccountTokenCommand(value: object): value is AddServiceAccountTokenCommand {
    return true;
}

export function AddServiceAccountTokenCommandFromJSON(json: any): AddServiceAccountTokenCommand {
    return AddServiceAccountTokenCommandFromJSONTyped(json, false);
}

export function AddServiceAccountTokenCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddServiceAccountTokenCommand {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'secondsToLive': json['secondsToLive'] == null ? undefined : json['secondsToLive'],
    };
}

export function AddServiceAccountTokenCommandToJSON(json: any): AddServiceAccountTokenCommand {
    return AddServiceAccountTokenCommandToJSONTyped(json, false);
}

export function AddServiceAccountTokenCommandToJSONTyped(value?: AddServiceAccountTokenCommand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'secondsToLive': value['secondsToLive'],
    };
}

