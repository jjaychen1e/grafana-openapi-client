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
 * AlertStatus alert status
 * @export
 * @interface AlertStatus
 */
export interface AlertStatus {
    /**
     * inhibited by
     * @type {Array<string>}
     * @memberof AlertStatus
     */
    inhibitedBy: Array<string>;
    /**
     * silenced by
     * @type {Array<string>}
     * @memberof AlertStatus
     */
    silencedBy: Array<string>;
    /**
     * state
     * @type {string}
     * @memberof AlertStatus
     */
    state: AlertStatusStateEnum;
}


/**
 * @export
 */
export const AlertStatusStateEnum = {
    UnprocessedActiveSuppressed: '[unprocessed active suppressed]'
} as const;
export type AlertStatusStateEnum = typeof AlertStatusStateEnum[keyof typeof AlertStatusStateEnum];


/**
 * Check if a given object implements the AlertStatus interface.
 */
export function instanceOfAlertStatus(value: object): value is AlertStatus {
    if (!('inhibitedBy' in value) || value['inhibitedBy'] === undefined) return false;
    if (!('silencedBy' in value) || value['silencedBy'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    return true;
}

export function AlertStatusFromJSON(json: any): AlertStatus {
    return AlertStatusFromJSONTyped(json, false);
}

export function AlertStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'inhibitedBy': json['inhibitedBy'],
        'silencedBy': json['silencedBy'],
        'state': json['state'],
    };
}

export function AlertStatusToJSON(json: any): AlertStatus {
    return AlertStatusToJSONTyped(json, false);
}

export function AlertStatusToJSONTyped(value?: AlertStatus | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'inhibitedBy': value['inhibitedBy'],
        'silencedBy': value['silencedBy'],
        'state': value['state'],
    };
}
