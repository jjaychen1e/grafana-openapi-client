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
 * Receiver receiver
 * @export
 * @interface Receiver
 */
export interface Receiver {
    /**
     * name
     * @type {string}
     * @memberof Receiver
     */
    name: string;
}

/**
 * Check if a given object implements the Receiver interface.
 */
export function instanceOfReceiver(value: object): value is Receiver {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function ReceiverFromJSON(json: any): Receiver {
    return ReceiverFromJSONTyped(json, false);
}

export function ReceiverFromJSONTyped(json: any, ignoreDiscriminator: boolean): Receiver {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function ReceiverToJSON(json: any): Receiver {
    return ReceiverToJSONTyped(json, false);
}

export function ReceiverToJSONTyped(value?: Receiver | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
    };
}
