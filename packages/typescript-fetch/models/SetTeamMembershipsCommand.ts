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
 * @interface SetTeamMembershipsCommand
 */
export interface SetTeamMembershipsCommand {
    /**
     * 
     * @type {Array<string>}
     * @memberof SetTeamMembershipsCommand
     */
    admins?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SetTeamMembershipsCommand
     */
    members?: Array<string>;
}

/**
 * Check if a given object implements the SetTeamMembershipsCommand interface.
 */
export function instanceOfSetTeamMembershipsCommand(value: object): value is SetTeamMembershipsCommand {
    return true;
}

export function SetTeamMembershipsCommandFromJSON(json: any): SetTeamMembershipsCommand {
    return SetTeamMembershipsCommandFromJSONTyped(json, false);
}

export function SetTeamMembershipsCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetTeamMembershipsCommand {
    if (json == null) {
        return json;
    }
    return {
        
        'admins': json['admins'] == null ? undefined : json['admins'],
        'members': json['members'] == null ? undefined : json['members'],
    };
}

export function SetTeamMembershipsCommandToJSON(json: any): SetTeamMembershipsCommand {
    return SetTeamMembershipsCommandToJSONTyped(json, false);
}

export function SetTeamMembershipsCommandToJSONTyped(value?: SetTeamMembershipsCommand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'admins': value['admins'],
        'members': value['members'],
    };
}
