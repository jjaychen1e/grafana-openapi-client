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
import type { Alert } from './Alert.js';
import {
    AlertFromJSON,
    AlertFromJSONTyped,
    AlertToJSON,
    AlertToJSONTyped,
} from './Alert.js';

/**
 * 
 * @export
 * @interface AlertDiscovery
 */
export interface AlertDiscovery {
    /**
     * 
     * @type {Array<Alert>}
     * @memberof AlertDiscovery
     */
    alerts: Array<Alert>;
}

/**
 * Check if a given object implements the AlertDiscovery interface.
 */
export function instanceOfAlertDiscovery(value: object): value is AlertDiscovery {
    if (!('alerts' in value) || value['alerts'] === undefined) return false;
    return true;
}

export function AlertDiscoveryFromJSON(json: any): AlertDiscovery {
    return AlertDiscoveryFromJSONTyped(json, false);
}

export function AlertDiscoveryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertDiscovery {
    if (json == null) {
        return json;
    }
    return {
        
        'alerts': ((json['alerts'] as Array<any>).map(AlertFromJSON)),
    };
}

export function AlertDiscoveryToJSON(json: any): AlertDiscovery {
    return AlertDiscoveryToJSONTyped(json, false);
}

export function AlertDiscoveryToJSONTyped(value?: AlertDiscovery | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'alerts': ((value['alerts'] as Array<any>).map(AlertToJSON)),
    };
}
