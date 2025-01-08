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
 * @interface ApiRuleNode
 */
export interface ApiRuleNode {
    /**
     * 
     * @type {string}
     * @memberof ApiRuleNode
     */
    alert?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ApiRuleNode
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ApiRuleNode
     */
    expr?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiRuleNode
     */
    _for?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiRuleNode
     */
    keepFiringFor?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ApiRuleNode
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ApiRuleNode
     */
    record?: string;
}

/**
 * Check if a given object implements the ApiRuleNode interface.
 */
export function instanceOfApiRuleNode(value: object): value is ApiRuleNode {
    return true;
}

export function ApiRuleNodeFromJSON(json: any): ApiRuleNode {
    return ApiRuleNodeFromJSONTyped(json, false);
}

export function ApiRuleNodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiRuleNode {
    if (json == null) {
        return json;
    }
    return {
        
        'alert': json['alert'] == null ? undefined : json['alert'],
        'annotations': json['annotations'] == null ? undefined : json['annotations'],
        'expr': json['expr'] == null ? undefined : json['expr'],
        '_for': json['for'] == null ? undefined : json['for'],
        'keepFiringFor': json['keep_firing_for'] == null ? undefined : json['keep_firing_for'],
        'labels': json['labels'] == null ? undefined : json['labels'],
        'record': json['record'] == null ? undefined : json['record'],
    };
}

export function ApiRuleNodeToJSON(json: any): ApiRuleNode {
    return ApiRuleNodeToJSONTyped(json, false);
}

export function ApiRuleNodeToJSONTyped(value?: ApiRuleNode | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'alert': value['alert'],
        'annotations': value['annotations'],
        'expr': value['expr'],
        'for': value['_for'],
        'keep_firing_for': value['keepFiringFor'],
        'labels': value['labels'],
        'record': value['record'],
    };
}

