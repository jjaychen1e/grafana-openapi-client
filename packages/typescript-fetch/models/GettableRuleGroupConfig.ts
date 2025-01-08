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
import type { GettableExtendedRuleNode } from './GettableExtendedRuleNode.js';
import {
    GettableExtendedRuleNodeFromJSON,
    GettableExtendedRuleNodeFromJSONTyped,
    GettableExtendedRuleNodeToJSON,
    GettableExtendedRuleNodeToJSONTyped,
} from './GettableExtendedRuleNode.js';

/**
 * 
 * @export
 * @interface GettableRuleGroupConfig
 */
export interface GettableRuleGroupConfig {
    /**
     * 
     * @type {boolean}
     * @memberof GettableRuleGroupConfig
     */
    alignEvaluationTimeOnInterval?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GettableRuleGroupConfig
     */
    evaluationDelay?: string;
    /**
     * A Duration represents the elapsed time between two instants
     * as an int64 nanosecond count. The representation limits the
     * largest representable duration to approximately 290 years.
     * @type {number}
     * @memberof GettableRuleGroupConfig
     */
    interval?: number;
    /**
     * 
     * @type {number}
     * @memberof GettableRuleGroupConfig
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof GettableRuleGroupConfig
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GettableRuleGroupConfig
     */
    queryOffset?: string;
    /**
     * 
     * @type {Array<GettableExtendedRuleNode>}
     * @memberof GettableRuleGroupConfig
     */
    rules?: Array<GettableExtendedRuleNode>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GettableRuleGroupConfig
     */
    sourceTenants?: Array<string>;
}

/**
 * Check if a given object implements the GettableRuleGroupConfig interface.
 */
export function instanceOfGettableRuleGroupConfig(value: object): value is GettableRuleGroupConfig {
    return true;
}

export function GettableRuleGroupConfigFromJSON(json: any): GettableRuleGroupConfig {
    return GettableRuleGroupConfigFromJSONTyped(json, false);
}

export function GettableRuleGroupConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): GettableRuleGroupConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'alignEvaluationTimeOnInterval': json['align_evaluation_time_on_interval'] == null ? undefined : json['align_evaluation_time_on_interval'],
        'evaluationDelay': json['evaluation_delay'] == null ? undefined : json['evaluation_delay'],
        'interval': json['interval'] == null ? undefined : json['interval'],
        'limit': json['limit'] == null ? undefined : json['limit'],
        'name': json['name'] == null ? undefined : json['name'],
        'queryOffset': json['query_offset'] == null ? undefined : json['query_offset'],
        'rules': json['rules'] == null ? undefined : ((json['rules'] as Array<any>).map(GettableExtendedRuleNodeFromJSON)),
        'sourceTenants': json['source_tenants'] == null ? undefined : json['source_tenants'],
    };
}

export function GettableRuleGroupConfigToJSON(json: any): GettableRuleGroupConfig {
    return GettableRuleGroupConfigToJSONTyped(json, false);
}

export function GettableRuleGroupConfigToJSONTyped(value?: GettableRuleGroupConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'align_evaluation_time_on_interval': value['alignEvaluationTimeOnInterval'],
        'evaluation_delay': value['evaluationDelay'],
        'interval': value['interval'],
        'limit': value['limit'],
        'name': value['name'],
        'query_offset': value['queryOffset'],
        'rules': value['rules'] == null ? undefined : ((value['rules'] as Array<any>).map(GettableExtendedRuleNodeToJSON)),
        'source_tenants': value['sourceTenants'],
    };
}

