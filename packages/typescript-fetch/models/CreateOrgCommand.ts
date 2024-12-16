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
 * @interface CreateOrgCommand
 */
export interface CreateOrgCommand {
    /**
     * 
     * @type {string}
     * @memberof CreateOrgCommand
     */
    name?: string;
}

/**
 * Check if a given object implements the CreateOrgCommand interface.
 */
export function instanceOfCreateOrgCommand(value: object): value is CreateOrgCommand {
    return true;
}

export function CreateOrgCommandFromJSON(json: any): CreateOrgCommand {
    return CreateOrgCommandFromJSONTyped(json, false);
}

export function CreateOrgCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOrgCommand {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function CreateOrgCommandToJSON(json: any): CreateOrgCommand {
    return CreateOrgCommandToJSONTyped(json, false);
}

export function CreateOrgCommandToJSONTyped(value?: CreateOrgCommand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
    };
}

