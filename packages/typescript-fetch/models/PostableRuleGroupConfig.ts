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
import type { PostableExtendedRuleNode } from './PostableExtendedRuleNode';
import {
    PostableExtendedRuleNodeFromJSON,
    PostableExtendedRuleNodeFromJSONTyped,
    PostableExtendedRuleNodeToJSON,
    PostableExtendedRuleNodeToJSONTyped,
} from './PostableExtendedRuleNode';

/**
 * 
 * @export
 * @interface PostableRuleGroupConfig
 */
export interface PostableRuleGroupConfig {
    /**
     * 
     * @type {boolean}
     * @memberof PostableRuleGroupConfig
     */
    alignEvaluationTimeOnInterval?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PostableRuleGroupConfig
     */
    evaluationDelay?: string;
    /**
     * A Duration represents the elapsed time between two instants
     * as an int64 nanosecond count. The representation limits the
     * largest representable duration to approximately 290 years.
     * @type {number}
     * @memberof PostableRuleGroupConfig
     */
    interval?: number;
    /**
     * 
     * @type {number}
     * @memberof PostableRuleGroupConfig
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof PostableRuleGroupConfig
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PostableRuleGroupConfig
     */
    queryOffset?: string;
    /**
     * 
     * @type {Array<PostableExtendedRuleNode>}
     * @memberof PostableRuleGroupConfig
     */
    rules?: Array<PostableExtendedRuleNode>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PostableRuleGroupConfig
     */
    sourceTenants?: Array<string>;
}

/**
 * Check if a given object implements the PostableRuleGroupConfig interface.
 */
export function instanceOfPostableRuleGroupConfig(value: object): value is PostableRuleGroupConfig {
    return true;
}

export function PostableRuleGroupConfigFromJSON(json: any): PostableRuleGroupConfig {
    return PostableRuleGroupConfigFromJSONTyped(json, false);
}

export function PostableRuleGroupConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostableRuleGroupConfig {
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
        'rules': json['rules'] == null ? undefined : ((json['rules'] as Array<any>).map(PostableExtendedRuleNodeFromJSON)),
        'sourceTenants': json['source_tenants'] == null ? undefined : json['source_tenants'],
    };
}

export function PostableRuleGroupConfigToJSON(json: any): PostableRuleGroupConfig {
    return PostableRuleGroupConfigToJSONTyped(json, false);
}

export function PostableRuleGroupConfigToJSONTyped(value?: PostableRuleGroupConfig | null, ignoreDiscriminator: boolean = false): any {
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
        'rules': value['rules'] == null ? undefined : ((value['rules'] as Array<any>).map(PostableExtendedRuleNodeToJSON)),
        'source_tenants': value['sourceTenants'],
    };
}

