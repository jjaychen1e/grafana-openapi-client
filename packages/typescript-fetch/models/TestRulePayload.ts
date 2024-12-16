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
import type { EvalAlertConditionCommand } from './EvalAlertConditionCommand';
import {
    EvalAlertConditionCommandFromJSON,
    EvalAlertConditionCommandFromJSONTyped,
    EvalAlertConditionCommandToJSON,
    EvalAlertConditionCommandToJSONTyped,
} from './EvalAlertConditionCommand';

/**
 * 
 * @export
 * @interface TestRulePayload
 */
export interface TestRulePayload {
    /**
     * 
     * @type {string}
     * @memberof TestRulePayload
     */
    expr?: string;
    /**
     * 
     * @type {EvalAlertConditionCommand}
     * @memberof TestRulePayload
     */
    grafanaCondition?: EvalAlertConditionCommand;
}

/**
 * Check if a given object implements the TestRulePayload interface.
 */
export function instanceOfTestRulePayload(value: object): value is TestRulePayload {
    return true;
}

export function TestRulePayloadFromJSON(json: any): TestRulePayload {
    return TestRulePayloadFromJSONTyped(json, false);
}

export function TestRulePayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): TestRulePayload {
    if (json == null) {
        return json;
    }
    return {
        
        'expr': json['expr'] == null ? undefined : json['expr'],
        'grafanaCondition': json['grafana_condition'] == null ? undefined : EvalAlertConditionCommandFromJSON(json['grafana_condition']),
    };
}

export function TestRulePayloadToJSON(json: any): TestRulePayload {
    return TestRulePayloadToJSONTyped(json, false);
}

export function TestRulePayloadToJSONTyped(value?: TestRulePayload | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'expr': value['expr'],
        'grafana_condition': EvalAlertConditionCommandToJSON(value['grafanaCondition']),
    };
}

