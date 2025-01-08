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
 * @interface AlertRuleNotificationSettings
 */
export interface AlertRuleNotificationSettings {
    /**
     * Override the labels by which incoming alerts are grouped together. For example, multiple alerts coming in for
     * cluster=A and alertname=LatencyHigh would be batched into a single group. To aggregate by all possible labels
     * use the special value '...' as the sole label name.
     * This effectively disables aggregation entirely, passing through all alerts as-is. This is unlikely to be what
     * you want, unless you have a very low alert volume or your upstream notification system performs its own grouping.
     * Must include 'alertname' and 'grafana_folder' if not using '...'.
     * @type {Array<string>}
     * @memberof AlertRuleNotificationSettings
     */
    groupBy?: Array<string>;
    /**
     * Override how long to wait before sending a notification about new alerts that are added to a group of alerts for
     * which an initial notification has already been sent. (Usually ~5m or more.)
     * @type {string}
     * @memberof AlertRuleNotificationSettings
     */
    groupInterval?: string;
    /**
     * Override how long to initially wait to send a notification for a group of alerts. Allows to wait for an
     * inhibiting alert to arrive or collect more initial alerts for the same group. (Usually ~0s to few minutes.)
     * @type {string}
     * @memberof AlertRuleNotificationSettings
     */
    groupWait?: string;
    /**
     * Override the times when notifications should be muted. These must match the name of a mute time interval defined
     * in the alertmanager configuration mute_time_intervals section. When muted it will not send any notifications, but
     * otherwise acts normally.
     * @type {Array<string>}
     * @memberof AlertRuleNotificationSettings
     */
    muteTimeIntervals?: Array<string>;
    /**
     * Name of the receiver to send notifications to.
     * @type {string}
     * @memberof AlertRuleNotificationSettings
     */
    receiver: string;
    /**
     * Override how long to wait before sending a notification again if it has already been sent successfully for an
     * alert. (Usually ~3h or more).
     * Note that this parameter is implicitly bound by Alertmanager's `--data.retention` configuration flag.
     * Notifications will be resent after either repeat_interval or the data retention period have passed, whichever
     * occurs first. `repeat_interval` should not be less than `group_interval`.
     * @type {string}
     * @memberof AlertRuleNotificationSettings
     */
    repeatInterval?: string;
}

/**
 * Check if a given object implements the AlertRuleNotificationSettings interface.
 */
export function instanceOfAlertRuleNotificationSettings(value: object): value is AlertRuleNotificationSettings {
    if (!('receiver' in value) || value['receiver'] === undefined) return false;
    return true;
}

export function AlertRuleNotificationSettingsFromJSON(json: any): AlertRuleNotificationSettings {
    return AlertRuleNotificationSettingsFromJSONTyped(json, false);
}

export function AlertRuleNotificationSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertRuleNotificationSettings {
    if (json == null) {
        return json;
    }
    return {
        
        'groupBy': json['group_by'] == null ? undefined : json['group_by'],
        'groupInterval': json['group_interval'] == null ? undefined : json['group_interval'],
        'groupWait': json['group_wait'] == null ? undefined : json['group_wait'],
        'muteTimeIntervals': json['mute_time_intervals'] == null ? undefined : json['mute_time_intervals'],
        'receiver': json['receiver'],
        'repeatInterval': json['repeat_interval'] == null ? undefined : json['repeat_interval'],
    };
}

export function AlertRuleNotificationSettingsToJSON(json: any): AlertRuleNotificationSettings {
    return AlertRuleNotificationSettingsToJSONTyped(json, false);
}

export function AlertRuleNotificationSettingsToJSONTyped(value?: AlertRuleNotificationSettings | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'group_by': value['groupBy'],
        'group_interval': value['groupInterval'],
        'group_wait': value['groupWait'],
        'mute_time_intervals': value['muteTimeIntervals'],
        'receiver': value['receiver'],
        'repeat_interval': value['repeatInterval'],
    };
}

