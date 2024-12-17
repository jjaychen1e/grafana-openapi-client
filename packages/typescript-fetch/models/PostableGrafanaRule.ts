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
import type { AlertQuery } from './AlertQuery';
import {
    AlertQueryFromJSON,
    AlertQueryFromJSONTyped,
    AlertQueryToJSON,
    AlertQueryToJSONTyped,
} from './AlertQuery';
import type { AlertRuleNotificationSettings } from './AlertRuleNotificationSettings';
import {
    AlertRuleNotificationSettingsFromJSON,
    AlertRuleNotificationSettingsFromJSONTyped,
    AlertRuleNotificationSettingsToJSON,
    AlertRuleNotificationSettingsToJSONTyped,
} from './AlertRuleNotificationSettings';
import type { Record } from './Record';
import {
    RecordFromJSON,
    RecordFromJSONTyped,
    RecordToJSON,
    RecordToJSONTyped,
} from './Record';

/**
 * 
 * @export
 * @interface PostableGrafanaRule
 */
export interface PostableGrafanaRule {
    /**
     * 
     * @type {string}
     * @memberof PostableGrafanaRule
     */
    condition?: string;
    /**
     * 
     * @type {Array<AlertQuery>}
     * @memberof PostableGrafanaRule
     */
    data?: Array<AlertQuery>;
    /**
     * 
     * @type {string}
     * @memberof PostableGrafanaRule
     */
    execErrState?: PostableGrafanaRuleExecErrStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof PostableGrafanaRule
     */
    isPaused?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PostableGrafanaRule
     */
    noDataState?: PostableGrafanaRuleNoDataStateEnum;
    /**
     * 
     * @type {AlertRuleNotificationSettings}
     * @memberof PostableGrafanaRule
     */
    notificationSettings?: AlertRuleNotificationSettings;
    /**
     * 
     * @type {Record}
     * @memberof PostableGrafanaRule
     */
    record?: Record;
    /**
     * 
     * @type {string}
     * @memberof PostableGrafanaRule
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof PostableGrafanaRule
     */
    uid?: string;
}


/**
 * @export
 */
export const PostableGrafanaRuleExecErrStateEnum = {
    Ok: 'OK',
    Alerting: 'Alerting',
    Error: 'Error'
} as const;
export type PostableGrafanaRuleExecErrStateEnum = typeof PostableGrafanaRuleExecErrStateEnum[keyof typeof PostableGrafanaRuleExecErrStateEnum];

/**
 * @export
 */
export const PostableGrafanaRuleNoDataStateEnum = {
    Alerting: 'Alerting',
    NoData: 'NoData',
    Ok: 'OK'
} as const;
export type PostableGrafanaRuleNoDataStateEnum = typeof PostableGrafanaRuleNoDataStateEnum[keyof typeof PostableGrafanaRuleNoDataStateEnum];


/**
 * Check if a given object implements the PostableGrafanaRule interface.
 */
export function instanceOfPostableGrafanaRule(value: object): value is PostableGrafanaRule {
    return true;
}

export function PostableGrafanaRuleFromJSON(json: any): PostableGrafanaRule {
    return PostableGrafanaRuleFromJSONTyped(json, false);
}

export function PostableGrafanaRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostableGrafanaRule {
    if (json == null) {
        return json;
    }
    return {
        
        'condition': json['condition'] == null ? undefined : json['condition'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AlertQueryFromJSON)),
        'execErrState': json['exec_err_state'] == null ? undefined : json['exec_err_state'],
        'isPaused': json['is_paused'] == null ? undefined : json['is_paused'],
        'noDataState': json['no_data_state'] == null ? undefined : json['no_data_state'],
        'notificationSettings': json['notification_settings'] == null ? undefined : AlertRuleNotificationSettingsFromJSON(json['notification_settings']),
        'record': json['record'] == null ? undefined : RecordFromJSON(json['record']),
        'title': json['title'] == null ? undefined : json['title'],
        'uid': json['uid'] == null ? undefined : json['uid'],
    };
}

export function PostableGrafanaRuleToJSON(json: any): PostableGrafanaRule {
    return PostableGrafanaRuleToJSONTyped(json, false);
}

export function PostableGrafanaRuleToJSONTyped(value?: PostableGrafanaRule | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'condition': value['condition'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AlertQueryToJSON)),
        'exec_err_state': value['execErrState'],
        'is_paused': value['isPaused'],
        'no_data_state': value['noDataState'],
        'notification_settings': AlertRuleNotificationSettingsToJSON(value['notificationSettings']),
        'record': RecordToJSON(value['record']),
        'title': value['title'],
        'uid': value['uid'],
    };
}

