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
import type { InhibitRule } from './InhibitRule';
import {
    InhibitRuleFromJSON,
    InhibitRuleFromJSONTyped,
    InhibitRuleToJSON,
    InhibitRuleToJSONTyped,
} from './InhibitRule';
import type { MuteTimeInterval } from './MuteTimeInterval';
import {
    MuteTimeIntervalFromJSON,
    MuteTimeIntervalFromJSONTyped,
    MuteTimeIntervalToJSON,
    MuteTimeIntervalToJSONTyped,
} from './MuteTimeInterval';
import type { TimeInterval } from './TimeInterval';
import {
    TimeIntervalFromJSON,
    TimeIntervalFromJSONTyped,
    TimeIntervalToJSON,
    TimeIntervalToJSONTyped,
} from './TimeInterval';
import type { GlobalConfig } from './GlobalConfig';
import {
    GlobalConfigFromJSON,
    GlobalConfigFromJSONTyped,
    GlobalConfigToJSON,
    GlobalConfigToJSONTyped,
} from './GlobalConfig';
import type { PostableApiReceiver } from './PostableApiReceiver';
import {
    PostableApiReceiverFromJSON,
    PostableApiReceiverFromJSONTyped,
    PostableApiReceiverToJSON,
    PostableApiReceiverToJSONTyped,
} from './PostableApiReceiver';
import type { Route } from './Route';
import {
    RouteFromJSON,
    RouteFromJSONTyped,
    RouteToJSON,
    RouteToJSONTyped,
} from './Route';

/**
 * nolint:revive
 * @export
 * @interface PostableApiAlertingConfig
 */
export interface PostableApiAlertingConfig {
    /**
     * 
     * @type {GlobalConfig}
     * @memberof PostableApiAlertingConfig
     */
    global?: GlobalConfig;
    /**
     * 
     * @type {Array<InhibitRule>}
     * @memberof PostableApiAlertingConfig
     */
    inhibitRules?: Array<InhibitRule>;
    /**
     * MuteTimeIntervals is deprecated and will be removed before Alertmanager 1.0.
     * @type {Array<MuteTimeInterval>}
     * @memberof PostableApiAlertingConfig
     */
    muteTimeIntervals?: Array<MuteTimeInterval>;
    /**
     * Override with our superset receiver type
     * @type {Array<PostableApiReceiver>}
     * @memberof PostableApiAlertingConfig
     */
    receivers?: Array<PostableApiReceiver>;
    /**
     * 
     * @type {Route}
     * @memberof PostableApiAlertingConfig
     */
    route?: Route;
    /**
     * 
     * @type {Array<string>}
     * @memberof PostableApiAlertingConfig
     */
    templates?: Array<string>;
    /**
     * 
     * @type {Array<TimeInterval>}
     * @memberof PostableApiAlertingConfig
     */
    timeIntervals?: Array<TimeInterval>;
}

/**
 * Check if a given object implements the PostableApiAlertingConfig interface.
 */
export function instanceOfPostableApiAlertingConfig(value: object): value is PostableApiAlertingConfig {
    return true;
}

export function PostableApiAlertingConfigFromJSON(json: any): PostableApiAlertingConfig {
    return PostableApiAlertingConfigFromJSONTyped(json, false);
}

export function PostableApiAlertingConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostableApiAlertingConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'global': json['global'] == null ? undefined : GlobalConfigFromJSON(json['global']),
        'inhibitRules': json['inhibit_rules'] == null ? undefined : ((json['inhibit_rules'] as Array<any>).map(InhibitRuleFromJSON)),
        'muteTimeIntervals': json['mute_time_intervals'] == null ? undefined : ((json['mute_time_intervals'] as Array<any>).map(MuteTimeIntervalFromJSON)),
        'receivers': json['receivers'] == null ? undefined : ((json['receivers'] as Array<any>).map(PostableApiReceiverFromJSON)),
        'route': json['route'] == null ? undefined : RouteFromJSON(json['route']),
        'templates': json['templates'] == null ? undefined : json['templates'],
        'timeIntervals': json['time_intervals'] == null ? undefined : ((json['time_intervals'] as Array<any>).map(TimeIntervalFromJSON)),
    };
}

export function PostableApiAlertingConfigToJSON(json: any): PostableApiAlertingConfig {
    return PostableApiAlertingConfigToJSONTyped(json, false);
}

export function PostableApiAlertingConfigToJSONTyped(value?: PostableApiAlertingConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'global': GlobalConfigToJSON(value['global']),
        'inhibit_rules': value['inhibitRules'] == null ? undefined : ((value['inhibitRules'] as Array<any>).map(InhibitRuleToJSON)),
        'mute_time_intervals': value['muteTimeIntervals'] == null ? undefined : ((value['muteTimeIntervals'] as Array<any>).map(MuteTimeIntervalToJSON)),
        'receivers': value['receivers'] == null ? undefined : ((value['receivers'] as Array<any>).map(PostableApiReceiverToJSON)),
        'route': RouteToJSON(value['route']),
        'templates': value['templates'],
        'time_intervals': value['timeIntervals'] == null ? undefined : ((value['timeIntervals'] as Array<any>).map(TimeIntervalToJSON)),
    };
}

