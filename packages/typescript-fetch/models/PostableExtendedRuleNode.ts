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
import type { PostableGrafanaRule } from './PostableGrafanaRule';
import {
    PostableGrafanaRuleFromJSON,
    PostableGrafanaRuleFromJSONTyped,
    PostableGrafanaRuleToJSON,
    PostableGrafanaRuleToJSONTyped,
} from './PostableGrafanaRule';

/**
 * 
 * @export
 * @interface PostableExtendedRuleNode
 */
export interface PostableExtendedRuleNode {
    /**
     * 
     * @type {string}
     * @memberof PostableExtendedRuleNode
     */
    alert?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof PostableExtendedRuleNode
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof PostableExtendedRuleNode
     */
    expr?: string;
    /**
     * 
     * @type {string}
     * @memberof PostableExtendedRuleNode
     */
    _for?: string;
    /**
     * 
     * @type {PostableGrafanaRule}
     * @memberof PostableExtendedRuleNode
     */
    grafanaAlert?: PostableGrafanaRule;
    /**
     * 
     * @type {string}
     * @memberof PostableExtendedRuleNode
     */
    keepFiringFor?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof PostableExtendedRuleNode
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof PostableExtendedRuleNode
     */
    record?: string;
}

/**
 * Check if a given object implements the PostableExtendedRuleNode interface.
 */
export function instanceOfPostableExtendedRuleNode(value: object): value is PostableExtendedRuleNode {
    return true;
}

export function PostableExtendedRuleNodeFromJSON(json: any): PostableExtendedRuleNode {
    return PostableExtendedRuleNodeFromJSONTyped(json, false);
}

export function PostableExtendedRuleNodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostableExtendedRuleNode {
    if (json == null) {
        return json;
    }
    return {
        
        'alert': json['alert'] == null ? undefined : json['alert'],
        'annotations': json['annotations'] == null ? undefined : json['annotations'],
        'expr': json['expr'] == null ? undefined : json['expr'],
        '_for': json['for'] == null ? undefined : json['for'],
        'grafanaAlert': json['grafana_alert'] == null ? undefined : PostableGrafanaRuleFromJSON(json['grafana_alert']),
        'keepFiringFor': json['keep_firing_for'] == null ? undefined : json['keep_firing_for'],
        'labels': json['labels'] == null ? undefined : json['labels'],
        'record': json['record'] == null ? undefined : json['record'],
    };
}

export function PostableExtendedRuleNodeToJSON(json: any): PostableExtendedRuleNode {
    return PostableExtendedRuleNodeToJSONTyped(json, false);
}

export function PostableExtendedRuleNodeToJSONTyped(value?: PostableExtendedRuleNode | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'alert': value['alert'],
        'annotations': value['annotations'],
        'expr': value['expr'],
        'for': value['_for'],
        'grafana_alert': PostableGrafanaRuleToJSON(value['grafanaAlert']),
        'keep_firing_for': value['keepFiringFor'],
        'labels': value['labels'],
        'record': value['record'],
    };
}

