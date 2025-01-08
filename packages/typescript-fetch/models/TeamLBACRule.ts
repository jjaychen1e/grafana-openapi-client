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
 * @interface TeamLBACRule
 */
export interface TeamLBACRule {
    /**
     * 
     * @type {Array<string>}
     * @memberof TeamLBACRule
     */
    rules?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof TeamLBACRule
     */
    teamId?: string;
}

/**
 * Check if a given object implements the TeamLBACRule interface.
 */
export function instanceOfTeamLBACRule(value: object): value is TeamLBACRule {
    return true;
}

export function TeamLBACRuleFromJSON(json: any): TeamLBACRule {
    return TeamLBACRuleFromJSONTyped(json, false);
}

export function TeamLBACRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeamLBACRule {
    if (json == null) {
        return json;
    }
    return {
        
        'rules': json['rules'] == null ? undefined : json['rules'],
        'teamId': json['teamId'] == null ? undefined : json['teamId'],
    };
}

export function TeamLBACRuleToJSON(json: any): TeamLBACRule {
    return TeamLBACRuleToJSONTyped(json, false);
}

export function TeamLBACRuleToJSONTyped(value?: TeamLBACRule | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'rules': value['rules'],
        'teamId': value['teamId'],
    };
}

