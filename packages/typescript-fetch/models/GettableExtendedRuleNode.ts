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
import type { GettableGrafanaRule } from './GettableGrafanaRule.js';
import {
    GettableGrafanaRuleFromJSON,
    GettableGrafanaRuleFromJSONTyped,
    GettableGrafanaRuleToJSON,
    GettableGrafanaRuleToJSONTyped,
} from './GettableGrafanaRule.js';

/**
 * 
 * @export
 * @interface GettableExtendedRuleNode
 */
export interface GettableExtendedRuleNode {
    /**
     * 
     * @type {string}
     * @memberof GettableExtendedRuleNode
     */
    alert?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof GettableExtendedRuleNode
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof GettableExtendedRuleNode
     */
    expr?: string;
    /**
     * 
     * @type {string}
     * @memberof GettableExtendedRuleNode
     */
    _for?: string;
    /**
     * 
     * @type {GettableGrafanaRule}
     * @memberof GettableExtendedRuleNode
     */
    grafanaAlert?: GettableGrafanaRule;
    /**
     * 
     * @type {string}
     * @memberof GettableExtendedRuleNode
     */
    keepFiringFor?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof GettableExtendedRuleNode
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof GettableExtendedRuleNode
     */
    record?: string;
}

/**
 * Check if a given object implements the GettableExtendedRuleNode interface.
 */
export function instanceOfGettableExtendedRuleNode(value: object): value is GettableExtendedRuleNode {
    return true;
}

export function GettableExtendedRuleNodeFromJSON(json: any): GettableExtendedRuleNode {
    return GettableExtendedRuleNodeFromJSONTyped(json, false);
}

export function GettableExtendedRuleNodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GettableExtendedRuleNode {
    if (json == null) {
        return json;
    }
    return {
        
        'alert': json['alert'] == null ? undefined : json['alert'],
        'annotations': json['annotations'] == null ? undefined : json['annotations'],
        'expr': json['expr'] == null ? undefined : json['expr'],
        '_for': json['for'] == null ? undefined : json['for'],
        'grafanaAlert': json['grafana_alert'] == null ? undefined : GettableGrafanaRuleFromJSON(json['grafana_alert']),
        'keepFiringFor': json['keep_firing_for'] == null ? undefined : json['keep_firing_for'],
        'labels': json['labels'] == null ? undefined : json['labels'],
        'record': json['record'] == null ? undefined : json['record'],
    };
}

export function GettableExtendedRuleNodeToJSON(json: any): GettableExtendedRuleNode {
    return GettableExtendedRuleNodeToJSONTyped(json, false);
}

export function GettableExtendedRuleNodeToJSONTyped(value?: GettableExtendedRuleNode | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'alert': value['alert'],
        'annotations': value['annotations'],
        'expr': value['expr'],
        'for': value['_for'],
        'grafana_alert': GettableGrafanaRuleToJSON(value['grafanaAlert']),
        'keep_firing_for': value['keepFiringFor'],
        'labels': value['labels'],
        'record': value['record'],
    };
}
