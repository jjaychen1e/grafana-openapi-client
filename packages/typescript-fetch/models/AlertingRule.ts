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
import type { Label } from './Label.js';
import {
    LabelFromJSON,
    LabelFromJSONTyped,
    LabelToJSON,
    LabelToJSONTyped,
} from './Label.js';
import type { Alert } from './Alert.js';
import {
    AlertFromJSON,
    AlertFromJSONTyped,
    AlertToJSON,
    AlertToJSONTyped,
} from './Alert.js';

/**
 * adapted from cortex
 * @export
 * @interface AlertingRule
 */
export interface AlertingRule {
    /**
     * 
     * @type {Date}
     * @memberof AlertingRule
     */
    activeAt: Date;
    /**
     * 
     * @type {Array<Alert>}
     * @memberof AlertingRule
     */
    alerts?: Array<Alert>;
    /**
     * Labels is a sorted set of labels. Order has to be guaranteed upon
     * instantiation.
     * @type {Array<Label>}
     * @memberof AlertingRule
     */
    annotations: Array<Label>;
    /**
     * 
     * @type {number}
     * @memberof AlertingRule
     */
    duration?: number;
    /**
     * 
     * @type {number}
     * @memberof AlertingRule
     */
    evaluationTime?: number;
    /**
     * 
     * @type {string}
     * @memberof AlertingRule
     */
    health: string;
    /**
     * Labels is a sorted set of labels. Order has to be guaranteed upon
     * instantiation.
     * @type {Array<Label>}
     * @memberof AlertingRule
     */
    labels?: Array<Label>;
    /**
     * 
     * @type {string}
     * @memberof AlertingRule
     */
    lastError?: string;
    /**
     * 
     * @type {Date}
     * @memberof AlertingRule
     */
    lastEvaluation?: Date;
    /**
     * 
     * @type {string}
     * @memberof AlertingRule
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AlertingRule
     */
    query: string;
    /**
     * State can be "pending", "firing", "inactive".
     * @type {string}
     * @memberof AlertingRule
     */
    state: string;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof AlertingRule
     */
    totals?: { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof AlertingRule
     */
    totalsFiltered?: { [key: string]: number; };
    /**
     * 
     * @type {string}
     * @memberof AlertingRule
     */
    type: string;
}

/**
 * Check if a given object implements the AlertingRule interface.
 */
export function instanceOfAlertingRule(value: object): value is AlertingRule {
    if (!('activeAt' in value) || value['activeAt'] === undefined) return false;
    if (!('annotations' in value) || value['annotations'] === undefined) return false;
    if (!('health' in value) || value['health'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('query' in value) || value['query'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function AlertingRuleFromJSON(json: any): AlertingRule {
    return AlertingRuleFromJSONTyped(json, false);
}

export function AlertingRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertingRule {
    if (json == null) {
        return json;
    }
    return {
        
        'activeAt': (new Date(json['activeAt'])),
        'alerts': json['alerts'] == null ? undefined : ((json['alerts'] as Array<any>).map(AlertFromJSON)),
        'annotations': ((json['annotations'] as Array<any>).map(LabelFromJSON)),
        'duration': json['duration'] == null ? undefined : json['duration'],
        'evaluationTime': json['evaluationTime'] == null ? undefined : json['evaluationTime'],
        'health': json['health'],
        'labels': json['labels'] == null ? undefined : ((json['labels'] as Array<any>).map(LabelFromJSON)),
        'lastError': json['lastError'] == null ? undefined : json['lastError'],
        'lastEvaluation': json['lastEvaluation'] == null ? undefined : (new Date(json['lastEvaluation'])),
        'name': json['name'],
        'query': json['query'],
        'state': json['state'],
        'totals': json['totals'] == null ? undefined : json['totals'],
        'totalsFiltered': json['totalsFiltered'] == null ? undefined : json['totalsFiltered'],
        'type': json['type'],
    };
}

export function AlertingRuleToJSON(json: any): AlertingRule {
    return AlertingRuleToJSONTyped(json, false);
}

export function AlertingRuleToJSONTyped(value?: AlertingRule | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'activeAt': ((value['activeAt']).toISOString()),
        'alerts': value['alerts'] == null ? undefined : ((value['alerts'] as Array<any>).map(AlertToJSON)),
        'annotations': ((value['annotations'] as Array<any>).map(LabelToJSON)),
        'duration': value['duration'],
        'evaluationTime': value['evaluationTime'],
        'health': value['health'],
        'labels': value['labels'] == null ? undefined : ((value['labels'] as Array<any>).map(LabelToJSON)),
        'lastError': value['lastError'],
        'lastEvaluation': value['lastEvaluation'] == null ? undefined : ((value['lastEvaluation']).toISOString()),
        'name': value['name'],
        'query': value['query'],
        'state': value['state'],
        'totals': value['totals'],
        'totalsFiltered': value['totalsFiltered'],
        'type': value['type'],
    };
}

