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
import type { TeamLBACRule } from './TeamLBACRule.js';
import {
    TeamLBACRuleFromJSON,
    TeamLBACRuleFromJSONTyped,
    TeamLBACRuleToJSON,
    TeamLBACRuleToJSONTyped,
} from './TeamLBACRule.js';

/**
 * 
 * @export
 * @interface TeamLBACRules
 */
export interface TeamLBACRules {
    /**
     * 
     * @type {Array<TeamLBACRule>}
     * @memberof TeamLBACRules
     */
    rules?: Array<TeamLBACRule>;
}

/**
 * Check if a given object implements the TeamLBACRules interface.
 */
export function instanceOfTeamLBACRules(value: object): value is TeamLBACRules {
    return true;
}

export function TeamLBACRulesFromJSON(json: any): TeamLBACRules {
    return TeamLBACRulesFromJSONTyped(json, false);
}

export function TeamLBACRulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeamLBACRules {
    if (json == null) {
        return json;
    }
    return {
        
        'rules': json['rules'] == null ? undefined : ((json['rules'] as Array<any>).map(TeamLBACRuleFromJSON)),
    };
}

export function TeamLBACRulesToJSON(json: any): TeamLBACRules {
    return TeamLBACRulesToJSONTyped(json, false);
}

export function TeamLBACRulesToJSONTyped(value?: TeamLBACRules | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'rules': value['rules'] == null ? undefined : ((value['rules'] as Array<any>).map(TeamLBACRuleToJSON)),
    };
}
