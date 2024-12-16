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
import type { GettableAlert } from './GettableAlert';
import {
    GettableAlertFromJSON,
    GettableAlertFromJSONTyped,
    GettableAlertToJSON,
    GettableAlertToJSONTyped,
} from './GettableAlert';
import type { Receiver } from './Receiver';
import {
    ReceiverFromJSON,
    ReceiverFromJSONTyped,
    ReceiverToJSON,
    ReceiverToJSONTyped,
} from './Receiver';

/**
 * AlertGroup alert group
 * @export
 * @interface AlertGroup
 */
export interface AlertGroup {
    /**
     * alerts
     * @type {Array<GettableAlert>}
     * @memberof AlertGroup
     */
    alerts: Array<GettableAlert>;
    /**
     * LabelSet label set
     * @type {{ [key: string]: string; }}
     * @memberof AlertGroup
     */
    labels: { [key: string]: string; };
    /**
     * 
     * @type {Receiver}
     * @memberof AlertGroup
     */
    receiver: Receiver;
}

/**
 * Check if a given object implements the AlertGroup interface.
 */
export function instanceOfAlertGroup(value: object): value is AlertGroup {
    if (!('alerts' in value) || value['alerts'] === undefined) return false;
    if (!('labels' in value) || value['labels'] === undefined) return false;
    if (!('receiver' in value) || value['receiver'] === undefined) return false;
    return true;
}

export function AlertGroupFromJSON(json: any): AlertGroup {
    return AlertGroupFromJSONTyped(json, false);
}

export function AlertGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertGroup {
    if (json == null) {
        return json;
    }
    return {
        
        'alerts': ((json['alerts'] as Array<any>).map(GettableAlertFromJSON)),
        'labels': json['labels'],
        'receiver': ReceiverFromJSON(json['receiver']),
    };
}

export function AlertGroupToJSON(json: any): AlertGroup {
    return AlertGroupToJSONTyped(json, false);
}

export function AlertGroupToJSONTyped(value?: AlertGroup | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'alerts': ((value['alerts'] as Array<any>).map(GettableAlertToJSON)),
        'labels': value['labels'],
        'receiver': ReceiverToJSON(value['receiver']),
    };
}

