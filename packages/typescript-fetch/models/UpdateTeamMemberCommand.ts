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
 * @interface UpdateTeamMemberCommand
 */
export interface UpdateTeamMemberCommand {
    /**
     * 
     * @type {number}
     * @memberof UpdateTeamMemberCommand
     */
    permission?: number;
}

/**
 * Check if a given object implements the UpdateTeamMemberCommand interface.
 */
export function instanceOfUpdateTeamMemberCommand(value: object): value is UpdateTeamMemberCommand {
    return true;
}

export function UpdateTeamMemberCommandFromJSON(json: any): UpdateTeamMemberCommand {
    return UpdateTeamMemberCommandFromJSONTyped(json, false);
}

export function UpdateTeamMemberCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateTeamMemberCommand {
    if (json == null) {
        return json;
    }
    return {
        
        'permission': json['permission'] == null ? undefined : json['permission'],
    };
}

export function UpdateTeamMemberCommandToJSON(json: any): UpdateTeamMemberCommand {
    return UpdateTeamMemberCommandToJSONTyped(json, false);
}

export function UpdateTeamMemberCommandToJSONTyped(value?: UpdateTeamMemberCommand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'permission': value['permission'],
    };
}

