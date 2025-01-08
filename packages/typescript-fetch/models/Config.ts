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
import type { InhibitRule } from './InhibitRule.js';
import {
    InhibitRuleFromJSON,
    InhibitRuleFromJSONTyped,
    InhibitRuleToJSON,
    InhibitRuleToJSONTyped,
} from './InhibitRule.js';
import type { MuteTimeInterval } from './MuteTimeInterval.js';
import {
    MuteTimeIntervalFromJSON,
    MuteTimeIntervalFromJSONTyped,
    MuteTimeIntervalToJSON,
    MuteTimeIntervalToJSONTyped,
} from './MuteTimeInterval.js';
import type { TimeInterval } from './TimeInterval.js';
import {
    TimeIntervalFromJSON,
    TimeIntervalFromJSONTyped,
    TimeIntervalToJSON,
    TimeIntervalToJSONTyped,
} from './TimeInterval.js';
import type { GlobalConfig } from './GlobalConfig.js';
import {
    GlobalConfigFromJSON,
    GlobalConfigFromJSONTyped,
    GlobalConfigToJSON,
    GlobalConfigToJSONTyped,
} from './GlobalConfig.js';
import type { Route } from './Route.js';
import {
    RouteFromJSON,
    RouteFromJSONTyped,
    RouteToJSON,
    RouteToJSONTyped,
} from './Route.js';

/**
 * 
 * @export
 * @interface Config
 */
export interface Config {
    /**
     * 
     * @type {GlobalConfig}
     * @memberof Config
     */
    global?: GlobalConfig;
    /**
     * 
     * @type {Array<InhibitRule>}
     * @memberof Config
     */
    inhibitRules?: Array<InhibitRule>;
    /**
     * MuteTimeIntervals is deprecated and will be removed before Alertmanager 1.0.
     * @type {Array<MuteTimeInterval>}
     * @memberof Config
     */
    muteTimeIntervals?: Array<MuteTimeInterval>;
    /**
     * 
     * @type {Route}
     * @memberof Config
     */
    route?: Route;
    /**
     * 
     * @type {Array<string>}
     * @memberof Config
     */
    templates?: Array<string>;
    /**
     * 
     * @type {Array<TimeInterval>}
     * @memberof Config
     */
    timeIntervals?: Array<TimeInterval>;
}

/**
 * Check if a given object implements the Config interface.
 */
export function instanceOfConfig(value: object): value is Config {
    return true;
}

export function ConfigFromJSON(json: any): Config {
    return ConfigFromJSONTyped(json, false);
}

export function ConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): Config {
    if (json == null) {
        return json;
    }
    return {
        
        'global': json['global'] == null ? undefined : GlobalConfigFromJSON(json['global']),
        'inhibitRules': json['inhibit_rules'] == null ? undefined : ((json['inhibit_rules'] as Array<any>).map(InhibitRuleFromJSON)),
        'muteTimeIntervals': json['mute_time_intervals'] == null ? undefined : ((json['mute_time_intervals'] as Array<any>).map(MuteTimeIntervalFromJSON)),
        'route': json['route'] == null ? undefined : RouteFromJSON(json['route']),
        'templates': json['templates'] == null ? undefined : json['templates'],
        'timeIntervals': json['time_intervals'] == null ? undefined : ((json['time_intervals'] as Array<any>).map(TimeIntervalFromJSON)),
    };
}

export function ConfigToJSON(json: any): Config {
    return ConfigToJSONTyped(json, false);
}

export function ConfigToJSONTyped(value?: Config | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'global': GlobalConfigToJSON(value['global']),
        'inhibit_rules': value['inhibitRules'] == null ? undefined : ((value['inhibitRules'] as Array<any>).map(InhibitRuleToJSON)),
        'mute_time_intervals': value['muteTimeIntervals'] == null ? undefined : ((value['muteTimeIntervals'] as Array<any>).map(MuteTimeIntervalToJSON)),
        'route': RouteToJSON(value['route']),
        'templates': value['templates'],
        'time_intervals': value['timeIntervals'] == null ? undefined : ((value['timeIntervals'] as Array<any>).map(TimeIntervalToJSON)),
    };
}

