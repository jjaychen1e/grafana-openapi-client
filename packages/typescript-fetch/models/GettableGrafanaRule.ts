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
import type { AlertQuery } from './AlertQuery.js';
import {
    AlertQueryFromJSON,
    AlertQueryFromJSONTyped,
    AlertQueryToJSON,
    AlertQueryToJSONTyped,
} from './AlertQuery.js';
import type { AlertRuleNotificationSettings } from './AlertRuleNotificationSettings.js';
import {
    AlertRuleNotificationSettingsFromJSON,
    AlertRuleNotificationSettingsFromJSONTyped,
    AlertRuleNotificationSettingsToJSON,
    AlertRuleNotificationSettingsToJSONTyped,
} from './AlertRuleNotificationSettings.js';
import type { AlertRuleMetadata } from './AlertRuleMetadata.js';
import {
    AlertRuleMetadataFromJSON,
    AlertRuleMetadataFromJSONTyped,
    AlertRuleMetadataToJSON,
    AlertRuleMetadataToJSONTyped,
} from './AlertRuleMetadata.js';
import type { Record } from './Record.js';
import {
    RecordFromJSON,
    RecordFromJSONTyped,
    RecordToJSON,
    RecordToJSONTyped,
} from './Record.js';

/**
 * 
 * @export
 * @interface GettableGrafanaRule
 */
export interface GettableGrafanaRule {
    /**
     * 
     * @type {string}
     * @memberof GettableGrafanaRule
     */
    condition?: string;
    /**
     * 
     * @type {Array<AlertQuery>}
     * @memberof GettableGrafanaRule
     */
    data?: Array<AlertQuery>;
    /**
     * 
     * @type {string}
     * @memberof GettableGrafanaRule
     */
    execErrState?: GettableGrafanaRuleExecErrStateEnum;
    /**
     * 
     * @type {number}
     * @memberof GettableGrafanaRule
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof GettableGrafanaRule
     */
    intervalSeconds?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GettableGrafanaRule
     */
    isPaused?: boolean;
    /**
     * 
     * @type {AlertRuleMetadata}
     * @memberof GettableGrafanaRule
     */
    metadata?: AlertRuleMetadata;
    /**
     * 
     * @type {string}
     * @memberof GettableGrafanaRule
     */
    namespaceUid?: string;
    /**
     * 
     * @type {string}
     * @memberof GettableGrafanaRule
     */
    noDataState?: GettableGrafanaRuleNoDataStateEnum;
    /**
     * 
     * @type {AlertRuleNotificationSettings}
     * @memberof GettableGrafanaRule
     */
    notificationSettings?: AlertRuleNotificationSettings;
    /**
     * 
     * @type {number}
     * @memberof GettableGrafanaRule
     */
    orgId?: number;
    /**
     * 
     * @type {string}
     * @memberof GettableGrafanaRule
     */
    provenance?: string;
    /**
     * 
     * @type {Record}
     * @memberof GettableGrafanaRule
     */
    record?: Record;
    /**
     * 
     * @type {string}
     * @memberof GettableGrafanaRule
     */
    ruleGroup?: string;
    /**
     * 
     * @type {string}
     * @memberof GettableGrafanaRule
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof GettableGrafanaRule
     */
    uid?: string;
    /**
     * 
     * @type {Date}
     * @memberof GettableGrafanaRule
     */
    updated?: Date;
    /**
     * 
     * @type {number}
     * @memberof GettableGrafanaRule
     */
    version?: number;
}


/**
 * @export
 */
export const GettableGrafanaRuleExecErrStateEnum = {
    Ok: 'OK',
    Alerting: 'Alerting',
    Error: 'Error'
} as const;
export type GettableGrafanaRuleExecErrStateEnum = typeof GettableGrafanaRuleExecErrStateEnum[keyof typeof GettableGrafanaRuleExecErrStateEnum];

/**
 * @export
 */
export const GettableGrafanaRuleNoDataStateEnum = {
    Alerting: 'Alerting',
    NoData: 'NoData',
    Ok: 'OK'
} as const;
export type GettableGrafanaRuleNoDataStateEnum = typeof GettableGrafanaRuleNoDataStateEnum[keyof typeof GettableGrafanaRuleNoDataStateEnum];


/**
 * Check if a given object implements the GettableGrafanaRule interface.
 */
export function instanceOfGettableGrafanaRule(value: object): value is GettableGrafanaRule {
    return true;
}

export function GettableGrafanaRuleFromJSON(json: any): GettableGrafanaRule {
    return GettableGrafanaRuleFromJSONTyped(json, false);
}

export function GettableGrafanaRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): GettableGrafanaRule {
    if (json == null) {
        return json;
    }
    return {
        
        'condition': json['condition'] == null ? undefined : json['condition'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AlertQueryFromJSON)),
        'execErrState': json['exec_err_state'] == null ? undefined : json['exec_err_state'],
        'id': json['id'] == null ? undefined : json['id'],
        'intervalSeconds': json['intervalSeconds'] == null ? undefined : json['intervalSeconds'],
        'isPaused': json['is_paused'] == null ? undefined : json['is_paused'],
        'metadata': json['metadata'] == null ? undefined : AlertRuleMetadataFromJSON(json['metadata']),
        'namespaceUid': json['namespace_uid'] == null ? undefined : json['namespace_uid'],
        'noDataState': json['no_data_state'] == null ? undefined : json['no_data_state'],
        'notificationSettings': json['notification_settings'] == null ? undefined : AlertRuleNotificationSettingsFromJSON(json['notification_settings']),
        'orgId': json['orgId'] == null ? undefined : json['orgId'],
        'provenance': json['provenance'] == null ? undefined : json['provenance'],
        'record': json['record'] == null ? undefined : RecordFromJSON(json['record']),
        'ruleGroup': json['rule_group'] == null ? undefined : json['rule_group'],
        'title': json['title'] == null ? undefined : json['title'],
        'uid': json['uid'] == null ? undefined : json['uid'],
        'updated': json['updated'] == null ? undefined : (new Date(json['updated'])),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function GettableGrafanaRuleToJSON(json: any): GettableGrafanaRule {
    return GettableGrafanaRuleToJSONTyped(json, false);
}

export function GettableGrafanaRuleToJSONTyped(value?: GettableGrafanaRule | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'condition': value['condition'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AlertQueryToJSON)),
        'exec_err_state': value['execErrState'],
        'id': value['id'],
        'intervalSeconds': value['intervalSeconds'],
        'is_paused': value['isPaused'],
        'metadata': AlertRuleMetadataToJSON(value['metadata']),
        'namespace_uid': value['namespaceUid'],
        'no_data_state': value['noDataState'],
        'notification_settings': AlertRuleNotificationSettingsToJSON(value['notificationSettings']),
        'orgId': value['orgId'],
        'provenance': value['provenance'],
        'record': RecordToJSON(value['record']),
        'rule_group': value['ruleGroup'],
        'title': value['title'],
        'uid': value['uid'],
        'updated': value['updated'] == null ? undefined : ((value['updated']).toISOString()),
        'version': value['version'],
    };
}
